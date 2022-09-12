import { useState } from 'react';
import { USER_ROLES } from '../../constants/user-roles.constant';
import { createUserApi } from '../../lib/api/user-api';
import { useCreateForm } from '../../lib/hooks/use-create-form';
import Button from '../buttons/button';
import InputCheckbox from '../forms/input-checkbox';
import InputText from '../forms/input-text';
import InputTextAsync from '../forms/input-text-async';
import Select from '../forms/select';

const UserCreateForm = ({ onSuccess }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { username, name, isFormValid, setName, setUsername } =
		useCreateForm();

	return (
		<form
			onSubmit={ev =>
				handleSubmit(ev, name, username, setIsSubmitting, onSuccess)
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
					onChange={ev => setName(ev.target.value)}
				/>
				<InputTextAsync
					className='w-[45%]'
					label='Username'
					placeholder='johndoe'
					loading={username.loading}
					error={username.error}
					success={
						username.value && !username.loading && !username.error
					}
					value={username.value}
					onChange={ev => setUsername(ev.target.value)}
				/>
			</div>
			<div className='flex justify-between'>
				<Select name='role'>
					<option value={USER_ROLES.TEACHER}>Profesor</option>
					<option value={USER_ROLES.STUDENT}>Alumno</option>
					<option value={USER_ROLES.OTHER}>Otro</option>
				</Select>
				<div className='flex items-center gap-2'>
					<InputCheckbox name='active' />
					<span>Activo</span>
				</div>
				<Button type='submit' disabled={isFormValid || isSubmitting}>
					{isSubmitting ? 'Cargando...' : 'Crear usuario'}
				</Button>
			</div>
		</form>
	);
};

const handleSubmit = async (ev, name, username, setIsSubmitting, onSuccess) => {
	ev.preventDefault();
	setIsSubmitting(true);

	const user = {
		id: crypto.randomUUID(),
		name: name.value,
		username: username.value,
		role: ev.target.role.value,
		active: ev.target.active.checked
	};

	const success = await createUserApi(user);

	if (success) {
		onSuccess();
	} else {
		setIsSubmitting(false);
	}
};

export default UserCreateForm;
