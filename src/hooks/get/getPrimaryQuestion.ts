import type { AxiosError } from "axios";
import { AxiosInstance } from "../../configuration/axiosInterceptor/SetupAxios";
import { useQuery } from "@tanstack/react-query";

const Get = async () => {
  try {
    const response = await AxiosInstance.get("/question");
    return response.data;
  } catch (error) {
    if (error instanceof Error) throw error;
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage = axiosError?.response?.data?.message ?? "Unknown error";
    throw new Error(errorMessage);
  }
};

const useGetQuestions = () => {
  return useQuery({
    queryKey: ["questions"],
    queryFn: Get,
  });
};

export default useGetQuestions;
