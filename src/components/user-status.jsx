import CheckCircleIcon from './icons/check-circle-icon';
import CrossCircleIcon from './icons/cross-circle-icon';

const UserStatus = ({ active }) => {
	const activeClassname = active ? 'text-green' : 'text-red';
	const Icon = active ? CheckCircleIcon : CrossCircleIcon;

	return (
		<div className={`${activeClassname} flex items-center text-xs`}>
			<Icon className='h-6 w-6 mr-1' />
			<span>{active ? 'Activo' : 'Inactivo'}</span>
		</div>
	);
};

export default UserStatus;
