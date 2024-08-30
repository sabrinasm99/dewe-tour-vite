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
      <div className="fixed z-20 top-50% left-50% -translate-x-50% -translate-y-50% rounded-md shadow-modal w-350px p-4 bg-white">
        {imageUrl ? (
          <img src={imageUrl} className="w-full" alt="image" />
        ) : (
          <div className="w-full rounded flex justify-center items-center text-center bg-#D3D3D3 h-16em">
            <span
              style={{
                letterSpacing: "3px",
                fontWeight: 400,
              }}
              className="px-1 text-2xl text-#808080"
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
        className="fixed z-10 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
