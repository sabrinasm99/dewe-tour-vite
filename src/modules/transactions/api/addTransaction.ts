import { useMutation } from "@tanstack/react-query";
import { transactionService } from "../services";

type AddTransactionProps = {
  quantity: number;
  total_payment: number;
  trip_id: string;
};

export const useAddTransaction = () =>
  useMutation({
    mutationFn: (transaction: AddTransactionProps) =>
      transactionService.addTransaction(transaction),
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });
