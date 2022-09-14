import GridIcon from './icons/grid-icon';
import ListIcon from './icons/list-icon';

const UsersListViewSelector = ({ view, setView }) => (
	<div className='flex items-center justify-end gap-2'>
		<button
			onClick={() => setView(false)}
			disabled={!view}
			className='text-lightgray disabled:text-black'
		>
			<GridIcon className='h-8 w-8' />
		</button>
		<div className='h-7 w-[2px] bg-black' />
		<button
			onClick={() => setView(true)}
			disabled={view}
			className='text-lightgray disabled:text-black'
		>
			<ListIcon className='h-8 w-8' />
		</button>
	</div>
);

export default UsersListViewSelector;
