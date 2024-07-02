import { useQuery } from "@tanstack/react-query";
import { userService } from "../services";

export const useGetUserPofile = () => {
  return useQuery({
    queryKey: ["getUserProfile"],
    queryFn: () => userService.getUserProfile(),
  });
};
