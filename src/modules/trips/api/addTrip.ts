import { useMutation } from "@tanstack/react-query";
import { tripService } from "../services";
import toast from "react-hot-toast";

export const useAddTrip = () => {
  return useMutation({
    mutationFn: (trip: FormData) => tripService.addTrip(trip),
    onSuccess: () => {
      toast.success("Trip Added Successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};
