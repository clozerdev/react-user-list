import { useState } from 'react';
import { useFilters } from '../lib/hooks/use-filters';
import { useUsers } from '../lib/hooks/use-users';
import UserFormsProvider from './providers/user-forms-provider';
import UserFormContainer from './user-forms/user-form-container';
import UsersListFilter from './user-list-filters';
import UserListPagination from './user-list-pagination';
import UsersListRows from './user-list-rows';
import UsersListViewSelector from './users-list-view-selector';

const UsersList = () => {
	const [view, setView] = useState(true);

	const { filters, filtersSetters, paginationSetters, resetFilters } =
		useFilters();

	const { users, usersError, usersLoading, usersCount } = useUsers(filters);

	return (
		<div className='max-w-container mx-auto space-y-4'>
			<h1 className='font-bold text-xl text-center my-8'>
				Listado de usuarios
			</h1>
			<UserFormsProvider resetFilters={resetFilters}>
				<UsersListFilter
					search={filters.search}
					sortBy={filters.sortBy}
					onlyActive={filters.onlyActive}
					{...filtersSetters}
				/>
				<UserFormContainer />
				<UsersListViewSelector view={view} setView={setView} />
				<UsersListRows
					users={users}
					error={usersError}
					loading={usersLoading}
					view={view}
				/>
			</UserFormsProvider>
			<UserListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				totalUsers={usersCount}
				{...paginationSetters}
			/>
		</div>
	);
};

export default UsersList;
