import { useFilters } from '../../lib/hooks/use-filters';
import {
	filterActiveUsers,
	filterUsersByName,
	paginateUsers,
	sortUsers
} from '../../lib/users/filter-users';
import UsersListFilter from './user-list-filters';
import UserListPagination from './user-list-pagination';
import UsersListRows from './user-list-rows';

const UsersList = ({ initialUsers }) => {
	const { filters, setPage, setItemsPerPage, ...setFiltersFunctions } =
		useFilters();

	const { users, totalPages } = getUsers(initialUsers, filters);

	return (
		<div className='max-w-container mx-auto p-4'>
			<h1 className='font-bold text-xl text-center mb-12'>
				Listado de usuarios
			</h1>
			<UsersListFilter
				search={filters.search}
				onlyActive={filters.onlyActive}
				sortBy={filters.sortBy}
				{...setFiltersFunctions}
			/>
			<UsersListRows users={users} />
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

const getUsers = (
	initialUsers,
	{ onlyActive, search, sortBy, page, itemsPerPage }
) => {
	let usersFiltered = filterActiveUsers(initialUsers, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	const totalPages = Math.ceil(usersFiltered.length / itemsPerPage);
	usersFiltered = paginateUsers(usersFiltered, page, itemsPerPage);

	return { users: usersFiltered, totalPages };
};

export default UsersList;
