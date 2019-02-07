import { CHECK_SERVER } from "../../actions/types";

export default (state = true, action) => {
  switch (action.type) {
    case CHECK_SERVER:
      return action.payload;
    default:
      return state;
  }
};
