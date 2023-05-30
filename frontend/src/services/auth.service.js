const server = "http://localhost:3001/auth";

const signup = async (alias, gamertag, platform, password) => {
  await fetch(`${server}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      alias: alias,
      gamertag: gamertag,
      platform: platform,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      return data;
    })
    .catch((error) => error);
};

const login = async (gamertag, password) => {
  await fetch(`${server}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ gamertag, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data));
        //window.location.href = "http://localhost:3000/home";
      }
      return data;
    })
    .catch(error=>error);
};

const logout = () => {
  localStorage.removeItem("user");
};
const authService = { signup, login, logout};

export default authService;
