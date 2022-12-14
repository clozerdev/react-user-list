import { useReducer, useState } from 'react';
import { reset } from '../lib/actions/filters-actions';
import { useUsers } from '../lib/hooks/use-users';
import {
	filtersReducer,
	FILTERS_INITIAL_STATE
} from '../lib/reducers/filters-reducer';
import UserFormsProvider from './providers/user-forms-provider';
import UserFormContainer from './user-forms/user-form-container';
import UsersListFilter from './user-list-filters';
import UserListPagination from './user-list-pagination';
import UsersListRows from './user-list-rows';
import UsersListViewSelector from './users-list-view-selector';

const UsersList = () => {
	const [showRowsFormat, setShowRowsFormat] = useState(true);
	const [filters, dispatchFilters] = useReducer(
		filtersReducer,
		FILTERS_INITIAL_STATE
	);

	const { users, totalUsers, usersError, usersLoading } = useUsers(filters);

	return (
		<div className='max-w-container mx-auto space-y-4'>
			<h1 className='font-bold text-xl text-center my-8'>
				Listado de usuarios
			</h1>
			<UserFormsProvider resetFilters={() => dispatchFilters(reset())}>
				<UsersListFilter
					search={filters.search}
					sortBy={filters.sortBy}
					onlyActive={filters.onlyActive}
					dispatchFilters={dispatchFilters}
				/>
				<UserFormContainer />
				<UsersListViewSelector
					showRowsFormat={showRowsFormat}
					setShowRowsFormat={setShowRowsFormat}
				/>
				<UsersListRows
					users={users}
					error={usersError}
					loading={usersLoading}
					showRowsFormat={showRowsFormat}
				/>
			</UserFormsProvider>
			<UserListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				totalUsers={totalUsers}
				dispatchFilters={dispatchFilters}
			/>
		</div>
	);
};

export default UsersList;
