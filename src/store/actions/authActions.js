import {
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_SUCCESS,
  SIGNUP_REQUEST_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_REQUEST_SUCCESS,
  SIGNIN_REQUEST_FAILURE,
  SIGNOUT
} from "Store/constants";
import axios from 'Helpers/axios';

export function signUp(body) {
  return (dispatch) => {
    dispatch(request());
    return axios
      .post(`/api/register`, body)
      .then((response) => {
        dispatch(success(response.data));
      })
      .catch((error) => {
        dispatch(failure(error.response.data.error));
      });
  };

  function request() {
    return { type: SIGNUP_REQUEST };
  }
  function success(payload) {
    return { type: SIGNUP_REQUEST_SUCCESS, payload };
  }
  function failure(error) {
    return { type: SIGNUP_REQUEST_FAILURE, error };
  }
}
export function signIn(body) {
  return (dispatch) => {
    dispatch(request());
    return axios
      .post(`/api/login`, body)
      .then((response) => {
        dispatch(success(response.data));
      })
      .catch((error) => {
        dispatch(failure(error.response.data.error));
      });
  };

  function request() {
    return { type: SIGNIN_REQUEST };
  }
  function success(payload) {
    localStorage.setItem("access-token", payload.token);
    return { type: SIGNIN_REQUEST_SUCCESS, payload };
  }
  function failure(error) {
    return { type: SIGNIN_REQUEST_FAILURE, error };
  }
}
export function signOut() {
  localStorage.removeItem('access-token');
  return (dispatch) => {
    dispatch({type: SIGNOUT});
  }
}

