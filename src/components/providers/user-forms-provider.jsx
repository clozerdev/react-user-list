import { UserFormsContext } from '../../lib/contexts/user-forms-context';
import { useSelectedForm } from '../../lib/hooks/use-selected-form';

const UserFormsProvider = ({ resetFilters, children }) => {
	const { setFiltersForm, ...restSelectedForm } = useSelectedForm();

	const onSuccess = () => {
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
