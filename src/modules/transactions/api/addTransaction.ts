import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionService } from "../services";

type AddTransactionProps = {
  quantity: number;
  total_payment: number;
  trip_id: string;
};

export const useAddTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (transaction: AddTransactionProps) =>
      transactionService.addTransaction(transaction),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTransactionsByUserId"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
