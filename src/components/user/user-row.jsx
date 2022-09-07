import { useState } from 'react';
import UserRole from './user-role';
import UserStatus from './user-status';

const UserRow = ({ name, active, role }) => {
	const [activeState, setActiveState] = useState(active);

	return (
		<div className='flex items-center justify-between border-[1px] border-gray-500 rounded-sm p-4'>
			<div className='w-[40%]'>
				<span className='font-bold'>{name}</span>
			</div>
			<div className='w-[20%] flex-c-c'>
				<UserStatus active={activeState} />
			</div>
			<div className='w-[20%] flex-c-c'>
				<UserRole role={role} />
			</div>
			<div className='w-[20%] flex-c-c'>
				<button onClick={() => setActiveState(!activeState)}>
					{activeState ? 'Desactivar' : 'Activar'}
				</button>
			</div>
		</div>
	);
};

export default UserRow;
