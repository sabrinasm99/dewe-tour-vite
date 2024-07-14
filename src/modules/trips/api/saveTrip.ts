import { useMutation, useQueryClient } from "@tanstack/react-query";
import { tripService } from "../services";
import toast from "react-hot-toast";

type SaveTripProps = {
  id: string;
  data: FormData;
};
export const useSaveTrip = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: SaveTripProps) => tripService.saveTrip(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTripByIdOnEditTrip"] });
      toast.success("Trip has been updated");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
};
