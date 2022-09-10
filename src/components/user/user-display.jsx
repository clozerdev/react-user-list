const UserDisplay = ({ name, username }) => (
	<div className='flex flex-col'>
		<span>{name}</span>
		<span className='text-xs text-gray mt-1'>@{username}</span>
	</div>
);

export default UserDisplay;
