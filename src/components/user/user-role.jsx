import { USER_ROLES } from '../../constants/user-roles.constant';

const ROLE_CLASSNAMES = {
	[USER_ROLES.TEACHER]: 'bg-blue',
	[USER_ROLES.STUDENT]: 'bg-purple',
	[USER_ROLES.OTHER]: 'bg-lightgray'
};

const ROLE_STYLES = {
	[USER_ROLES.TEACHER]: ['Profesor', ROLE_CLASSNAMES.teacher],
	[USER_ROLES.STUDENT]: ['Alumno', ROLE_CLASSNAMES.student],
	[USER_ROLES.OTHER]: ['Otro', ROLE_CLASSNAMES.other]
};

const UserRole = ({ role }) => {
	const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.other;
	const className = `text-xs uppercase py-1 px-2 rounded-sm ${roleClassName}`;

	return <span className={className}>{roleName}</span>;
};

export default UserRole;
