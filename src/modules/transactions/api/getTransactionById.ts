import { useQuery } from "@tanstack/react-query";
import { transactionService } from "../services";

export const useGetTransactionById = (id: string) => {
  return useQuery({
    queryKey: ["getTransactionById"],
    queryFn: () => transactionService.getTransactionById(id),
  });
};
