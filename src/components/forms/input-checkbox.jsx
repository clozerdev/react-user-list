import CheckIcon from '../icons/check-icon';

const InputCheckbox = ({ className, ...props }) => {
	const labelClassname = `flex-c-c cursor-pointer h-8 w-8 rounded-sm shadow relative focus-within:shadow-md ${
		className || ''
	}`;

	return (
		<label className={labelClassname}>
			<input
				{...props}
				type='checkbox'
				className='opacity-0 peer absolute -top-[999vh]'
			/>
			<CheckIcon className='hidden peer-checked:block select-none h-6 w-6' />
		</label>
	);
};
export default InputCheckbox;

//
