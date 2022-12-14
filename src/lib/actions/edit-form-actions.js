import { EDIT_FORM_ACTIONS } from '../../constants/edit-form-actions';

export const nameChanged = name => ({
	type: EDIT_FORM_ACTIONS.NAME,
	payload: name
});

export const usernameChanged = (username, currentUsername) => ({
	type: EDIT_FORM_ACTIONS.USERNAME,
	payload: {
		username,
		isInitial: username === currentUsername
	}
});

export const roleChanged = role => ({
	type: EDIT_FORM_ACTIONS.ROLE,
	payload: role
});

export const activeChanged = active => ({
	type: EDIT_FORM_ACTIONS.ACTIVE,
	payload: active
});

export const usernameErrorChanged = error => ({
	type: EDIT_FORM_ACTIONS.USERNAME_ERROR,
	payload: error
});

export const replace = newState => ({
	type: EDIT_FORM_ACTIONS.REPLACE,
	payload: newState
});
