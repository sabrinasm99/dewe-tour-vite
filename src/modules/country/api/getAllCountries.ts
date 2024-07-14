import { useQuery } from "@tanstack/react-query";
import { countryService } from "../services";

export const getAllCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: () => countryService.getAllCountries(),
  });
};
