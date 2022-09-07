const UserStatus = ({ active }) => (
	<span className={active ? 'text-green' : 'text-red'}>
		{active ? 'Activo' : 'Inactivo'}
	</span>
);

export default UserStatus;
