export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const FAIL_REQUEST = 'FAIL_REQUEST';

export type AuthState = {
  token: string | null;
  loading: boolean;
  error: string | null;
};
export type RegisterT={
  email :string ,
  name :string ,
  password :string ,
}


interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: { token: string };
  
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: { token: string };
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface FailRequestAction {
  type: typeof FAIL_REQUEST;
  payload: { error: string };
}

export type AuthActionTypes =
  | LoginSuccessAction
  | RegisterSuccessAction
  | LogoutAction
  | FailRequestAction;

export type AuthActionType<P> = {
  type: typeof LOGIN_SUCCESS | typeof REGISTER_SUCCESS | typeof LOGOUT | typeof FAIL_REQUEST;
  payload: P;
};
