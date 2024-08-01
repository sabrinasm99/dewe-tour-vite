import { useMutation, useQueryClient } from "@tanstack/react-query";
import { tripService } from "../services";
import toast from "react-hot-toast";

export const useDeleteTrip = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => tripService.deleteTrip(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllTrips"] });
      toast.success("The trip has been deleted");
    },

    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
};
