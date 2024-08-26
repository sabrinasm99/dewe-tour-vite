import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CountryProps } from "../../shared/types";
import { useAddCountry, useDeleteCountry, useUpdateCountry } from "../api";

export default function ManageCountry({
  setShowManageCountry,
  countries,
}: {
  setShowManageCountry: React.Dispatch<boolean>;
  countries: CountryProps[];
}) {
  const [selectedCountry, setSelectedCountry] = useState({ id: "", name: "" });
  const [search, setSearch] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentCountryToEdit, setCurrentCountryToEdit] = useState("");
  const addCountryMutation = useAddCountry();
  const deleteCountryMutation = useDeleteCountry();
  const updateCountryMutation = useUpdateCountry();

  const handleChangeNewCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCountry(e.target.value);
  };

  const submitAddCountry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    addCountryMutation.mutate({ name: newCountry });

    setNewCountry("");
  };

  const handleChangeSelectedCountry = (country: CountryProps) => {
    setSelectedCountry({ id: country.id, name: country.name });
  };

  const handleChangeCountryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCountryToEdit(e.target.value);
  };

  const handleClickEditCountry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditMode(true);
    setCurrentCountryToEdit(selectedCountry.name);
  };

  const handleUpdateCountry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    updateCountryMutation.mutate({
      id: selectedCountry.id,
      data: { name: currentCountryToEdit },
    });

    setSelectedCountry({ ...selectedCountry, name: currentCountryToEdit });
    setEditMode(false);
    setCurrentCountryToEdit("");
  };

  const handleDeleteCountry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    deleteCountryMutation.mutate(selectedCountry.id);
    setSelectedCountry({ id: "", name: "" });
  };

  const filteredCountries = countries.length
    ? countries.filter((country: CountryProps) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <div className="fixed z-30 bg-white top-50% left-50% -translate-x-50% -translate-y-50% w-90% md:w-3/4 lg:w-3/5 xl:w-1/2 min-[1500px]:w-2/5">
        <div className="flex bg-blue-500 px-4 py-2">
          <p className="text-white text-2xl">Manage Country</p>
          <div className="ml-auto text-white flex items-center">
            <IoMdClose
              className="cursor-pointer"
              onClick={() => setShowManageCountry(false)}
            />
          </div>
        </div>
        <div className="p-3">
          <div className="border border-gray-200 bg-gray-100 rounded-sm px-2 py-4">
            <p>List of Countries</p>
            <input
              type="text"
              className="mt-2 w-full border border-gray-200 px-1 focus:outline-none"
              placeholder="Search for a country"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="mt-1 border border-gray-200 h-36 bg-white overflow-y-auto px-1">
              {filteredCountries.length ? (
                filteredCountries.map((country: CountryProps) => (
                  <li
                    key={country.id}
                    onClick={() => handleChangeSelectedCountry(country)}
                    className={`${
                      selectedCountry.name === country.name
                        ? "bg-blue-100"
                        : "bg-transparent"
                    } hover:bg-blue-100 cursor-pointer`}
                  >
                    {country.name}
                  </li>
                ))
              ) : (
                <div className="flex justify-center items-center h-full">
                  No countries yet
                </div>
              )}
            </ul>
            <div className="mt-2">
              <div className="flex">
                <input
                  type="text"
                  className="border border-gray-200 px-1 focus:outline-none w-full"
                  placeholder="Add new country"
                  value={newCountry}
                  onChange={handleChangeNewCountry}
                />
                <button
                  type="button"
                  className={`${
                    newCountry
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-400"
                  } ml-2 px-2 rounded-sm`}
                  disabled={!newCountry}
                  onClick={submitAddCountry}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="mt-2 flex">
              <div className="w-full flex">
                <span className="mr-1">Selected:</span>
                {currentCountryToEdit && editMode ? (
                  <input
                    type="text"
                    className="focus:outline-none border border-gray-200 grow"
                    value={currentCountryToEdit}
                    onChange={handleChangeCountryName}
                    autoFocus
                    onKeyDown={(key) => {
                      if (key.code === "Escape") {
                        setEditMode(false);
                      }
                    }}
                    onBlur={(e) => {
                      e.preventDefault();
                      setEditMode(!editMode);
                      setCurrentCountryToEdit("");
                    }}
                  />
                ) : (
                  <span
                    className={`${
                      selectedCountry.name ? "not-italic" : "italic"
                    }`}
                  >
                    {selectedCountry.name ? selectedCountry.name : "none"}
                  </span>
                )}
              </div>
              {editMode ? (
                <button
                  type="submit"
                  className={`${
                    editMode ? "block" : "hidden"
                  } bg-green-500 text-white ml-2 px-2 rounded-sm`}
                  onMouseDown={handleUpdateCountry}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!selectedCountry.name || editMode}
                  onMouseDown={handleClickEditCountry}
                  className={`${
                    selectedCountry.name && !editMode
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-400"
                  } ml-2 px-2 rounded-sm`}
                >
                  Edit
                </button>
              )}
              <button
                type="submit"
                disabled={!selectedCountry.name || editMode}
                onMouseDown={handleDeleteCountry}
                className={`${
                  selectedCountry.name && !editMode
                    ? "bg-red-500 text-white"
                    : "bg-gray-300 text-gray-400"
                } ml-2 px-2 rounded-sm`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowManageCountry(false)}
        className="fixed z-20 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
