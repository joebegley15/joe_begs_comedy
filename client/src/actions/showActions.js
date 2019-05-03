import axios from "axios";
import { GET_SHOWS, SHOWS_LOADING } from "./types";

export const getShows = () => dispatch => {
  dispatch(setShowsLoading());
  axios.get("/api/shows").then(res =>
    dispatch({
      type: GET_SHOWS,
      payload: res.data
    })
  );
};

export const setShowsLoading = () => {
  return { type: SHOWS_LOADING };
};
