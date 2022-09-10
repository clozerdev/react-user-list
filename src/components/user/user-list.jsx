import { useState } from 'react';
import { useFilters } from '../../lib/hooks/use-filters';
import {
	filterActiveUsers,
	filterUsersByName,
	sortUsers
} from '../../lib/users/filter-users';
import UsersListFilter from './user-list-filters';
import UsersListRows from './user-list-rows';

const UsersList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const { users } = useUsers(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className='max-w-container mx-auto p-4'>
			<h1 className='font-bold text-xl text-center mb-12'>
				Listado de usuarios
			</h1>
			<UsersListFilter
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFunctions}
			/>
			<UsersListRows users={usersFiltered} />
		</div>
	);
};

const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers);
	return { users, setUsers };
};

export default UsersList;
