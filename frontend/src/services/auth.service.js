const server = "http://localhost:3001/auth";

const signup = (alias, gamertag, platform, password) => {
  fetch(`${server}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      alias: alias,
      gamertag: gamertag,
      platform: platform,
      password: password,
    }),
  })
    .then((response) => {
      console.log(response.json());
      return response.json();
    })
    .then((data) => {
      console.log("Signing up");
      console.log(data);
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      return data;
    })
    .catch((error) => console.log(error));
};

const login = (alias, gamertag, password) => {
  fetch(`${server}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: { gamertag, password },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      return data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const authService = { signup, login, logout, getCurrentUser };

export default authService;
