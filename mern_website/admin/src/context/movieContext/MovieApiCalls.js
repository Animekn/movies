
import { getMoviesFailure, getMoviesStart, getMoviesSuccess } from './MovieAction'
import axios from 'axios'

 export const getMovies = async () => {
  // export const getMovies = async (dispatch) => {
    // dispatch(getMoviesStart());
    try {
      const res = await axios.get("/movies", {
        headers: {
          token: "Bear"+ JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      console.log(res.data)
      // dispatch(getMoviesSuccess(res.data));
    } catch (err) {
      console.log(err)
      // dispatch(getMoviesFailure());
    }
  };
