import { useState } from 'react';
import { USER_FORMS } from '../../constants/user-forms';
import { useFilters } from '../../lib/hooks/use-filters';
import { useUsers } from '../../lib/hooks/use-users';
import {
	filterActiveUsers,
	filterUsersByName,
	paginateUsers,
	sortUsers
} from '../../lib/users/filter-users';
import Button from '../buttons/button';
import UserCreateForm from '../user-forms/user-create.form';
import UserFormLayout from '../user-forms/user-form-layout';
import UsersListFilter from './user-list-filters';
import UserListPagination from './user-list-pagination';
import UsersListRows from './user-list-rows';

const UsersList = () => {
	const { currentForm, setFiltersForm, setCreateForm } = useForm();
	const {
		filters,
		pagination,
		filtersSetters,
		paginationSetters,
		resetFilters
	} = useFilters();

	const { users, usersError, usersLoading, reloadUsers } = useUsers();
	const { paginatedUsers, totalPages } = getUsersToDisplay(
		users,
		filters,
		pagination
	);

	const onSuccess = () => {
		reloadUsers();
		resetFilters();
		setFiltersForm();
	};

	return (
		<div className='max-w-container mx-auto p-4'>
			<h1 className='font-bold text-xl text-center mb-12'>
				Listado de usuarios
			</h1>
			{currentForm === USER_FORMS.FILTERS ? (
				<UsersListFilter
					{...filters}
					{...filtersSetters}
					slot={
						<Button onClick={setCreateForm}>Añadir usuario</Button>
					}
				/>
			) : (
				<UserFormLayout onClose={setFiltersForm}>
					<UserCreateForm onSuccess={onSuccess} />
				</UserFormLayout>
			)}
			<UsersListRows
				users={paginatedUsers}
				error={usersError}
				loading={usersLoading}
			/>
			<UserListPagination
				{...pagination}
				{...paginationSetters}
				totalPages={totalPages}
			/>
		</div>
	);
};

const getUsersToDisplay = (
	users,
	{ onlyActive, search, sortBy },
	{ page, itemsPerPage }
) => {
	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	const { totalPages, paginatedUsers } = paginateUsers(
		usersFiltered,
		page,
		itemsPerPage
	);

	return { paginatedUsers, totalPages };
};

const useForm = () => {
	const [currentForm, setCurrentForm] = useState(USER_FORMS.FILTERS);

	const setFiltersForm = () => setCurrentForm(USER_FORMS.FILTERS);
	const setCreateForm = () => setCurrentForm(USER_FORMS.CREATE);
	const setEditForm = () => setCurrentForm(USER_FORMS.EDIT);
	const setDeleteForm = () => setCurrentForm(USER_FORMS.DELETE);

	return {
		currentForm,
		setFiltersForm,
		setCreateForm,
		setEditForm,
		setDeleteForm
	};
};

export default UsersList;
