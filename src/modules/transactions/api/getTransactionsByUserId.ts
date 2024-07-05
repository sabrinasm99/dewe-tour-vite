import { useQuery } from "@tanstack/react-query";
import { transactionService } from "../services";

export const useGetTransactionsByUserId = () => {
  return useQuery({
    queryKey: ["getTransactionsByUserId"],
    queryFn: () => transactionService.getTransactionsByUserId(),
  });
};
