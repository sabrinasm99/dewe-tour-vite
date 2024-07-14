import { useQuery } from "@tanstack/react-query";
import { tripService } from "../services";

export const useGetAllTrips = () => {
  return useQuery({
    queryKey: ["getAllTrips"],
    queryFn: () => tripService.getAllTrips(),
  });
};
