import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const register = (username, email, password, name) => {
  return axios.post(`${API_URL}/users`, {
    username,
    email,
    password,
    name,
  });
};

const login = (email, password) => {
  return axios
    .post(`${API_URL}/login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
