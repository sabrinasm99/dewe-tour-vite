import { useNavigate, useParams } from "react-router-dom";
import hotel from "../../../shared/images/hotel.svg";
import meal from "../../../shared/images/meal.svg";
import time from "../../../shared/images/time.svg";
import plane from "../../../shared/images/plane.svg";
import calendar from "../../../shared/images/calendar.svg";
import React, { useEffect, useState } from "react";
import { useAddTransaction } from "../../../transactions/api";
import { useGetTripByIdOnDetailTrip } from "../../api";
import TripImagesSlide from "../../modals/TripImagesSlide";

export default function DetailTrip() {
  const { id: tripId } = useParams();
  const navigate = useNavigate();

  const addTransactionMutation = useAddTransaction();
  const { data: trip } = useGetTripByIdOnDetailTrip(tripId || "");

  const [quantity, setQuantity] = useState(1);

  const [tripPrice, setTripPrice] = useState(0);

  const [showDetailedImages, setShowDetailedImages] = useState(false);

  useEffect(() => {
    if (trip) {
      setTripPrice(trip.price);
    }
  }, [trip]);

  const addQty = () => {
    setQuantity(quantity + 1);
  };

  const minQty = () => {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  };

  const bookingTrip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (tripId) {
      addTransactionMutation.mutate({
        quantity,
        total_payment: quantity * tripPrice,
        trip_id: tripId,
      });
    }
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-32 xl:px-56 relative z-10 grow">
      {trip && (
        <>
          <div className="px-2">
            <h1 className="text-3xl font-bold mt-10">{trip.title}</h1>
            <h4 className="font-semibold text-#A8A8A8">{trip.country.name}</h4>
            <img
              src={trip.detailed_images[0]}
              className="w-full mt-5 object-cover rounded-md sm:h-370px"
            />
            <div className="mt-2 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-4">
              {trip.detailed_images
                .filter((_, i) => i !== 0)
                .map((image, i) => (
                  <div key={i} className="w-full relative">
                    <img
                      src={image}
                      className="w-full object-cover rounded-md h-16 sm:h-174.663px"
                    />
                    <div
                      className={`${
                        i === 2 ? "block" : "hidden"
                      } cursor-pointer absolute text-lg text-white font-bold top-0 left-0 h-full w-full bg-backdrop rounded-md`}
                      onClick={() => setShowDetailedImages(true)}
                    >
                      <p className="flex justify-center items-center h-full tracking-wider text-xs sm:text-base">
                        See All Photos
                      </p>
                    </div>
                  </div>
                ))}
              {/* <div className="w-full">
                <img src={photo3} className="w-full" />
              </div> */}
              {/* <div className="w-full relative">
                <img src={photo4} className="w-full" />
                <div className="absolute text-lg text-white font-bold top-50% left-50% -translate-x-50% -translate-y-50%">
                  +5
                </div>
              </div> */}
            </div>
            <h3 className="mt-6 text-sm font-bold">Information Trip</h3>
            <div className="mt-3 grid grid-cols-3 md:grid-cols-5 gap-2">
              <div>
                <h4 className="text-xs font-bold text-#A8A8A8">Accomodation</h4>
                <div className="flex mt-1">
                  <img src={hotel} className="mr-2" />
                  <h5 className="font-bold text-xs lg:text-sm">
                    {trip.accomodation}
                  </h5>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-#A8A8A8">
                  Transportation
                </h4>
                <div className="flex mt-1">
                  <img src={plane} className="mr-2" />
                  <h5 className="font-bold text-xs lg:text-sm">
                    {trip.transportation}
                  </h5>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-#A8A8A8">Eat</h4>
                <div className="flex mt-1">
                  <img src={meal} className="mr-2" />
                  <h5 className="font-bold text-xs lg:text-sm">{trip.eat}</h5>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-#A8A8A8">Duration</h4>
                <div className="flex mt-1">
                  <img src={time} className="mr-2" />
                  <h5 className="font-bold text-xs lg:text-sm">
                    {trip.days} Days {trip.nights} Nights
                  </h5>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-#A8A8A8">Date Trip</h4>
                <div className="flex mt-1">
                  <img src={calendar} className="mr-2" />
                  <h5 className="font-bold text-xs lg:text-sm">{trip.date}</h5>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-sm mt-8">Description</h3>
            <h4 className="text-xs lg:text-sm text-#A8A8A8">
              {trip.description}
            </h4>
            <div className="mt-5 flex">
              <h2 className="font-bold text-#FFAF00">
                IDR. {trip.price.toLocaleString()}{" "}
                <p className="inline text-black">/ Person</p>
              </h2>
              <div className="ml-auto grid grid-cols-3 gap-1 text-center">
                <button
                  onClick={minQty}
                  className={`${
                    quantity === 1 ? "bg-gray-300" : "bg-#FFAF00"
                  } font-bold text-white px-2 rounded-full text-lg focus:outline-none`}
                >
                  -
                </button>
                <p className="font-bold">{quantity}</p>
                <button
                  onClick={addQty}
                  className="font-bold text-white px-2 rounded-full text-lg focus:outline-none bg-#FFAF00"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-b-2 mt-3 mb-3 border-totalPrice">
            <div className="py-2 px-1 font-bold flex">
              <h2 className="w-1/2">Total</h2>
              <h2 className="w-1/2 text-right text-#FFAF00">
                IDR. {(quantity * tripPrice).toLocaleString()}
              </h2>
            </div>
          </div>
          <div className="px-2 mt-4">
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                bookingTrip(e);
                navigate("/payment");
              }}
              className="text-white text-sm flex ml-auto px-8 py-1 font-semibold rounded focus:outline-none bg-#FFAF00"
            >
              BOOK NOW
            </button>
          </div>
          {showDetailedImages && (
            <TripImagesSlide
              tripImages={[trip.cover_image, ...trip.detailed_images]}
              setShowDetailedImages={setShowDetailedImages}
            />
          )}
        </>
      )}
    </div>
  );
}
