import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionService } from "../services";

export const useApproveTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => transactionService.approveTransaction(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getTransactionById"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getAllTransactions"],
      });
    },

    onError: (err) => {
      console.log(err);
    },
  });
};
