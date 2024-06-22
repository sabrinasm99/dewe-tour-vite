import { useNavigate, useParams } from "react-router-dom";
import { tripList } from "../../../../fakedata";
import hotel from "../../../shared/images/hotel.svg";
import meal from "../../../shared/images/meal.svg";
import time from "../../../shared/images/time.svg";
import plane from "../../../shared/images/plane.svg";
import calendar from "../../../shared/images/calendar.svg";
import photo1 from "../../../shared/images/sydneydetail.png";
import photo2 from "../../../shared/images/sydney1.png";
import photo3 from "../../../shared/images/sydney2.png";
import photo4 from "../../../shared/images/sydney3.png";
import { useState } from "react";

export default function DetailTrip() {
  const { id } = useParams();
  const navigate = useNavigate();

  const trip = tripList.find((trip) => trip.id === Number(id));

  if (!trip) return;

  const [input, setInput] = useState({
    qty: 1,
    totalPrice: trip.price,
  });

  const addQty = () => {
    const newInput = {
      ...input,
      qty: input.qty + 1,
      totalPrice: input.totalPrice + trip.price,
    };
    setInput(newInput);
  };

  const minQty = () => {
    const newInput = {
      ...input,
      qty: input.qty > 1 ? input.qty - 1 : input.qty,
      totalPrice:
        input.qty > 1 ? input.totalPrice - trip.price : input.totalPrice,
    };
    setInput(newInput);
  };

  const days = trip.title.split(" ")[0].split("/")[0].split("")[0];
  const nights = trip.title.split(" ")[0].split("/")[1].split("")[0];

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-32 xl:px-56 relative z-10">
      <div className="px-2">
        <h1 className="text-3xl font-bold mt-10">{trip.title}</h1>
        <h4 className="font-semibold text-#A8A8A8">{trip.country}</h4>
        <img src={photo1} className="w-full mt-5" />
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="w-full">
            <img src={photo2} className="w-full" />
          </div>
          <div className="w-full">
            <img src={photo3} className="w-full" />
          </div>
          <div className="w-full relative">
            <img src={photo4} className="w-full" />
            <div className="absolute text-lg text-white font-bold top-50% left-50% -translate-x-50% -translate-y-50%">
              +5
            </div>
          </div>
        </div>
        <h3 className="mt-6 text-sm font-bold">Information Trip</h3>
        <div className="mt-3 grid grid-cols-3 md:grid-cols-5 gap-2">
          <div>
            <h4 className="text-xs font-bold text-#A8A8A8">Accomodation</h4>
            <div className="flex mt-1">
              <img src={hotel} className="mr-2" />
              <h5 className="font-bold text-xs lg:text-sm">Hotel 4 Nights</h5>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-#A8A8A8">Transportation</h4>
            <div className="flex mt-1">
              <img src={plane} className="mr-2" />
              <h5 className="font-bold text-xs lg:text-sm">Qatar Airways</h5>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-#A8A8A8">Eat</h4>
            <div className="flex mt-1">
              <img src={meal} className="mr-2" />
              <h5 className="font-bold text-xs lg:text-sm">
                Included as Itinerary
              </h5>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-#A8A8A8">Duration</h4>
            <div className="flex mt-1">
              <img src={time} className="mr-2" />
              <h5 className="font-bold text-xs lg:text-sm">
                {days} Days {nights} Nights
              </h5>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-#A8A8A8">Date Trip</h4>
            <div className="flex mt-1">
              <img src={calendar} className="mr-2" />
              <h5 className="font-bold text-xs lg:text-sm">26 August 2024</h5>
            </div>
          </div>
        </div>
        <h3 className="font-bold text-sm mt-8">Description</h3>
        <h4 className="text-xs lg:text-sm text-#A8A8A8">
          <p className="font-bold inline">Lorem Ipsum</p> is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
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
                input.qty === 1 ? "bg-gray-300" : "bg-#FFAF00"
              } font-bold text-white px-2 rounded-full text-lg focus:outline-none`}
            >
              -
            </button>
            <p className="font-bold">{input.qty}</p>
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
            IDR. {input.totalPrice.toLocaleString()}
          </h2>
        </div>
      </div>
      <div className="px-2 mt-4">
        <button
          onClick={() => navigate(`/payment/${1}`)}
          className="text-white text-sm flex ml-auto px-8 py-1 font-semibold rounded focus:outline-none bg-#FFAF00"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
