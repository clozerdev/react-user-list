import { ITEMS_PER_PAGE } from '../../constants/items-per-page';
import PageSelector from '../forms/page-selector';
import Select from '../forms/select';

const UserListPagination = ({
	page,
	itemsPerPage,
	setPage,
	setItemsPerPage,
	totalPages
}) => (
	<div className='flex-c-b mt-8'>
		<div className='flex items-center gap-4'>
			<Select
				value={itemsPerPage}
				onChange={ev => setItemsPerPage(Number(ev.target.value))}
			>
				<option value={ITEMS_PER_PAGE.FOUR}>4</option>
				<option value={ITEMS_PER_PAGE.SIX}>6</option>
				<option value={ITEMS_PER_PAGE.EIGHT}>8</option>
			</Select>
			<p>Elementos por página</p>
		</div>
		<PageSelector page={page} setPage={setPage} totalPages={totalPages} />
	</div>
);

export default UserListPagination;
