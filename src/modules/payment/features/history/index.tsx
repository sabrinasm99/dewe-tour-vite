import BookingCard from "../../components/BookingCard";

export default function PaymentHistories() {
  const status = true;
  return (
    <div className="mt-20 flex w-full justify-center">
      <div className="w-90% md:w-85% lg:w-80% xl:w-2/3">
        <h1 className="text-2xl font-bold">History Trip</h1>
        {status ? (
          <BookingCard addedStyles="w-full xl:w-full" />
        ) : (
          <div className="mt-8 text-center">No History Trip</div>
        )}
      </div>
    </div>
  );
}
