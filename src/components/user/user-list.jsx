import { useState } from 'react';
import { UsersContext } from '../../lib/contexts/users-context';
import useFilters from '../../lib/hooks/use-filters';
import UsersListFilter from './user-list-filters';
import UsersListRows from './user-list-rows';

const UsersList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const { users, toggleUserActive } = useUsers(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className='max-w-[600px] mx-auto p-4 space-y-4'>
			<h1 className='font-bold text-xl'>Listado de usuarios</h1>
			<UsersListFilter
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFunctions}
			/>
			<UsersContext.Provider value={{ toggleUserActive }}>
				<UsersListRows users={usersFiltered} />
			</UsersContext.Provider>
		</div>
	);
};

const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers);

	const toggleUserActive = userId => {
		const newUsers = [...users];
		const userIndex = newUsers.findIndex(user => user.id === userId);

		if (userIndex === -1) return;

		newUsers[userIndex].active = !newUsers[userIndex].active;
		setUsers(newUsers);
	};

	return { users, toggleUserActive };
};

const filterUsersByName = (users, search) => {
	if (!search) return [...users];
	const lowerCasedSearch = search.toLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCasedSearch)
	);
};

const filterActiveUsers = (users, active) => {
	if (!active) return [...users];
	return users.filter(user => user.active);
};

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];

	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		default:
			return sortedUsers;
	}
};

export default UsersList;
