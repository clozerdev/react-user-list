import { useContext } from 'react';
import { UserFormsContext } from '../../lib/contexts/user-forms-context';
import IconButton from '../buttons/icon-button';
import PencilIcon from '../icons/pencil-icon';
import TrashIcon from '../icons/trash-icon';
import UserDisplay from './user-display';
import UserRole from './user-role';
import UserStatus from './user-status';

const UserRow = ({ id, username, name, active, role }) => {
	const { setEditForm, setDeleteForm } = useContext(UserFormsContext);

	return (
		<div className='flex items-center shadow rounded-md p-4 mb-4'>
			<div className='w-[45%]'>
				<UserDisplay name={name} username={username} />
			</div>
			<div className='flex-c-c w-[20%]'>
				<UserStatus active={active} />
			</div>
			<div className='flex-c-c w-[20%]'>
				<UserRole role={role} />
			</div>
			<div className='flex-c-c w-[15%]'>
				<IconButton
					icon={PencilIcon}
					onClick={() => setEditForm({ id, username, name, active, role })}
				/>
				<IconButton
					icon={TrashIcon}
					kind='red'
					onClick={() => setDeleteForm({ id, name, username })}
				/>
			</div>
		</div>
	);
};

export default UserRow;
