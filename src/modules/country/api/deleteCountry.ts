import { useMutation, useQueryClient } from "@tanstack/react-query";
import { countryService } from "../services";

export const useDeleteCountry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => countryService.deleteCountry(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllCountries"] });
    },

    onError: (err: any) => {
      console.log(err.response.data.message);
    },
  });
};
