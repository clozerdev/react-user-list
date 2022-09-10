import UsersList from './components/user/user-list';
import { USER_ROLES } from './constants/user-roles.constant';

const USERS = [
	{
		username: 'pablo',
		name: 'Pablo Castellanos García',
		active: true,
		role: USER_ROLES.TEACHER
	},
	{
		username: 'jose',
		name: 'Jose Miguel Fernández',
		active: true,
		role: USER_ROLES.STUDENT
	},
	{
		username: 'alberto',
		name: 'Alberto Núñez Prieto',
		active: false,
		role: USER_ROLES.OTHER
	}
];

const App = () => <UsersList initialUsers={USERS} />;

export default App;
