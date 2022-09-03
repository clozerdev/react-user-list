import UserRow from './user-row';

const UsersList = ({ children, users }) => {
	const usersRendered =
		users.length > 0 ? (
			users.map(user => <UserRow {...user} key={user.id} />)
		) : (
			<p>No existen usuarios...</p>
		);

	return (
		<div className='max-w-[500px] m-auto p-4 space-y-4'>
			{children}
			{usersRendered}
		</div>
	);
};

export default UsersList;
