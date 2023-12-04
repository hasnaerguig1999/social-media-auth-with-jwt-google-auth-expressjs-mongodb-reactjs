import { AuthActionTypes, AuthState } from '../../../types/AuthTypes';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, FAIL_REQUEST } from '../type/AuthType';

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: (action.payload as { token: string }).token,
        loading: false,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: (action.payload as { token: string }).token,
        loading: false,
        error: null,
      };
   case FAIL_REQUEST:
  return {
    ...state,
    loading: false,
    error: action.payload.error,
  };

    default:
      return state;
  }
};

export default authReducer;