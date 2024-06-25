import { useMutation } from "@tanstack/react-query";
import { userService } from "../services";

type RegisterProps = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  gender: string;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterProps) => userService.register(data),
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
