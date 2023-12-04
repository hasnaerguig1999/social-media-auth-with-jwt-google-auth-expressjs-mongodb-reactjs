import { AuthActionTypes, LOGIN_SUCCESS, REGISTER_SUCCESS, FAIL_REQUEST } from '../../../types/AuthTypes';
import { Dispatch } from 'redux';
import { login, register } from '../../../api/AuthAPI';
import { RegisterT } from '../type/AuthType';


export const loginSuccess = (token: string): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginAsync = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      const response = await login(email, password);
      console.log(response);

      if (response) {
        dispatch(loginSuccess(response.data.token));
        
      } else {
        dispatch(failRequest("Token not found in the response"));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(failRequest(error.message));
      }
    }
  };
};


export const registerSuccess = (token: string): AuthActionTypes => ({
  type: REGISTER_SUCCESS,
  payload: { token },
});

export const registerAsync = (user : RegisterT) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await register(user);
      console.log(response)
      // dispatch(registerSuccess(response.data.token));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(failRequest(error.message));
      }
    }
  };
};

export const failRequest = (error: string): AuthActionTypes => ({
  type: FAIL_REQUEST,
  payload: { error },
});