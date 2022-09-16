import { useEffect, useReducer } from 'react';
import { EDIT_FORM_ACTIONS } from '../../constants/edit-form-actions';
import { findUserByUsername } from '../api/user-api';
import { validateName, validateUsername } from '../users/user-validations';

const formValuesReducer = (state, action) => {
	switch (action.type) {
		case EDIT_FORM_ACTIONS.NAME: {
			const error = validateName(action.value);

			return {
				...state,
				name: { value: action.value, error }
			};
		}
		case EDIT_FORM_ACTIONS.USERNAME: {
			const error = validateUsername(action.value);
			const isInitial = action.value === action.currentUsername;

			return {
				...state,
				username: {
					value: action.value,
					loading: !error && !isInitial,
					error
				}
			};
		}
		case EDIT_FORM_ACTIONS.ROLE:
			return {
				...state,
				role: action.value
			};
		case EDIT_FORM_ACTIONS.ACTIVE:
			return {
				...state,
				active: action.value
			};
		case EDIT_FORM_ACTIONS.USERNAME_ERROR:
			return {
				...state,
				username: {
					value: state.username.value,
					error: action.value,
					loading: false
				}
			};
		case EDIT_FORM_ACTIONS.REPLACE:
			return action.value;
		default:
			throw new Error('Invalid action type');
	}
};

export const useEditForm = user => {
	const [formValues, dispatchFormValues] = useReducer(
		formValuesReducer,
		user,
		getInitialState
	);

	useEffect(() => {
		dispatchFormValues({
			type: EDIT_FORM_ACTIONS.REPLACE,
			value: getInitialState(user)
		});
	}, [user]);

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
		areInitialValues(formValues, user) ||
		formValues.name.error ||
		formValues.username.error ||
		formValues.username.loading;

	return {
		...formValues,
		dispatchFormValues,
		isFormInvalid
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

const validateUsernameIsAvailable = async (
	username,
	dispatchFormValues,
	signal
) => {
	const { user, error, aborted } = await findUserByUsername(username, signal);

	if (aborted) return;
	if (error)
		return dispatchFormValues({
			type: EDIT_FORM_ACTIONS.USERNAME_ERROR,
			value: 'Error al validar'
		});

	dispatchFormValues({
		type: EDIT_FORM_ACTIONS.USERNAME_ERROR,
		value: user ? 'Ya está en uso' : undefined
	});
};
