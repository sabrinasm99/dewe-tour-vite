import { useMutation } from "@tanstack/react-query";
import { userService } from "../services";

type LoginProps = {
  email: string;
  password: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginProps) => userService.login(data),
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
