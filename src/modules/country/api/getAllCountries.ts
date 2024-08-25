import { useQuery } from "@tanstack/react-query";
import { countryService } from "../services";

export const useGetAllCountries = () => {
  return useQuery({
    queryKey: ["getAllCountries"],
    queryFn: () => countryService.getAllCountries(),
  });
};
