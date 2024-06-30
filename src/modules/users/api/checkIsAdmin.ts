import { useQuery } from "@tanstack/react-query";
import { userService } from "../services";

export const useCheckIsAdmin = () => {
  return useQuery({
    queryKey: ["checkIsAdmin"],
    queryFn: () => userService.checkIsAdmin(),
  });
};
