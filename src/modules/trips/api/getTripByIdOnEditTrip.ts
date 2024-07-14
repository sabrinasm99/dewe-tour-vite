import { useQuery } from "@tanstack/react-query";
import { tripService } from "../services";

export const useGetTripByIdOnEditTrip = (id: string) => {
  return useQuery({
    queryKey: ["getTripByIdOnEditTrip"],
    queryFn: () => tripService.getTripByIdOnEditTrip(id),
  });
};
