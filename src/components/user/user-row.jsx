import { useContext } from 'react';
import { UsersContext } from '../../lib/contexts/users-context';
import UserRole from './user-role';
import UserStatus from './user-status';

const UserRow = ({ id, name, active, role }) => {
	const { toggleUserActive } = useContext(UsersContext);

	return (
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
				<button onClick={() => toggleUserActive(id)}>
					{active ? 'Desactivar' : 'Activar'}
				</button>
			</div>
		</div>
	);
};

export default UserRow;
