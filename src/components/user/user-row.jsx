import UserRole from './user-role';
import UserStatus from './user-status';

const UserRow = ({ name, active, role }) => (
	<div className='flex items-center justify-between border-[1px] border-gray-500 rounded-sm p-4'>
		<div className='w-[60%]'>
			<span className='font-bold'>{name}</span>
		</div>
		<div className=' w-[20%] flex items-center justify-center'>
			<UserStatus active={active} />
		</div>
		<div className='w-[20%] flex items-center justify-center'>
			<UserRole role={role} />
		</div>
	</div>
);

export default UserRow;
