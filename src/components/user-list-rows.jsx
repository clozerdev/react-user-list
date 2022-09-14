import UserCard from './user-card';
import UserRow from './user-row';

const UsersListRows = ({ users, error, loading, view }) => {
	if (loading) return <p>Cargando usuarios...</p>;
	if (error) return <p>Se ha producido un error al cargar los usuarios...</p>;
	if (!users.length) return <p>No existen usuarios...</p>;

	const UserComponent = view ? UserRow : UserCard;

	return (
		<div className='flex flex-wrap'>
			{users.map(user => (
				<UserComponent key={user.id} {...user} />
			))}
		</div>
	);
};

export default UsersListRows;
