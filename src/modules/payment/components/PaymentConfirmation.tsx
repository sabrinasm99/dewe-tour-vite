import React from "react";

export default function PaymentConfirmation({
  setShowPaymentConfirm,
}: {
  setShowPaymentConfirm: React.Dispatch<boolean>;
}) {
  const clickHere = () => {
    setShowPaymentConfirm(false);
  };
  return (
    <>
      <div
        className={`absolute bg-white rounded px-10 py-1 text-center`}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, 0)",
          zIndex: 200,
        }}
      >
        <h3>Your payment will be confirmed within 1 x 24 hours</h3>
        <h3>
          To see orders click{" "}
          <p onClick={clickHere} className="inline font-bold cursor-pointer">
            Here
          </p>{" "}
          thank you
        </h3>
      </div>
      <div
        onClick={clickHere}
        className="fixed z-20 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
