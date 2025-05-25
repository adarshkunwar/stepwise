import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../configuration/axiosInterceptor/SetupAxios";
import { AxiosError, type AxiosResponse } from "axios";
import { setAuthToken } from "../../configuration/authSlice";
import { useDispatch } from "react-redux";

type PayloadProps = {
  email: string;
  password: string;
};

// Define response type for better type safety
type LoginResponse = {
  token: string;
  user: {
    user_id: string;
    email: string;
    full_name: string;
  };
};

const post = async (
  payload: PayloadProps
): Promise<AxiosResponse<LoginResponse>> => {
  try {
    const response = await AxiosInstance.post<LoginResponse>(
      "/auth/login",
      payload
    );
    return response;
  } catch (error) {
    // Better error handling with proper typing
    if (error instanceof Error) {
      throw error;
    }

    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage = axiosError?.response?.data?.message ?? "Unknown error";
    throw new Error(errorMessage);
  }
};

const usePostAuthLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (payload: PayloadProps) => post(payload),
    onError: (error: Error) => {
      toast.error(error.message);
    },
    onSuccess: (data: AxiosResponse<LoginResponse>) => {
      dispatch(
        setAuthToken({
          token: data.data.token,
          user: data.data.user.user_id,
        })
      );
      toast.success("Logged in!");
      navigate("/");
    },
  });
};

export default usePostAuthLogin;
