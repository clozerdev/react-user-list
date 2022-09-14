import CheckCircleIcon from '../icons/check-circle-icon';
import CrossCircleIcon from '../icons/cross-circle-icon';
import UpdateIcon from '../icons/update-icon';

const InputTextAsync = ({ label, loading, success, error, className, ...props }) => {
	const inputClassname = `w-full h-10 px-4 py-2 rounded-sm shadow outline-none my-1 pr-12 ${
		error ? 'border-border border-red' : ''
	}`;

	const icon = getIcon(loading, success, error);

	return (
		<label className={`${className || ''} relative block`}>
			<span className='text-xs font-bold ml-2'>{label}</span>
			<input {...props} type='text' className={inputClassname} />
			{icon}
			{error && <span className='text-xs text-red ml-2'>{error}</span>}
		</label>
	);
};

const getIcon = (loading, success, error) => {
	if (loading) return <UpdateIcon className='icon-row text-gray animate-spin-slow' />;
	if (success) return <CheckCircleIcon className='icon-row text-green' />;
	if (error) return <CrossCircleIcon className='icon-row text-red' />;

	return null;
};

export default InputTextAsync;
