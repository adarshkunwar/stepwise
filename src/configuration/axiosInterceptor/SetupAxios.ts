import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { type RootState } from "../../stores/store";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthToken } from "../authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const state = useSelector((state: RootState) => state?.auth);
    const { token } = state;

    if (token) {
      config.headers.set({
        ...config.headers,
        Authorization: `Bearer ${token}`,
      });
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const navigate = useNavigate();
    if (error.response?.status === 401) {
      const dispatch = useDispatch();
      toast.error("Your session has expired. Please login again");
      dispatch(clearAuthToken());
    } else if (error.response?.status === 403) {
      toast.error("You do not have permission to perform this action.");
      navigate("/");
    }
    return Promise.reject(error);
  }
);
