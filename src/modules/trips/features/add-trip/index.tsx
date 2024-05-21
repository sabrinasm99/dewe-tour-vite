import React, { useState } from "react";

export default function AddTrip() {
  const [tripImage, setTripImage] = useState<{
    fileObj: File | null;
    fileUrl: string;
  }>({
    fileObj: null,
    fileUrl: "",
  });

  const [inputTrip, setInputTrip] = useState({
    title: "",
    countryId: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    dateTrip: "",
    price: "",
    quota: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setInputTrip({ ...inputTrip, [e.target.name]: e.target.value });
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      let changedImage = {
        fileObj: file,
        fileUrl: URL.createObjectURL(file),
      };
      setTripImage(changedImage);
    } else {
      setTripImage({
        fileObj: null,
        fileUrl: "",
      });
    }
  };
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="w-90% text-3xl font-bold">Add Trip</h1>
      </div>
      <div className="mt-8 flex justify-center">
        <form
          className="w-85%"
          // onSubmit={submitAddTrip}
        >
          <div>
            <label className="font-bold pl-1">Title Trip</label>
            <input
              type="text"
              name="title"
              value={inputTrip.title}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Country</label>
            <select
              name="countryId"
              value={inputTrip.countryId}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
              onChange={handleChange}
            >
              <option> </option>
              <option>Australia</option>
              <option>Indonesia</option>
              <option>Japan</option>
              <option>South Korea</option>
              {/* {posts.data.data.map((val) => {
                return (
                  <option key={val.id} value={val.id}>
                    {val.name}
                  </option>
                );
              })} */}
            </select>
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Accomodation</label>
            <input
              type="text"
              name="accomodation"
              value={inputTrip.accomodation}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Transportation</label>
            <input
              type="text"
              name="transportation"
              value={inputTrip.transportation}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Eat</label>
            <input
              type="text"
              name="eat"
              value={inputTrip.eat}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Duration</label>
            <div className="flex mt-2">
              <div className="w-1/2 md:w-auto mr-0 md:mr-12 flex">
                <input
                  type="number"
                  name="day"
                  value={inputTrip.day}
                  onChange={handleChange}
                  className="border rounded pl-1 focus:outline-none mr-1 md:mr-3 w-3/4 md:w-auto"
                  style={{
                    backgroundColor: "rgba(196, 196, 196, 0.5)",
                    borderColor: "#B1B1B1",
                  }}
                />
                <h3 className="w-1/4">Day</h3>
              </div>
              <div className="flex w-1/2 md:w-auto">
                <input
                  type="number"
                  name="night"
                  value={inputTrip.night}
                  onChange={handleChange}
                  className="border rounded pl-1 focus:outline-none mr-1 md:mr-3 w-3/4 md:w-auto"
                  style={{
                    backgroundColor: "rgba(196, 196, 196, 0.5)",
                    borderColor: "#B1B1B1",
                  }}
                />
                <h3 className="w-1/4">Night</h3>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Date Trip</label>
            <input
              type="text"
              name="dateTrip"
              value={inputTrip.dateTrip}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Price</label>
            <input
              type="text"
              name="price"
              value={inputTrip.price}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Quota</label>
            <input
              type="text"
              name="quota"
              value={inputTrip.quota}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Description</label>
            <textarea
              name="description"
              value={inputTrip.description}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-bold pl-1">Image</label>
            {tripImage.fileUrl ? (
              <img
                src={tripImage.fileUrl}
                className="w-full md:w-1/2"
                alt="image"
              />
            ) : (
              <div
                className="w-full md:w-1/2 flex justify-center items-center text-center"
                style={{
                  backgroundColor: "lightgray",
                  height: "15em",
                }}
              >
                <span
                  style={{
                    color: "grey",
                    fontSize: "2em",
                    letterSpacing: "3px",
                    fontWeight: 400,
                  }}
                  className="px-1"
                >
                  PREVIEW IMAGE
                </span>
              </div>
            )}
            <input
              type="file"
              onChange={handleChangeImage}
              accept="image/*"
              className="mt-2"
            />
          </div>
          <div className="mt-16 flex justify-center">
            <button
              className="font-semibold px-12 py-1 text-white rounded"
              //   onClick={submitAddTrip}
              style={{ backgroundColor: "#FFAF00" }}
            >
              Add Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
