import UserDisplay from './user-display';
import UserRole from './user-role';
import UserStatus from './user-status';

const UserRow = ({ username, name, active, role }) => (
	<div className='flex items-center shadow rounded-md px-4 py-2 mb-4'>
		<div className='w-[45%]'>
			<UserDisplay name={name} username={username} />
		</div>
		<div className='flex-c-c w-[20%]'>
			<UserStatus active={active} />
		</div>
		<div className='flex-c-c w-[20%]'>
			<UserRole role={role} />
		</div>
		<div className='flex-c-c w-[15%]'></div>
	</div>
);

export default UserRow;
