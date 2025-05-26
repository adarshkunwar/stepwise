import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../configuration/axiosInterceptor/SetupAxios";
import { AxiosError, type AxiosResponse } from "axios";
import { setAuthToken } from "../../configuration/authSlice";
import { useDispatch } from "react-redux";

type PayloadProps = {
  full_name: string;
  email: string;
  password: string;
  confirm_password: string;
};

// Define response type for better type safety
type RegisterResponse = {
  token: string;
  user: {
    user_id: string;
    email: string;
    full_name: string;
  };
};

const post = async (
  payload: PayloadProps
): Promise<AxiosResponse<RegisterResponse>> => {
  try {
    const response = await AxiosInstance.post<RegisterResponse>(
      "/auth/register",
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

const usePostAuthRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (payload: PayloadProps) => post(payload),
    onError: (error: Error) => {
      toast.error(error.message);
    },
    onSuccess: (data: AxiosResponse<RegisterResponse>) => {
      dispatch(
        setAuthToken({
          token: data.data.token,
          isAuthenticated: true,
          user: data.data.user.user_id,
        })
      );
      toast.success("Registration successful!");
      navigate("/dashboard");
    },
  });
};

export default usePostAuthRegister;
