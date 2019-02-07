import axios from "axios";
import { CHECK_SERVER } from "../../actions/types";
import { getQueryString } from "../../actions/index";

/**
 *
 * @param {string} route the route that should be called
 * @param {Object} body The JSON object sent as the request.
 */
export const testRoute = (route, body) => async dispatch => {
  // turns JSON into query, i.e., {key: value} => key=value
  // generates valid query string, e.g., ?key=value&key2=value2
  try {
    const res = await axios.post(route, body);
    console.log(res.data);
  } catch (err) {
    console.log(
      `Your route /${route} is missing! Check for typos or check the backend code.`
    );
  }
};

/**
 * Check if server is running at beginning of code.
 * This should be called in the componentDidMount() of App, i.e., as soon as the app
 * launches.
 */
export const checkServer = () => async dispatch => {
  try {
    await axios.get(`/api/server`);
  } catch (err) {
    console.log(err);
    dispatch({ type: CHECK_SERVER, payload: false });
  }
};
