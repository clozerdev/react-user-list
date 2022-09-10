const InputText = ({ label, error, className, ...props }) => {
	const inputClassname = `w-full h-10 px-4 py-2 rounded-sm shadow outline-none my-1 ${
		error ? 'border-border border-red' : ''
	}`;

	return (
		<label className={className}>
			<span className='text-xs font-bold ml-2'>{label}</span>
			<input {...props} type='text' className={inputClassname} />
			{error && <span className='text-xs text-red ml-2'>{error}</span>}
		</label>
	);
};

export default InputText;
