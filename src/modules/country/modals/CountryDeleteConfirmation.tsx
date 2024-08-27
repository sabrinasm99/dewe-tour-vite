import React from "react";
import { useDeleteCountry } from "../api";
import { SelectedCountryProps } from "./ManageCountry";
import { IoMdClose } from "react-icons/io";

export default function CountryDeleteConfirmation({
  setShowDeleteConfirmation,
  selectedCountry,
  setSelectedCountry,
}: {
  setShowDeleteConfirmation: React.Dispatch<boolean>;
  selectedCountry: SelectedCountryProps;
  setSelectedCountry: React.Dispatch<SelectedCountryProps>;
}) {
  const deleteCountryMutation = useDeleteCountry();

  const handleDeleteCountry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    deleteCountryMutation.mutate(selectedCountry.id);
    setSelectedCountry({ id: "", name: "" });
    setShowDeleteConfirmation(false);
  };
  return (
    <>
      <div className="fixed rounded-md py-3 z-40 bg-white top-50% left-50% -translate-x-50% -translate-y-50% shadow-modal w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3">
        <div className="border-b border-gray-300 px-3 pb-3 sm:pb-5 flex">
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
            Are you sure you want to delete the country{" "}
            <strong>{selectedCountry.name}</strong>?
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
            onClick={handleDeleteCountry}
            className="bg-red-500 text-white rounded-md py-1 px-2"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
