import { useQuery } from "@tanstack/react-query";
import { tripService } from "../services";

export const useGetTripByIdOnDetailTrip = (id: string) => {
  return useQuery({
    queryKey: ["getTripByIdOnDetailTrip"],
    queryFn: () => tripService.getTripByIdOnDetailTrip(id),
  });
};
