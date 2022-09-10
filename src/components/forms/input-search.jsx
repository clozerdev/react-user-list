import SearchIcon from '../icons/search-icon';

const InputSearch = ({ className, ...props }) => {
	const divClassname = `flex items-center rounded-sm pl-4 shadow h-10 overflow-hidden focus-within:shadow-md ${
		className || ''
	}`;

	return (
		<div className={divClassname}>
			<SearchIcon className='h-4 w-4 text-lightgray' />
			<input
				{...props}
				type='text'
				className='p-4 outline-none w-full h-full placeholder:text-lightgray'
			/>
		</div>
	);
};

export default InputSearch;
