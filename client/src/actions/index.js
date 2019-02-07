/**
 * Turns a route and a request body into a URL for HTTP requests.
 * @param {string} route The HTTP route to be accessed in the route
 * @param {Object} body JS object to be sent to the backend server
 */
export const getQueryString = (route, body) => {
  const queries = Object.keys(body).map(key => `${key}=${body[key]}`);

  return `/api/${route}?${queries.join("&")}`;
};
