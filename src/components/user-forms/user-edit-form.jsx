import { useContext, useState } from 'react';
import { USER_ROLES } from '../../constants/user-roles.constant';
import { updateUserApi } from '../../lib/api/user-api';
import { UserFormsContext } from '../../lib/contexts/user-forms-context';
import { useEditForm } from '../../lib/hooks/use-edit-form';
import Button from '../buttons/button';
import InputCheckbox from '../forms/input-checkbox';
import InputText from '../forms/input-text';
import InputTextAsync from '../forms/input-text-async';
import Select from '../forms/select';

const UserEditForm = () => {
	const { currentUser, onSuccess } = useContext(UserFormsContext);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { username, name, role, active, isFormInvalid, dispatchFormValues } =
		useEditForm(currentUser);

	return (
		<form
			onSubmit={ev =>
				handleSubmit(
					ev,
					{
						id: currentUser.id,
						name: name.value,
						username: username.value,
						role,
						active
					},
					setIsSubmitting,
					onSuccess
				)
			}
			className='space-y-6'
		>
			<div className='flex justify-between'>
				<InputText
					className='w-[45%]'
					label='Nombre'
					placeholder='John Doe'
					error={name.error}
					value={name.value}
					onChange={ev =>
						dispatchFormValues({
							type: 'name_changed',
							value: ev.target.value
						})
					}
				/>
				<InputTextAsync
					className='w-[45%]'
					label='Username'
					placeholder='johndoe'
					loading={username.loading}
					error={username.error}
					success={
						username.value !== currentUser.username &&
						!username.loading &&
						!username.error
					}
					value={username.value}
					onChange={ev =>
						dispatchFormValues({
							type: 'username_changed',
							value: ev.target.value,
							currentUsername: currentUser.username
						})
					}
				/>
			</div>
			<div className='flex justify-between'>
				<Select
					value={role}
					onChange={ev =>
						dispatchFormValues({
							type: 'role_changed',
							value: ev.target.value
						})
					}
				>
					<option value={USER_ROLES.TEACHER}>Profesor</option>
					<option value={USER_ROLES.STUDENT}>Alumno</option>
					<option value={USER_ROLES.OTHER}>Otro</option>
				</Select>
				<div className='flex items-center gap-2'>
					<InputCheckbox
						checked={active}
						onChange={ev =>
							dispatchFormValues({
								type: 'active_changed',
								value: ev.target.checked
							})
						}
					/>
					<span>Activo</span>
				</div>
				<Button type='submit' disabled={isFormInvalid || isSubmitting}>
					{isSubmitting ? 'Cargando...' : 'Editar usuario'}
				</Button>
			</div>
		</form>
	);
};

const handleSubmit = async (ev, user, setIsSubmitting, onSuccess) => {
	ev.preventDefault();
	setIsSubmitting(true);

	const success = await updateUserApi(user);

	if (success) onSuccess();
	else setIsSubmitting(false);
};

export default UserEditForm;
