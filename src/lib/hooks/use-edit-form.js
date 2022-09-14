import { useEffect, useState } from 'react';
import { findUserByUsername } from '../api/user-api';
import { validateName, validateUsername } from '../users/user-validations';

export const useEditForm = user => {
	const [formValues, setFormValues] = useState(() => getInitialState(user));

	const setName = newName => {
		const error = validateName(newName);

		setFormValues({
			...formValues,
			name: { value: newName, error }
		});
	};

	const setUsername = newUsername => {
		const error = validateUsername(newUsername);
		const isInitial = newUsername === user.username;

		setFormValues({
			...formValues,
			username: {
				value: newUsername,
				loading: !error && !isInitial,
				error
			}
		});
	};

	const setRole = role => {
		setFormValues({
			...formValues,
			role
		});
	};

	const setActive = active => {
		setFormValues({
			...formValues,
			active
		});
	};

	const setUsernameError = error => {
		setFormValues(prevFormValues => ({
			...prevFormValues,
			username: {
				value: prevFormValues.username.value,
				error,
				loading: false
			}
		}));
	};

	useEffect(() => {
		setFormValues(getInitialState(user));
	}, [user]);

	useEffect(() => {
		if (!formValues.username.loading) return;

		const controller = new AbortController();
		const timeoutId = setTimeout(() => {
			validateUsernameIsAvailable(
				formValues.username.value,
				setUsernameError,
				controller.signal
			);
		}, 500);

		return () => {
			controller.abort();
			clearTimeout(timeoutId);
		};
	}, [formValues.username.loading, formValues.username.value]);

	const isFormInvalid =
		areInitialValues(formValues, user) ||
		formValues.name.error ||
		formValues.username.error ||
		formValues.username.loading;

	return {
		...formValues,
		isFormInvalid,
		setName,
		setUsername,
		setRole,
		setActive
	};
};

const getInitialState = user => ({
	name: {
		value: user.name,
		error: undefined
	},
	username: {
		value: user.username,
		loading: false,
		error: undefined
	},
	role: user.role,
	active: user.active
});

const areInitialValues = (formValues, user) =>
	formValues.name.value === user.name &&
	formValues.username.value === user.username &&
	formValues.role === user.role &&
	formValues.active === user.active;

const validateUsernameIsAvailable = async (username, setUsernameError, signal) => {
	const { user, error, aborted } = await findUserByUsername(username, signal);

	if (aborted) return;
	if (error) return setUsernameError('Error al validar');

	setUsernameError(user ? 'Ya está en uso' : undefined);
};
