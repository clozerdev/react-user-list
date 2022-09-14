export const createUserApi = async user => {
	try {
		const res = await fetch('http://localhost:4000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		return res.ok;
	} catch {
		return false;
	}
};

export const updateUserApi = async user => {
	try {
		const res = await fetch(`http://localhost:4000/users/${user.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		return res.ok;
	} catch {
		return false;
	}
};

export const deleteUserApi = async userId => {
	try {
		const res = await fetch(`http://localhost:4000/users/${userId}`, {
			method: 'DELETE'
		});

		return res.ok;
	} catch {
		return false;
	}
};

export const findAllUsersApi = async signal => {
	try {
		const res = await fetch('http://localhost:4000/users', { signal });
		let users;

		if (res.ok) users = await res.json();

		return {
			users,
			error: !res.ok,
			aborted: false
		};
	} catch (err) {
		const isAborted = err.code === 20;

		return {
			users: undefined,
			error: !isAborted,
			aborted: isAborted
		};
	}
};

export const findUserByUsername = async (username, signal) => {
	try {
		const res = await fetch(`http://localhost:4000/users?username=${username}`, { signal });

		let user;

		if (res.ok) {
			const users = await res.json();
			user = users[0];
		}

		return {
			user,
			error: !res.ok,
			aborted: false
		};
	} catch (err) {
		const isAborted = err.code === 20;

		return {
			user: undefined,
			error: !isAborted,
			aborted: isAborted
		};
	}
};
