import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

const axiosInterface = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInterface;
