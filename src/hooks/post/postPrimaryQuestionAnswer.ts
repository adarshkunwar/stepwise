import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../configuration/axiosInterceptor/SetupAxios";
import { AxiosError, type AxiosResponse } from "axios";

// Define the payload type
type PayloadProps = {
  userId: string;
  answers: {
    [key: string]: string;
  }[];
};

const post = async (payload: PayloadProps): Promise<AxiosResponse> => {
  try {
    const response = await AxiosInstance.post("/answer", payload);
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

const usePostPrimaryQuestionAnswer = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: PayloadProps) => post(payload),
    onError: (error: Error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Logged in!");
      queryClient.invalidateQueries({ queryKey: [`Profile`] });
      navigate("/dashboard");
    },
  });
};

export default usePostPrimaryQuestionAnswer;
