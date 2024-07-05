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
      <div className="fixed w-2/3 top-50% left-50% z-30 -translate-x-50% -translate-y-50%">
        {transaction && (
          <BookingCard
            setShowApprovalModal={setShowApprovalModal}
            addedStyles="w-full xl:w-full"
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
