import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionService } from "../services";

export const useApproveTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => transactionService.approveTransaction(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getTransactionById"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getAllTransactions"],
      });
    },

    onError: (err: any) => {
      console.log(err.response.data.message);
    },
  });
};
