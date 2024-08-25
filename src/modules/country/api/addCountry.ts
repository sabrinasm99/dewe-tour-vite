import { useMutation, useQueryClient } from "@tanstack/react-query";
import { countryService } from "../services";

type AddCountryProps = {
  name: string;
};

export const useAddCountry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (country: AddCountryProps) =>
      countryService.addCountry(country),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllCountries"] });
    },

    onError: (err: any) => {
      console.log(err.response.data.message);
    },
  });
};
