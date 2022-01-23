export const fetchSinToken = (endpoint: any, data?: any, method = "GET") => {
  const url = `http://localhost:4000/api/${endpoint}`;
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchConToken = (endpoint: any, data?: any, method = "GET") => {
  const url = `http://localhost:4000/api/${endpoint}`;
  const token = localStorage.getItem("token") || "";
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "x-token": token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }
};
