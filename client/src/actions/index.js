import axios from "axios";
import { FETCH_EXAMPLE } from "./types";

export const fetchExample = () => async dispatch => {
  const res = await axios.get("/example");
  dispatch({ type: FETCH_EXAMPLE, payload: res.data });
};
