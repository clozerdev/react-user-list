import UserRow from './user-row';

const UsersListRows = ({ users, error, loading }) => {
	if (loading) return <p>Cargando usuarios...</p>;
	if (error) return <p>Se ha producido un error al cargar los usuarios...</p>;
	if (!users.length) return <p>No existen usuarios...</p>;

	return users.map(user => <UserRow key={user.id} {...user} />);
};

export default UsersListRows;
