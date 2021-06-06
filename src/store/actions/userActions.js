import {
    FETCH_USER_REQUEST,
    FETCH_USER_REQUEST_SUCCESS,
    FETCH_USER_REQUEST_FAILURE,
  } from "Store/constants";
import axios from 'Helpers/axios';
  
export function fetchUsers(body) {
  return (dispatch) => {
    dispatch(request());
    return axios
      .get(`/api/users?page=1&per_page=8`, body)
      .then((response) => {
        dispatch(success(response.data));
      })
      .catch((error) => {
        dispatch(failure('Error Occurs'));
      });
  };

  function request() {
    return { type: FETCH_USER_REQUEST };
  }
  function success(payload) {
    return { type: FETCH_USER_REQUEST_SUCCESS, payload };
  }
  function failure(error) {
    return { type: FETCH_USER_REQUEST_FAILURE, error };
  }
}

  
  
  