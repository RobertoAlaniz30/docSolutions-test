async function userLogin(url, data) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

async function getUsers(url, token, data) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

async function registerUser(url, token, data) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}
export { userLogin, getUsers, registerUser };
