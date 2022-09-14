import { useContext } from 'react';
import { USER_FORMS } from '../../constants/user-forms';
import { UserFormsContext } from '../../lib/contexts/user-forms-context';
import IconButton from '../buttons/icon-button';
import CrossIcon from '../icons/cross-icon';
import UserCreateForm from './user-create.form';
import UserDeleteForm from './user-delete-form';
import UserEditForm from './user-edit-form';

const FORMS = {
	[USER_FORMS.CREATE]: <UserCreateForm />,
	[USER_FORMS.EDIT]: <UserEditForm />,
	[USER_FORMS.DELETE]: <UserDeleteForm />
};

const UserFormContainer = () => {
	const { currentForm, setFiltersForm } = useContext(UserFormsContext);

	const form = FORMS[currentForm];
	if (!form) return null;

	if (currentForm === USER_FORMS.FILTERS) return null;

	return (
		<div className='p-6 rounded-md shadow mb-8 relative'>
			<IconButton
				onClick={setFiltersForm}
				icon={CrossIcon}
				className='absolute -right-5 -top-5'
				filled
			/>
			{form}
		</div>
	);
};

export default UserFormContainer;
