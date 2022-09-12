import IconButton from '../buttons/icon-button';
import CrossIcon from '../icons/cross-icon';

const UserFormLayout = ({ onClose, children }) => {
	return (
		<div className='p-6 rounded-md shadow mb-8 relative'>
			<IconButton
				onClick={onClose}
				icon={CrossIcon}
				className='absolute -right-5 -top-5'
				filled
			/>
			{children}
		</div>
	);
};

export default UserFormLayout;
