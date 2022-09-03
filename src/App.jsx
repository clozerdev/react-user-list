import UsersList from './components/user/users-list';

const USERS = [
	{
		id: 1,
		name: 'Pablo Castellanos',
		active: true,
		role: 'teacher'
	},
	{
		id: 2,
		name: 'Jose Miguel Fernández',
		active: true,
		role: 'student'
	},
	{
		id: 3,
		name: 'Alberto Núñez',
		active: false,
		role: 'teacher'
	}
];

const App = () => {
	return (
		<UsersList users={USERS}>
			<h1 className='font-bold text-xl'>Listado de usuarios</h1>
		</UsersList>
	);
};

export default App;
