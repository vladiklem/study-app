export const FETCH_METHODS = {
  GET: "GET",
  POST: "POST",
};

export const createResponse = (err, data = null, ok = false) => ({
  error: err,
  data,
  ok: ok || !err,
});

export const post$ = (url = "", body = {}, headers = {}, options = {}) => {
  return fetch(url, {
    method: FETCH_METHODS.POST,
    headers: {
      ...{
        "Content-Type": "application/json; charset=UTF-8",
      },
      ...headers,
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((response) => {
      const parsedData = response.json();

      return parsedData;
    })
    .then((data) => {
      return createResponse(null, data, true);
    })
    .catch((err) => createResponse(err.message));
};

export const get$ = (url = "", headers = {}, options = {}) =>
  fetch(url, {
    method: FETCH_METHODS.GET,
    headers: {
      ...{
        "Content-Type": "application/json; charset=UTF-8",
      },
      ...headers,
    },
    ...options,
  })
    .then((response) => {
      const parsedData = response.json();

      return parsedData;
    })
    .then((data) => createResponse(null, data, true))
    .catch((err) => createResponse(err.message));
