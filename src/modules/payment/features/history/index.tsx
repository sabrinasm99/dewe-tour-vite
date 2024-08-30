import { TransactionProps } from "../../../shared/types";
import { useGetApprovedTransactionsByUserId } from "../../../transactions/api";
import BookingCard from "../../components/BookingCard";

export default function PaymentHistories() {
  const { data: transactions } = useGetApprovedTransactionsByUserId();

  return (
    <div className="grow mt-14 flex w-full justify-center">
      <div className="w-90% md:w-85% lg:w-80% xl:w-2/3">
        <h1 className="text-2xl font-bold">Trip History</h1>
        {transactions && transactions.length ? (
          transactions.map((transaction: TransactionProps) => (
            <BookingCard
              key={transaction.id}
              addedStyles="w-full xl:w-full"
              transaction={transaction}
            />
          ))
        ) : (
          <p className="mt-8 text-center text-xl tracking-wider text-gray-700 uppercase">
            No Trip History
          </p>
        )}
      </div>
    </div>
  );
}
