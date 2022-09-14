import { UserFormsContext } from '../../lib/contexts/user-forms-context';
import { useSelectedForm } from '../../lib/hooks/use-selected-form';

const UserFormsProvider = ({ reloadUsers, resetFilters, children }) => {
	const { setFiltersForm, ...restSelectedForm } = useSelectedForm();

	const onSuccess = () => {
		reloadUsers();
		resetFilters();
		setFiltersForm();
	};

	return (
		<UserFormsContext.Provider
			value={{
				setFiltersForm,
				onSuccess,
				...restSelectedForm
			}}
		>
			{children}
		</UserFormsContext.Provider>
	);
};

export default UserFormsProvider;
