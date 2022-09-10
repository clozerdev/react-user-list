const BUTTON_CLASSNAMES = {
	black: {
		normal: 'text-black disabled:text-lightgray',
		filled: 'bg-black'
	},
	red: {
		normal: 'text-red disabled:text-lightgray',
		filled: 'bg-red'
	}
};

const CLASSNAMES = {
	black: {
		normal: BUTTON_CLASSNAMES.black.normal,
		filled: BUTTON_CLASSNAMES.black.filled
	},
	red: {
		normal: BUTTON_CLASSNAMES.red.normal,
		filled: BUTTON_CLASSNAMES.red.filled
	}
};

const IconButton = ({
	kind = 'black',
	filled = true,
	icon: Icon,
	className,
	...props
}) => {
	const classNames = CLASSNAMES[kind];
	const classNameKey = filled ? 'filled' : 'normal';
	const kindClassname = classNames[classNameKey];

	const buttonClassname = `h-10 w-10 rounded-[50%] flex-c-c ${className} ${kindClassname} ${
		filled && 'text-white'
	} disabled:bg-lightgray`;

	return (
		<button {...props} className={buttonClassname}>
			<Icon className='h-5 w-5' />
		</button>
	);
};

export default IconButton;
