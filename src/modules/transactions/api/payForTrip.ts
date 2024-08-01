import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionService } from "../services";

export const usePayForTrip = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => transactionService.payForTrip(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTransactionsByUserId"] });
    },

    onError: (err) => {
      console.log(err);
    },
  });
};
