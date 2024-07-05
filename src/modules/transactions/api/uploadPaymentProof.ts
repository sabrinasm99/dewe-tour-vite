import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionService } from "../services";

type UploadPaymentProofProps = {
  id: string;
  data: FormData;
};

export const useUploadPaymentProof = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UploadPaymentProofProps) =>
      transactionService.uploadPaymentProof(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTransactionsByUserId"] });
    },

    onError: (err) => {
      console.log(err);
    },
  });
};
