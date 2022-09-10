import { SORT_OPTIONS } from '../../constants/sort-options.constant';
import InputCheckbox from '../forms/input-checkbox';
import InputSearch from '../forms/input-search';
import Select from '../forms/select';

const UsersListFilter = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => (
	<div className='my-8'>
		<div className='form-row'>
			<InputSearch
				placeholder='Buscar...'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
				className='w-1/2'
			/>
			<Select
				value={sortBy}
				onChange={ev => setSortBy(Number(ev.target.value))}
			>
				<option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
				<option value={SORT_OPTIONS.NAME}>Por nombre</option>
				<option value={SORT_OPTIONS.ROLE}>Por rol</option>
				{!onlyActive && (
					<option value={SORT_OPTIONS.ACTIVE}>Por activos</option>
				)}
			</Select>
		</div>

		<div className='form-row'>
			<div className='flex items-center'>
				<InputCheckbox
					checked={onlyActive}
					onChange={ev => setOnlyActive(ev.target.checked)}
					className='mr-3'
				/>
				<p>Mostrar sólo activos</p>
			</div>
		</div>
	</div>
);

export default UsersListFilter;
