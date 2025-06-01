import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { type RootState, store } from "../../stores/store";
import { clearAuthToken } from "../authSlice";
import toast from "react-hot-toast";

export const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

// Request interceptor
AxiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log("Request interceptor called");

    // Get token directly from store instead of using useSelector
    const state = store.getState() as RootState;
    const token = state?.auth?.token;

    console.log(token, "token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    console.log("Request error interceptor called");
    return Promise.reject(error);
  }
);

// Response interceptor
AxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("Response interceptor called - success");
    return response;
  },
  (error: AxiosError) => {
    console.log("Response interceptor called - error", error.response?.status);

    if (error.response?.status === 401) {
      // Dispatch directly to store instead of using useDispatch
      store.dispatch(clearAuthToken());
      toast.error("Your session has expired. Please login again");

      // Redirect to login page
      window.location.href = "/";
    } else if (error.response?.status === 403) {
      toast.error("You do not have permission to perform this action.");
      // Redirect to home page

      store.dispatch(clearAuthToken());
      // window.location.href = "/";
    }

    return Promise.reject(error);
  }
);
