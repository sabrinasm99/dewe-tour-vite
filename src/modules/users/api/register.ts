import { useMutation } from "@tanstack/react-query";
import { userService } from "../services";
import { useUserStore } from "../../../store/useUserStore";

type RegisterProps = {
  name: string;
  email: string;
  password: string;
  phone: string;
  gender: string;
  address: string;
};

export const useRegister = () => {
  const updateUserId = useUserStore((state: any) => state.updateUserId);

  return useMutation({
    mutationFn: (data: RegisterProps) => userService.register(data),
    onSuccess: (res) => {
      updateUserId(res.data.data.id);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
