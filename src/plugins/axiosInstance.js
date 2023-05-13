import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  }
});

axiosInstance.interceptors.response.use((response) => response);

export default axiosInstance;
