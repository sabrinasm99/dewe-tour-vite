import { TransactionProps } from "../../../shared/types";
import { useGetTransactionsByUserId } from "../../../transactions/api";
import BookingCard from "../../components/BookingCard";

export default function PaymentSummary() {
  const { data: transactions } = useGetTransactionsByUserId();

  return (
    <div className="grow flex flex-col-reverse justify-center items-center">
      {transactions && transactions.length ? (
        transactions.map((transaction: TransactionProps) => (
          <BookingCard
            key={transaction.id}
            transaction={transaction}
            addedStyles="my-10"
          />
        ))
      ) : (
        <p className="uppercase text-2xl tracking-wider text-gray-700">
          No Payment History
        </p>
      )}
    </div>
  );
}
