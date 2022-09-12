import ArrowDownIcon from '../icons/arrow-down-icon';

const Select = ({ className, ...props }) => {
	const selectClassname = `h-10 py-2 px-4 w-full outline-none shadow rounded-sm focus:shadow-md appearance-none pr-12 cursor-pointer ${
		className || ''
	}`;

	return (
		<div className='relative'>
			<select {...props} className={selectClassname} />
			<ArrowDownIcon className='h-6 w-6 absolute text-gray top-2 right-4 pointer-events-none' />
		</div>
	);
};

export default Select;
