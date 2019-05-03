import { GET_SHOWS, SHOWS_LOADING } from "../actions/types";

const initialState = {
  shows: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHOWS:
      console.log(action.payload);
      return {
        ...state,
        shows: action.payload,
        loading: false
      };
    case SHOWS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
