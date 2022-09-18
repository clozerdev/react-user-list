import { useEffect, useReducer } from 'react';
import { usernameErrorChanged } from '../actions/create-form-actions';
import { findUserByUsername } from '../api/user-api';
import {
	createFormReducer,
	CREATE_FORM_INITIAL_STATE
} from '../reducers/create-form-reducer';

export const useCreateForm = () => {
	const [formValues, dispatchFormValues] = useReducer(
		createFormReducer,
		CREATE_FORM_INITIAL_STATE
	);

	useEffect(() => {
		if (!formValues.username.loading) return;

		const controller = new AbortController();
		const timeoutId = setTimeout(() => {
			validateUsernameIsAvailable(
				formValues.username.value,
				dispatchFormValues,
				controller.signal
			);
		}, 500);

		return () => {
			controller.abort();
			clearTimeout(timeoutId);
		};
	}, [formValues.username.loading, formValues.username.value]);

	const isFormInvalid =
		!formValues.name.value ||
		!formValues.username.value ||
		formValues.name.error ||
		formValues.username.error ||
		formValues.username.loading;

	return { ...formValues, isFormInvalid, dispatchFormValues };
};

const validateUsernameIsAvailable = async (
	username,
	dispatchFormValues,
	signal
) => {
	const { user, error, aborted } = await findUserByUsername(username, signal);

	if (aborted) return;

	let errorMessage;

	if (error) errorMessage = 'Error al validar';
	else if (user) errorMessage = 'Ya está en uso';

	dispatchFormValues(usernameErrorChanged(errorMessage));
};
