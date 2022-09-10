const BUTTON_CLASSNAMES = {
	primary: 'text-white bg-black border-border border-black',
	secondary: 'text-black bg-white border-border border-black'
};

const KIND_CLASSNAME = {
	primary: BUTTON_CLASSNAMES.primary,
	secondary: BUTTON_CLASSNAMES.secondary
};

const Button = ({ kind = 'primary', className, ...props }) => {
	const kindClassname = KIND_CLASSNAME[kind];
	const buttonClassname = `${kindClassname} ${
		className || ''
	} h-10 rounded-sm shadow px-4 disabled:text-lightgray disabled:bg-white disabled:border-white focus:shadow-md`;

	return <button {...props} className={buttonClassname}></button>;
};

export default Button;
