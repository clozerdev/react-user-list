const ROLE_CLASSNAMES = {
	teacher: 'bg-blue',
	student: 'bg-purple',
	other: 'bg-lightgray'
};

const ROLE_STYLES = {
	teacher: ['Profesor', ROLE_CLASSNAMES.teacher],
	student: ['Alumno', ROLE_CLASSNAMES.student],
	other: ['Otro', ROLE_CLASSNAMES.other]
};

const UserRole = ({ role }) => {
	const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.other;
	const className = `text-role uppercase py-1 px-2 rounded-sm ${roleClassName}`;

	return <span className={className}>{roleName}</span>;
};

export default UserRole;
