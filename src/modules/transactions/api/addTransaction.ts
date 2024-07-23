import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionService } from "../services";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type AddTransactionProps = {
  quantity: number;
  total_payment: number;
  trip_id: string;
};

export const useAddTransaction = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (transaction: AddTransactionProps) =>
      transactionService.addTransaction(transaction),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTransactionsByUserId"] });
      navigate("/payment");
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
};
