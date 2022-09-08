import UserRole from './user-role';
import UserStatus from './user-status';

const UserRow = ({ name, active, role, userId, toggleUserActive }) => (
	<div className='flex items-center justify-between border-2 border-gray-500 rounded-sm p-4'>
		<div className='w-[40%]'>
			<span className='font-bold'>{name}</span>
		</div>
		<div className='w-[20%] flex-c-c'>
			<UserStatus active={active} />
		</div>
		<div className='w-[20%] flex-c-c'>
			<UserRole role={role} />
		</div>
		<div className='w-[20%] flex-c-c'>
			<button onClick={() => toggleUserActive(userId)}>
				{active ? 'Desactivar' : 'Activar'}
			</button>
		</div>
	</div>
);

export default UserRow;
