import {
  FETCH_USER_REQUEST,
  FETCH_USER_REQUEST_SUCCESS,
  FETCH_USER_REQUEST_FAILURE
} from "Store/constants";

const initialState = {
  loading: false,
  error: null,
  data: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };
    case FETCH_USER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default userReducer;
