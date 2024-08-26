import { useMutation, useQueryClient } from "@tanstack/react-query";
import { countryService } from "../services";

type UpdateCountryProps = {
  id: string;
  data: { name: string };
};

export const useUpdateCountry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: UpdateCountryProps) =>
      countryService.updateCountry(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllCountries"] });
    },

    onError: (err: any) => {
      console.log(err.response.data.message);
    },
  });
};
