import { AxiosInstance } from "../../configuration/axiosInterceptor/SetupAxios";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores/store";
import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { setAuthToken } from "../../configuration/authSlice";
import { useEffect } from "react";

const Get = async ({ user }: { user: string }) => {
  try {
    const response = await AxiosInstance.get(`/auth/user/${user}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) throw error;
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage = axiosError?.response?.data?.message ?? "Unknown error";
    throw new Error(errorMessage);
  }
};

const useGetUserDetails = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const { data: profileData } = useQuery({
    queryKey: ["Profile"],
    queryFn: () => Get({ user: user ?? "" }),
    enabled: !!user,
    staleTime: Infinity,
  });

  useEffect(() => {
    const hasProfile = profileData?.userAnswers?.length > 0;
    console.log(hasProfile, "hasProfile");
    if (profileData) {
      dispatch(setAuthToken({ hasProfile }));
    }
  }, [dispatch, profileData]);

  return profileData;
};

export default useGetUserDetails;
