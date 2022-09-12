import { useState } from 'react';
import { USER_FORMS } from '../../constants/user-forms';
import { useFilters } from '../../lib/hooks/use-filters';
import { useUsers } from '../../lib/hooks/use-users';
import Button from '../buttons/button';
import UserCreateForm from '../user-forms/user-create.form';
import UsersListFilter from './user-list-filters';
import UserListPagination from './user-list-pagination';
import UsersListRows from './user-list-rows';

const UsersList = () => {
	const { currentForm, setFiltersForm, setCreateForm } = useForm();
	const {
		filters,
		setPage,
		setItemsPerPage,
		setOnlyActive,
		setSearch,
		setSortBy
	} = useFilters();

	const { users, totalPages, error, loading } = useUsers(filters);

	return (
		<div className='max-w-container mx-auto p-4'>
			<h1 className='font-bold text-xl text-center mb-12'>
				Listado de usuarios
			</h1>
			{currentForm === USER_FORMS.FILTERS ? (
				<UsersListFilter
					search={filters.search}
					onlyActive={filters.onlyActive}
					sortBy={filters.sortBy}
					setOnlyActive={setOnlyActive}
					setSearch={setSearch}
					setSortBy={setSortBy}
					slot={
						<Button onClick={setCreateForm}>Añadir usuario</Button>
					}
				/>
			) : (
				<UserCreateForm onClose={setFiltersForm} />
			)}
			<UsersListRows users={users} error={error} loading={loading} />
			<UserListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				setPage={setPage}
				setItemsPerPage={setItemsPerPage}
				totalPages={totalPages}
			/>
		</div>
	);
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
