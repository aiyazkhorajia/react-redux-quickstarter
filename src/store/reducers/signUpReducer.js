import {
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAILURE
  } from "Store/constants";
  
  const initialState = {
    loading: false,
    error: null,
    data: null,
    isSubmitted: false
  };
  
  const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return {
          ...state,
          loading: true
        };
      case SIGNUP_REQUEST_SUCCESS:
        return {
          ...state,
          data: action.payload,
          isSubmitted: true,
          loading: false,
          error: ""
        };
      case SIGNUP_REQUEST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default signUpReducer;
  