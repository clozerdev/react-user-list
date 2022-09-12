import { useState } from 'react';
import { USER_ROLES } from '../../constants/user-roles.constant';
import { useCreateForm } from '../../lib/hooks/use-create-form';
import Button from '../buttons/button';
import IconButton from '../buttons/icon-button';
import InputCheckbox from '../forms/input-checkbox';
import InputText from '../forms/input-text';
import InputTextAsync from '../forms/input-text-async';
import Select from '../forms/select';
import CrossIcon from '../icons/cross-icon';

const UserCreateForm = ({ onClose }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { username, name, setName, setUsername } = useCreateForm();

	const isDisabled =
		!name.value ||
		!username.value ||
		name.error ||
		username.error ||
		username.loading ||
		isSubmitting;

	return (
		<div className='p-6 rounded-md shadow mb-8 relative'>
			<IconButton
				onClick={onClose}
				icon={CrossIcon}
				className='absolute -right-5 -top-5'
				filled
			/>
			<form
				onSubmit={ev =>
					handleSubmit(ev, name, username, setIsSubmitting, onClose)
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
							username.value &&
							!username.loading &&
							!username.error
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
					<Button type='submit' disabled={isDisabled}>
						{isSubmitting ? 'Cargando...' : 'Crear usuario'}
					</Button>
				</div>
			</form>
		</div>
	);
};

const handleSubmit = async (ev, name, username, setIsSubmitting, onClose) => {
	ev.preventDefault();
	setIsSubmitting(true);

	const user = {
		id: crypto.randomUUID(),
		name: name.value,
		username: username.value,
		role: ev.target.role.value,
		active: ev.target.active.checked
	};

	const res = await fetch('http://localhost:4000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	});

	if (res.ok) {
		// TODO: Actualizar los usuarios
		onClose();
	} else {
		setIsSubmitting(false);
	}
};

export default UserCreateForm;
