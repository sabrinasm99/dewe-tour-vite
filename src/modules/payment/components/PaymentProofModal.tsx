import React from "react";

export default function PaymentProofModal({
  imageUrl,
  setShowPaymentProof,
}: {
  imageUrl: string;
  setShowPaymentProof: React.Dispatch<boolean>;
}) {
  const closeModal = () => {
    setShowPaymentProof(false);
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 200,
          transform: "translate(-50%,-50%)",
          left: "50%",
          top: "50%",
          width: "350px",
          boxShadow: "1px 1px 8px black",
        }}
        className="rounded-md p-4 bg-white"
      >
        {imageUrl ? (
          <img src={imageUrl} className="w-full" alt="image" />
        ) : (
          <div
            className="w-full rounded flex justify-center items-center text-center"
            style={{
              backgroundColor: "lightgray",
              height: "16em",
            }}
          >
            <span
              style={{
                color: "grey",
                letterSpacing: "3px",
                fontWeight: 400,
              }}
              className="px-1 text-2xl"
            >
              PAYMENT PROOF
            </span>
          </div>
        )}
        <div className="flex text-white mt-4">
          <button
            onClick={() => setShowPaymentProof(false)}
            className="px-3 py-1 font-semibold rounded focus:outline-none ml-auto"
            style={{ backgroundColor: "#FF0742" }}
          >
            Close
          </button>
        </div>
      </div>
      <div
        onClick={closeModal}
        style={{
          position: "fixed",
          zIndex: 199,
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
    </>
  );
}
