import { useContext, useState } from 'react';
import { deleteUserApi } from '../../lib/api/user-api';
import { UserFormsContext } from '../../lib/contexts/user-forms-context';
import Button from '../buttons/button';

const UserDeleteForm = () => {
	const { setFiltersForm, currentUser, onSuccess } = useContext(UserFormsContext);
	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<form
			onSubmit={ev => handleSubmit(ev, currentUser.id, setIsSubmitting, onSuccess)}
			className='space-y-6'
		>
			<p>{`¿Estás seguro de que quieres eliminar a @${currentUser.username}?`}</p>
			<div className='flex justify-between'>
				<Button
					type='button'
					kind='secondary'
					disabled={isSubmitting}
					onClick={setFiltersForm}
				>
					{isSubmitting ? 'Cargando...' : 'Cancelar'}
				</Button>
				<Button type='submit' disabled={isSubmitting}>
					{isSubmitting ? 'Cargando...' : 'Eliminar usuario'}
				</Button>
			</div>
		</form>
	);
};

const handleSubmit = async (ev, userId, setIsSubmitting, onSuccess) => {
	ev.preventDefault();
	setIsSubmitting(true);

	const success = await deleteUserApi(userId);

	if (success) onSuccess();
	else setIsSubmitting(false);
};

export default UserDeleteForm;
