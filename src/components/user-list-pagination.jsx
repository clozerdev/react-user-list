import { PAGINATION } from '../constants/pagination';
import PageSelector from './forms/page-selector';
import Select from './forms/select';

const UserListPagination = ({
	page,
	itemsPerPage,
	dispatchFilters,
	totalUsers
}) => (
	<div className='flex-c-b mt-8'>
		<div className='flex items-center gap-4'>
			<Select
				value={itemsPerPage}
				onChange={ev =>
					dispatchFilters({
						value: Number(ev.target.value),
						type: 'items_per_page_changed'
					})
				}
			>
				{PAGINATION.ITEMS_PER_PAGE_VALUES.map(value => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</Select>
			<p>Elementos por página</p>
		</div>
		<PageSelector
			page={page}
			dispatchFilters={dispatchFilters}
			totalPages={Math.ceil(totalUsers / itemsPerPage)}
		/>
	</div>
);

export default UserListPagination;
