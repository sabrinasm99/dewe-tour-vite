import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoAddCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { getAllCountries } from "../../country/api";
import { useAddTrip, useUpdateTrip } from "../api";
import { TripProps } from "../../shared/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";

type ImageProps = {
  fileObj: File | any;
  fileUrl: string;
};

type InputTripProps = {
  title: string;
  countryId: string;
  accomodation: string;
  transportation: string;
  eat: string;
  days: string;
  nights: string;
  date: string;
  price: string;
  quota: string;
  description: string;
};

export default function TripForm({
  formType,
  trip,
}: {
  formType: string;
  trip?: TripProps;
}) {
  const [coverImage, setCoverImage] = useState<ImageProps>({
    fileObj: null,
    fileUrl: "",
  });

  const [detailedImages, setDetailedImages] = useState<ImageProps[]>([]);

  const [deletedDetailedImages, setDeletedDetailedImages] = useState<string[]>(
    []
  );

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [inputTrip, setInputTrip] = useState<InputTripProps>({
    title: "",
    countryId: "",
    accomodation: "",
    transportation: "",
    eat: "",
    days: "",
    nights: "",
    date: selectedDate.toISOString().split("T")[0],
    price: "",
    quota: "",
    description: "",
  });

  const [tripId, setTripId] = useState("");

  const detailedImagesInput = useRef<HTMLInputElement>(null);

  const { data: countries } = getAllCountries();

  const addTripMutation = useAddTrip();

  const updateTripMutation = useUpdateTrip();

  useEffect(() => {
    if (trip) {
      setInputTrip({
        ...inputTrip,
        title: trip.title,
        countryId: trip.country.id,
        accomodation: trip.accomodation,
        transportation: trip.transportation,
        eat: trip.eat,
        days: trip.days.toString(),
        nights: trip.nights.toString(),
        date: trip.date,
        price: trip.price.toString(),
        quota: trip.quota.toString(),
        description: trip.description,
      });

      setSelectedDate(new Date(trip.date));

      setCoverImage({ ...coverImage, fileUrl: trip.cover_image });

      let newDetailedImages: ImageProps[] = [];
      for (let i = 0; i < trip.detailed_images.length; i++) {
        newDetailedImages.push({
          fileObj: null,
          fileUrl: trip.detailed_images[i],
        });
      }
      setDetailedImages([...newDetailedImages]);

      setTripId(trip.id);
    }
  }, [trip]);

  const handleClickAddDetailedImages = () => {
    detailedImagesInput.current?.click();
  };

  const deleteDetailedImage = (
    e: React.MouseEvent<HTMLButtonElement>,
    fileUrl: string
  ) => {
    e.preventDefault();
    const deletedIndex = detailedImages.findIndex(
      (image) => image.fileUrl === fileUrl
    );

    if (formType === "Edit") {
      const deletedImageName = detailedImages[deletedIndex].fileUrl
        .split("/")
        .pop();

      if (deletedImageName) {
        setDeletedDetailedImages([...deletedDetailedImages, deletedImageName]);
      }
    }

    detailedImages.splice(deletedIndex, 1);
    setDetailedImages([...detailedImages]);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setInputTrip({ ...inputTrip, [e.target.name]: e.target.value });
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;

    if (files && !files.length && formType === "Edit") {
      return;
    }

    if (files && files[0]) {
      const file = files[0];
      let changedImage = {
        fileObj: file,
        fileUrl: URL.createObjectURL(file),
      };
      setCoverImage(changedImage);
    } else {
      setCoverImage({
        fileObj: null,
        fileUrl: "",
      });
    }
  };

  const handleChangeDetailedImages = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let files = e.target.files;
    if (files) {
      let newFiles = [];
      for (let i = 0; i < files.length; i++) {
        newFiles.push({
          fileObj: files[i],
          fileUrl: URL.createObjectURL(files[i]),
        });
      }
      setDetailedImages([...detailedImages, ...newFiles]);
    }
  };

  const handleChangeDate = (date: Date) => {
    setSelectedDate(date);
    setInputTrip({
      ...inputTrip,
      date: date.toISOString().split("T")[0],
    });
  };

  const submitAddTrip = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const formData = new FormData();

    if (
      Object.values(inputTrip).includes("") ||
      !coverImage.fileUrl ||
      detailedImages.length < 4
    ) {
      toast.error(
        "There are several fields that have not been filled in or are not filled in according to the criteria"
      );
      return;
    }

    formData.append("title", inputTrip.title);
    formData.append("country_id", inputTrip.countryId);
    formData.append("accomodation", inputTrip.accomodation);
    formData.append("transportation", inputTrip.transportation);
    formData.append("eat", inputTrip.eat);
    formData.append("days", inputTrip.days);
    formData.append("nights", inputTrip.nights);
    formData.append("date", inputTrip.date);
    formData.append("price", inputTrip.price);
    formData.append("quota", inputTrip.quota);
    formData.append("description", inputTrip.description);

    formData.append("cover_image", coverImage.fileObj);

    if (detailedImages.length) {
      detailedImages.forEach((image) => {
        formData.append("detailed_images", image.fileObj);
      });
    }

    addTripMutation.mutate(formData);

    setInputTrip({
      ...inputTrip,
      title: "",
      countryId: "",
      accomodation: "",
      transportation: "",
      eat: "",
      days: "",
      nights: "",
      date: "",
      price: "",
      quota: "",
      description: "",
    });

    setSelectedDate(new Date());

    setCoverImage({ fileObj: null, fileUrl: "" });
    setDetailedImages([]);
  };

  const submitSaveTrip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();

    if (
      Object.values(inputTrip).includes("") ||
      !coverImage.fileUrl ||
      detailedImages.length < 4
    ) {
      toast.error(
        "There are several fields that have not been filled in or are not filled in according to the criteria"
      );
      return;
    }

    formData.append("title", inputTrip.title);
    formData.append("country_id", inputTrip.countryId);
    formData.append("accomodation", inputTrip.accomodation);
    formData.append("transportation", inputTrip.transportation);
    formData.append("eat", inputTrip.eat);
    formData.append("days", inputTrip.days);
    formData.append("nights", inputTrip.nights);
    formData.append("date", inputTrip.date);
    formData.append("price", inputTrip.price);
    formData.append("quota", inputTrip.quota);
    formData.append("description", inputTrip.description);

    if (coverImage.fileObj) {
      formData.append("cover_image", coverImage.fileObj);
    }

    if (deletedDetailedImages.length) {
      deletedDetailedImages.forEach((imageName) => {
        formData.append("deleted_detailed_images", imageName);
      });
    }

    const newDetailedImages = detailedImages.filter((image) => image.fileObj);

    if (newDetailedImages.length) {
      newDetailedImages.forEach((image) => {
        formData.append("detailed_images", image.fileObj);
      });
    }

    updateTripMutation.mutate({ id: tripId, data: formData });
  };

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="w-90% text-3xl font-bold">{formType} Trip</h1>
      </div>
      <div className="mt-8 flex justify-center">
        <form className="w-85%" onSubmit={submitAddTrip}>
          <div>
            <label className="font-bold pl-1">Title Trip</label>
            <input
              type="text"
              name="title"
              value={inputTrip.title}
              onChange={handleChange}
              className="border border-#B1B1B1 bg-inputTrip block w-full rounded pl-1 focus:outline-none mt-2"
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Country</label>
            <select
              name="countryId"
              value={inputTrip.countryId}
              className="border border-#B1B1B1 bg-inputTrip block w-full rounded pl-1 focus:outline-none mt-2"
              onChange={handleChange}
            >
              <option value=""> </option>
              {countries &&
                countries.length > 0 &&
                countries.map((val: any) => {
                  return (
                    <option key={val.id} value={val.id}>
                      {val.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Accomodation</label>
            <input
              type="text"
              name="accomodation"
              value={inputTrip.accomodation}
              onChange={handleChange}
              className="border border-#B1B1B1 bg-inputTrip block w-full rounded pl-1 focus:outline-none mt-2"
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Transportation</label>
            <input
              type="text"
              name="transportation"
              value={inputTrip.transportation}
              onChange={handleChange}
              className="border border-#B1B1B1 bg-inputTrip block w-full rounded pl-1 focus:outline-none mt-2"
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Eat</label>
            <input
              type="text"
              name="eat"
              value={inputTrip.eat}
              onChange={handleChange}
              className="border border-#B1B1B1 bg-inputTrip block w-full rounded pl-1 focus:outline-none mt-2"
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Duration</label>
            <div className="flex mt-2">
              <div className="w-1/2 md:w-auto mr-0 md:mr-12 flex">
                <input
                  type="number"
                  name="days"
                  value={inputTrip.days}
                  onChange={handleChange}
                  className="border border-#B1B1B1 bg-inputTrip rounded pl-1 focus:outline-none mr-1 md:mr-3 w-3/4 md:w-auto"
                />
                <h3 className="w-1/4">Day</h3>
              </div>
              <div className="flex w-1/2 md:w-auto">
                <input
                  type="number"
                  name="nights"
                  value={inputTrip.nights}
                  onChange={handleChange}
                  className="border border-#B1B1B1 bg-inputTrip rounded pl-1 focus:outline-none mr-1 md:mr-3 w-3/4 md:w-auto"
                />
                <h3 className="w-1/4">Night</h3>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Date Trip</label>
            <div className="mt-2">
              <DatePicker
                showIcon
                icon={<FaCalendar className="text-gray-600 text-sm mt-1" />}
                className="border bg-inputTrip border-#B1B1B1 rounded focus:outline-none"
                selected={selectedDate}
                onChange={(date) => {
                  if (date) {
                    handleChangeDate(date);
                  }
                }}
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Price</label>
            <input
              type="number"
              name="price"
              value={inputTrip.price}
              onChange={handleChange}
              className="border bg-inputTrip border-#B1B1B1 block w-full rounded pl-1 focus:outline-none mt-2"
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Quota</label>
            <input
              type="number"
              name="quota"
              value={inputTrip.quota}
              onChange={handleChange}
              className="border bg-inputTrip border-#B1B1B1 block w-full rounded pl-1 focus:outline-none mt-2"
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Description</label>
            <textarea
              name="description"
              value={inputTrip.description}
              onChange={handleChange}
              className="border bg-inputTrip border-#B1B1B1 block w-full rounded pl-1 focus:outline-none mt-2"
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Cover Image</label>
            {coverImage.fileUrl ? (
              <img
                src={coverImage.fileUrl}
                className="object-contain h-52 mt-2"
                alt="image"
              />
            ) : (
              <div
                className="w-full md:w-1/2 flex justify-center items-center text-center mt-2"
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
            <p
              className={`${
                formType === "Edit" ? "block" : "hidden"
              } italic text-sm`}
            >
              *cover image can only be changed, not deleted
            </p>
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Detailed Images</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 mt-2">
              {detailedImages.length ? (
                detailedImages.map((image, i) => (
                  <div key={i} className="flex justify-center relative group">
                    <img
                      src={image.fileUrl}
                      className="object-contain h-32 sm:h-44 md:h-48 lg:h-52"
                      alt="image"
                    />
                    <div className="absolute hover:bg-backdrop inset-0 flex justify-center items-center">
                      <button
                        onClick={(e) => deleteDetailedImage(e, image.fileUrl)}
                        className="absolute bg-gray-200 text-white rounded-full py-2 px-3 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <MdDelete className="text-3xl text-red-600" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
              <div
                className={`${
                  detailedImages.length !== 0
                    ? "justify-center"
                    : "justify-start"
                } flex`}
              >
                <div
                  onClick={handleClickAddDetailedImages}
                  className="cursor-pointer border-2 border-gray-500 h-32 sm:h-44 md:h-48 lg:h-52 w-24 sm:w-32 md:w-36 rounded-xl border-dashed flex items-center justify-center"
                >
                  <IoAddCircle className="text-4xl sm:text-5xl md:text-6xl text-gray-500 hover:text-#FFAF00" />
                </div>
              </div>
              <input
                ref={detailedImagesInput}
                type="file"
                onChange={handleChangeDetailedImages}
                className="hidden"
                accept="image/*"
                multiple
              />
            </div>
            <p className="italic text-sm">*min. 4 pictures</p>
          </div>
          <div className="mt-16 flex justify-center">
            <button
              className="font-semibold px-12 py-1 text-white rounded"
              onClick={(e) => (trip ? submitSaveTrip(e) : submitAddTrip(e))}
              style={{ backgroundColor: "#FFAF00" }}
            >
              {formType === "Edit" ? "Save" : "Add Trip"}
            </button>
            <Toaster position="bottom-center" />
          </div>
        </form>
      </div>
    </div>
  );
}
