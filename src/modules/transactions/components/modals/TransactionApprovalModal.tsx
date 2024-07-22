import React from "react";
import BookingCard from "../../../payment/components/BookingCard";
import { useGetTransactionById } from "../../api";

export default function TransactionApprovalModal({
  setShowApprovalModal,
  transactionId,
}: {
  setShowApprovalModal: React.Dispatch<boolean>;
  transactionId: string;
}) {
  const { data: transaction } = useGetTransactionById(transactionId);

  return (
    <>
      <div className="fixed w-90% sm:w-3/5 md:w-1/2 lg:w-4/5 xl:w-2/3 h-4/5 lg:h-auto top-50% left-50% z-30 -translate-x-50% -translate-y-50% bg-blue-100">
        {transaction && (
          <BookingCard
            setShowApprovalModal={setShowApprovalModal}
            addedStyles="w-full xl:w-full h-full"
            transaction={transaction}
          />
        )}
      </div>
      <div
        onClick={() => setShowApprovalModal(false)}
        className="fixed z-20 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
