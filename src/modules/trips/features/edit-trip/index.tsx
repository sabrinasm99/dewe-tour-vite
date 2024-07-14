import { useParams } from "react-router-dom";
import TripForm from "../../components/TripForm";
import { useGetTripByIdOnEditTrip } from "../../api";

export default function EditTrip() {
  const { id } = useParams();
  const { data: trip } = useGetTripByIdOnEditTrip(id || "");

  return (
    <div className="grow">
      {trip && <TripForm formType="Edit" trip={trip} />}
    </div>
  );
}
