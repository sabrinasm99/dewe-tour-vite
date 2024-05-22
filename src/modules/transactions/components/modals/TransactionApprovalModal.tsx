import React from "react";
import BookingCard from "../../../payment/components/BookingCard";

export default function TransactionApprovalModal({
  setShowApprovalModal,
}: {
  setShowApprovalModal: React.Dispatch<boolean>;
}) {
  return (
    <>
      <div className="fixed w-2/3 top-50% left-50% z-30 -translate-x-50% -translate-y-50%">
        <BookingCard addedStyles="w-full xl:w-full" />
      </div>
      <div
        onClick={() => setShowApprovalModal(false)}
        className="fixed z-20 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
