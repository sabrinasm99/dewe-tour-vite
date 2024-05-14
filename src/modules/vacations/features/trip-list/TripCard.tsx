type TripProps = {
  id: number;
  img: string;
  title: string;
  price: string;
  country: string;
  code: string;
};

export default function TripCard({ trip }: { trip: TripProps }) {
  return (
    <div
      key={trip.id}
      //   onClick={() => {
      //     clickDetail(val.id);
      //   }}
      className="bg-white rounded-md p-2 relative cursor-pointer"
    >
      <img src={trip.img} alt={trip.img} className="w-full" />
      <h4 className="text-black font-medium mt-1">{trip.title}</h4>
      <div className="flex mt-2">
        <h4 className="font-medium w-1/2" style={{ color: "#FFAF00" }}>
          {/* IDR. {trip.price.toLocaleString()} */}
          {trip.price}
        </h4>
        <h4
          className="font-medium w-1/2 text-sm text-right"
          style={{ color: "#878787" }}
        >
          {trip.country}
        </h4>
      </div>
      <div
        className="absolute bg-white text-black font-bold rounded-sm text-xs py-1 px-2"
        style={{ right: "1.4%", top: "9%" }}
      >
        {trip.code}
      </div>
    </div>
  );
}
