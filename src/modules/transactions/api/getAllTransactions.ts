import { useQuery } from "@tanstack/react-query";
import { transactionService } from "../services";

export const useGetAllTransactions = () => {
  return useQuery({
    queryKey: ["getAllTransactions"],
    queryFn: () => transactionService.getAllTransactions(),
  });
};
