import UserRow from './user-row';

const UsersListRows = ({ users, toggleUserActive }) => {
	if (!users.length) return <p>No existen usuarios...</p>;

	return users.map(user => (
		<UserRow key={user.id} toggleUserActive={toggleUserActive} {...user} />
	));
};

export default UsersListRows;
