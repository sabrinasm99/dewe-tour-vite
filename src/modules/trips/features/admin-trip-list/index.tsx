import { useNavigate } from "react-router-dom";
// import { tripList } from "../../../../fakedata";
import TripCard from "../../components/TripCard";
import { useGetAllTrips } from "../../api";
import { TripProps } from "../../../shared/types";

export default function AdminTripList() {
  const navigate = useNavigate();
  const { data: trips } = useGetAllTrips();
  return (
    <div className="mt-10 sm:mt-12 md:mt-16 xl:mt-20 relative z-10 grow">
      <div className="flex justify-center">
        <div className="w-90% flex">
          <h1 className="text-3xl font-bold">Trip List</h1>
          <div className="ml-auto flex items-center">
            <button
              className="text-white text-sm font-semibold py-1 px-6 rounded focus:outline-none"
              style={{ backgroundColor: "#FFAF00" }}
              onClick={() => navigate("/add-trip")}
            >
              Add Trip
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-7 md:mt-9 xl:mt-12 flex justify-center">
        <div className="w-90% lg:w-85% grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 xl:gap-20">
          {trips && trips.length ? (
            trips.map((trip: TripProps) => (
              <TripCard key={trip.id} trip={trip} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
