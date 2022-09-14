import { useContext } from 'react';
import { SORT_OPTIONS } from '../../constants/sort-options.constant';
import { USER_FORMS } from '../../constants/user-forms';
import { UserFormsContext } from '../../lib/contexts/user-forms-context';
import Button from '../buttons/button';
import InputCheckbox from '../forms/input-checkbox';
import InputSearch from '../forms/input-search';
import Select from '../forms/select';

const UsersListFilter = ({ search, setSearch, onlyActive, setOnlyActive, sortBy, setSortBy }) => {
	const { currentForm, setCreateForm } = useContext(UserFormsContext);
	if (currentForm !== USER_FORMS.FILTERS) return null;

	return (
		<div className='my-8'>
			<div className='form-row'>
				<InputSearch
					placeholder='Buscar...'
					value={search}
					onChange={ev => setSearch(ev.target.value)}
					className='w-1/2'
				/>
				<Select value={sortBy} onChange={ev => setSortBy(Number(ev.target.value))}>
					<option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
					<option value={SORT_OPTIONS.NAME}>Por nombre</option>
					<option value={SORT_OPTIONS.ROLE}>Por rol</option>
					{!onlyActive && <option value={SORT_OPTIONS.ACTIVE}>Por activos</option>}
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
				<Button onClick={setCreateForm}>Añadir usuario</Button>
			</div>
		</div>
	);
};

export default UsersListFilter;
