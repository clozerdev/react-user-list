import { useEffect, useState } from 'react';
import {
	filterActiveUsers,
	filterUsersByName,
	paginateUsers,
	sortUsers
} from '../users/filter-users';

const fetchUsers = async (setData, setError, signal) => {
	try {
		const response = await fetch('http://localhost:4000/users', { signal });

		if (response.ok) {
			const data = await response.json();
			setData(data);
		} else setError();
	} catch (err) {
		setError();
	}
};

const getUsersToDisplay = (
	users,
	{ onlyActive, search, sortBy, page, itemsPerPage }
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

export const useUsers = filters => {
	const [users, setUsers] = useState({
		data: [],
		error: false,
		loading: true
	});

	const setData = newData => {
		setUsers({
			data: newData,
			loading: false,
			error: false
		});
	};

	const setError = () => {
		setUsers({
			data: [],
			loading: false,
			error: true
		});
	};

	useEffect(() => {
		const controller = new AbortController();
		fetchUsers(setData, setError, controller.signal);

		return () => controller.abort();
	}, []);

	const { paginatedUsers, totalPages } = getUsersToDisplay(
		users.data,
		filters
	);
	return {
		users: paginatedUsers,
		totalPages,
		error: users.error,
		loading: users.loading
	};
};
