import {
  GET_ALL_USERS,
  GET_USER_ADDRESSES,
  GET_USER_INFO,
  CREATE_USER,
  EDIT_USER,
  CREATE_USER_ADDRESS,
  EDIT_ADDRESS,
  DELETE_USER_ADDRESS,
  GET_ALL_STATES,
  GET_ALL_CITIES,
  EDIT_USER_ADDRESS,
} from "../actions/allActions";

const initialState = {
  states: [],
  cities: [],
  users: [],
  allUsers: [],
  userInfo: {},
  userAddresses: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STATES:
      return {
        ...state,
        states: action.payload,
      };

    case GET_ALL_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        allUsers: action.payload,
      };

    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    case CREATE_USER:
      return {
        ...state,
      };

    case EDIT_USER:
      return {
        ...state,
      };

    case GET_USER_ADDRESSES:
      return {
        ...state,
        userAddresses: action.payload,
      };

    case CREATE_USER_ADDRESS:
      return {
        ...state,
      };

    case DELETE_USER_ADDRESS:
      return {
        ...state,
      };

    case EDIT_USER_ADDRESS:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
}
