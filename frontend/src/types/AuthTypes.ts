
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const FAIL_REQUEST = 'FAIL_REQUEST'; 

export type AuthState = {
  token: string | null;
  loading: boolean;
  error: string | null;
};


interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: { token: string };
}

interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: { token: string };
}



interface FailRequest {
  type: typeof FAIL_REQUEST;
  payload: { error: string };
}

export type AuthActionTypes =
  | LoginSuccess
  | RegisterSuccess
  | FailRequest;
