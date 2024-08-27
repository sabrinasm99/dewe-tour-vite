import { useNavigate } from "react-router-dom";
import TripCard from "../../components/TripCard";
import { useGetAllTrips } from "../../api";
import { TripProps } from "../../../shared/types";
import TripDeleteConfirmation from "../../modals/TripDeleteConfirmation";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function AdminTripList() {
  const navigate = useNavigate();

  const [selectedTrip, setSelectedTrip] = useState<TripProps>();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const { data: trips } = useGetAllTrips();

  return (
    <>
      <div className="mt-10 sm:mt-12 md:mt-16 xl:mt-20 relative z-10 grow">
        <div className="flex justify-center">
          <div className="w-90% flex">
            <h1 className="text-3xl font-bold">Trip List</h1>
            <div className="ml-auto flex items-center">
              <button
                className="text-white bg-#FFAF00 text-sm font-semibold py-1 px-6 rounded focus:outline-none"
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
                <TripCard
                  key={trip.id}
                  trip={trip}
                  setSelectedTrip={setSelectedTrip}
                  setShowDeleteConfirmation={setShowDeleteConfirmation}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
      {showDeleteConfirmation && (
        <TripDeleteConfirmation
          selectedTrip={selectedTrip}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
        />
      )}
    </>
  );
}
