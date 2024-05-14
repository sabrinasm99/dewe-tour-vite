import { tripList } from "../../../../fakedata";
import TripCard from "./TripCard";

export default function TripList() {
  return (
    <div className="mt-20 px-5">
      <h2 className="text-center text-3xl font-bold">Group Tour</h2>
      <div className="grid grid-cols-3 gap-20 mt-20">
        {tripList.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
