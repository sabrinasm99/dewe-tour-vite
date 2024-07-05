import { useQuery } from "@tanstack/react-query";
import { transactionService } from "../services";

export const useGetApprovedTransactionsByUserId = () => {
  return useQuery({
    queryKey: ["getApprovedTransactionsByUserId"],
    queryFn: () => transactionService.getApprovedTransactionsByUserId(),
  });
};
