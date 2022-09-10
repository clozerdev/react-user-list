import UserRow from './user-row';

const UsersListRows = ({ users }) => {
	if (!users.length) return <p>No existen usuarios...</p>;

	return users.map(user => <UserRow key={user.id} {...user} />);
};

export default UsersListRows;
