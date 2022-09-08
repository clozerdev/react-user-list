import UsersList from './components/user/user-list';

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

const App = () => <UsersList initialUsers={USERS} />;

export default App;
