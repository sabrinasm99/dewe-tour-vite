import { useMutation } from "@tanstack/react-query";
import { userService } from "../services";
import { useUserStore } from "../../../store/useUserStore";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const updateUserId = useUserStore((state: any) => state.updateUserId);

  return useMutation({
    mutationFn: (data: LoginProps) => userService.login(data),
    onSuccess: (res) => {
      updateUserId(res.data.data.id);
      if (res.data.data.isAdmin) {
        navigate("/transaction-list");
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
