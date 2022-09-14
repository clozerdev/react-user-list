import { useContext } from 'react';
import { UserFormsContext } from '../lib/contexts/user-forms-context';
import IconButton from './buttons/icon-button';
import PencilIcon from './icons/pencil-icon';
import TrashIcon from './icons/trash-icon';
import UserDisplay from './user-display';
import UserRole from './user-role';
import UserStatus from './user-status';

const UserCard = ({ id, username, name, active, role }) => {
	const { setEditForm, setDeleteForm } = useContext(UserFormsContext);

	return (
		<div className='w-1/2 p-2'>
			<div className='shadow rounded-md py-3 px-6'>
				<div className='mt-2 mb-4'>
					<UserDisplay name={name} username={username} />
				</div>
				<div className='flex-c-b'>
					<div className='w-[30%]'>
						<UserRole role={role} />
					</div>
					<div className='w-[50%] flex-c-c'>
						<UserStatus active={active} />
					</div>
					<div className='flex items-center w-[20%]'>
						<IconButton
							icon={PencilIcon}
							onClick={() =>
								setEditForm({
									id,
									username,
									name,
									active,
									role
								})
							}
						/>
						<IconButton
							icon={TrashIcon}
							kind='red'
							onClick={() =>
								setDeleteForm({ id, name, username })
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
