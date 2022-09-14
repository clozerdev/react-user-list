import { useState } from 'react';
import { useFilters } from '../lib/hooks/use-filters';
import { useUsers } from '../lib/hooks/use-users';
import { getUsersToDisplay } from '../lib/users/filter-users';
import UserFormsProvider from './providers/user-forms-provider';
import UserFormContainer from './user-forms/user-form-container';
import UsersListFilter from './user-list-filters';
import UserListPagination from './user-list-pagination';
import UsersListRows from './user-list-rows';
import UsersListViewSelector from './users-list-view-selector';

const UsersList = () => {
	const [view, setView] = useState(true);

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

	return (
		<div className='max-w-container mx-auto space-y-4'>
			<h1 className='font-bold text-xl text-center my-8'>
				Listado de usuarios
			</h1>
			<UserFormsProvider
				reloadUsers={reloadUsers}
				resetFilters={resetFilters}
			>
				<UsersListFilter {...filters} {...filtersSetters} />
				<UsersListViewSelector view={view} setView={setView} />
				<UserFormContainer />
				<UsersListRows
					users={paginatedUsers}
					error={usersError}
					loading={usersLoading}
					view={view}
				/>
			</UserFormsProvider>
			<UserListPagination
				{...pagination}
				{...paginationSetters}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default UsersList;
