import { useContext } from 'react';
import { SORT_OPTIONS } from '../constants/sort-options.constant';
import { USER_FORMS } from '../constants/user-forms';
import {
	onlyActiveChanged,
	searchChanged,
	sortByChanged
} from '../lib/actions/filters-actions';
import { UserFormsContext } from '../lib/contexts/user-forms-context';
import Button from './buttons/button';
import InputCheckbox from './forms/input-checkbox';
import InputSearch from './forms/input-search';
import Select from './forms/select';

const UsersListFilter = ({ search, onlyActive, sortBy, dispatchFilters }) => {
	const { currentForm, setCreateForm } = useContext(UserFormsContext);
	if (currentForm !== USER_FORMS.FILTERS) return null;

	return (
		<div>
			<div className='form-row'>
				<InputSearch
					placeholder='Buscar...'
					value={search}
					onChange={ev =>
						dispatchFilters(searchChanged(ev.target.value))
					}
					className='w-1/2'
				/>
				<Select
					value={sortBy}
					onChange={ev =>
						dispatchFilters(sortByChanged(Number(ev.target.value)))
					}
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
						className='mr-3'
						checked={onlyActive}
						onChange={ev =>
							dispatchFilters(
								onlyActiveChanged(ev.target.checked)
							)
						}
					/>
					<p>Mostrar sólo activos</p>
				</div>
				<Button onClick={setCreateForm}>Añadir usuario</Button>
			</div>
		</div>
	);
};

export default UsersListFilter;
