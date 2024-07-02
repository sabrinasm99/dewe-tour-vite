import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "../services";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => userService.updateUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUserProfile"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
