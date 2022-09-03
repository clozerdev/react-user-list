const UserStatus = ({ active }) => {
	const activeClassName = active ? 'text-green' : 'text-red';

	return (
		<span className={activeClassName}>
			{active ? 'Activo' : 'Inactivo'}
		</span>
	);
};

export default UserStatus;
