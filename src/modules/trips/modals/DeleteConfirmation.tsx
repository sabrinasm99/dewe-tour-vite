import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDeleteTrip } from "../api";
import { TripProps } from "../../shared/types";

export default function DeleteConfirmation({
  selectedTrip,
  setShowDeleteConfirmation,
}: {
  selectedTrip: TripProps | any;
  setShowDeleteConfirmation: React.Dispatch<boolean>;
}) {
  const deleteTripMutation = useDeleteTrip();

  const handleDeleteTrip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    deleteTripMutation.mutate(selectedTrip.id);

    setShowDeleteConfirmation(false);
  };

  return (
    <>
      <div
        className="fixed rounded-md py-3 z-30 bg-white top-50% left-50% -translate-x-50% -translate-y-50% shadow-modal"
        style={{ width: "500px" }}
      >
        <div className="border-b border-gray-300 px-3 pb-5 flex">
          <h1 className="text-xl font-medium text-gray-700">
            Delete Confirmation
          </h1>
          <div className="ml-auto flex items-center">
            <IoMdClose
              onClick={() => setShowDeleteConfirmation(false)}
              className="text-gray-500 cursor-pointer"
            />
          </div>
        </div>
        <div className="px-3 py-5">
          <p className="bg-red-100 text-red-700 rounded-md p-2">
            Are you sure you want to delete the trip{" "}
            <strong>{selectedTrip.title}</strong>?
          </p>
        </div>
        <div className="border-t border-gray-300 flex pt-2 px-3">
          <button
            onClick={() => setShowDeleteConfirmation(false)}
            className="text-red-500 mr-3 ml-auto"
          >
            Cancel
          </button>
          <button
            onClick={(e) => handleDeleteTrip(e)}
            className="bg-red-500 text-white rounded-md py-1 px-2"
          >
            Delete
          </button>
        </div>
      </div>
      <div
        onClick={() => setShowDeleteConfirmation(false)}
        className="fixed z-20 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
