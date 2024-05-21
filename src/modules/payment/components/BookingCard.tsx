import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import icon2 from "../../shared/images/icon2.svg";
import PaymentConfirmation from "./PaymentConfirmation";
import PaymentProofModal from "./PaymentProofModal";

export default function BookingCard({ addedStyles }: { addedStyles?: string }) {
  const [image, setImage] = useState<{
    fileObj: File | null;
    fileUrl: string;
  }>({
    fileObj: null,
    fileUrl: "",
  });
  const [showPaymentConfirm, setShowPaymentConfirm] = useState(false);
  const [showPaymentProof, setShowPaymentProof] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("Waiting Payment");

  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInput.current?.click();
  };

  const handleChangeImage = (e: any) => {
    let file = e.target.files[0];
    if (file) {
      let changedImage = {
        fileObj: file,
        fileUrl: URL.createObjectURL(file),
      };
      setImage(changedImage);
    } else {
      setImage({
        fileObj: null,
        fileUrl: "",
      });
    }
  };

  const clickPay = () => {
    setShowPaymentConfirm(true);
  };

  return (
    <>
      <div
        className={twMerge(
          "w-90% xl:w-3/4 h-auto flex flex-col relative z-10 py-3 xl:py-0",
          addedStyles
        )}
      >
        <div
          className={`${
            location.pathname === "/profile" ? "mt-8" : "mt-0"
          } bg-white rounded border-2 py-2 px-4`}
          style={{ borderColor: "#B7B7B7" }}
        >
          <div className="flex">
            <img src={icon2} className="w-36 sm:w-auto" />
            <div className="ml-auto flex items-center">
              <h2 className="text-xl sm:text-3xl font-bold">Booking</h2>
            </div>
          </div>
          <div className="flex">
            <h4
              className="text-sm sm:text-base lg:ml-auto"
              style={{ color: "#878787" }}
            >
              Monday, 22 July 2024
            </h4>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row lg:w-4/5">
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl font-bold">6D/4N Fun Tassie Vacation</h2>

                <h4 className="text-sm" style={{ color: "#959595" }}>
                  Australia
                </h4>
                <div
                  className={`${
                    paymentStatus === "Approve"
                      ? "bg-green-100"
                      : paymentStatus === "Waiting Approve"
                      ? "bg-orange-100"
                      : "bg-red-100"
                  } mt-2 lg:mt-5 text-sm py-1 w-1/2 sm:w-1/3 text-center rounded`}
                  style={
                    paymentStatus === "Approve"
                      ? { color: "#0BDC5F" }
                      : paymentStatus === "Waiting Approve"
                      ? { color: "#FF9900" }
                      : { color: "#EC7A7A" }
                  }
                >
                  {paymentStatus}
                </div>
              </div>
              <div className="w-full flex flex-row lg:flex-col lg:w-1/4 mt-2 lg:mt-0">
                <div className="w-1/2 lg:w-full">
                  <h2 className="ml-auto font-bold">Date Trip</h2>
                  <h4 className="text-sm" style={{ color: "#959595" }}>
                    26 August 2024
                  </h4>
                </div>
                <div className="w-1/2 lg:w-full">
                  <h2 className="font-bold lg:mt-5">Accomodation</h2>
                  <h4 className="text-sm" style={{ color: "#959595" }}>
                    Hotel 4 Nights
                  </h4>
                </div>
              </div>
              <div className="w-full flex flex-row lg:flex-col lg:w-1/4 mt-1 lg:mt-0">
                <div className="w-1/2 lg:w-full">
                  <h2 className="font-bold">Duration</h2>
                  <h4 className="text-sm" style={{ color: "#959595" }}>
                    6 Days 4 Nights
                  </h4>
                </div>
                <div className="w-1/2 lg:w-full">
                  <h2 className="font-bold lg:mt-5">Transportation</h2>
                  <h4 className="text-sm" style={{ color: "#959595" }}>
                    Qatar Airways
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mt-2 lg:mt-0">
              {image.fileUrl ? (
                <div className="w-full h-44 lg:h-32 relative group">
                  <img
                    src={image.fileUrl}
                    className="w-full h-full object-cover border"
                    style={{
                      borderColor: "lightgray",
                    }}
                    alt="image"
                  />
                  <div className="absolute hover:bg-backdrop inset-0 flex justify-center items-center">
                    <button
                      onClick={() => setShowPaymentProof(true)}
                      className="absolute bg-gray-700 text-white rounded-full py-2 px-3 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="flex justify-center items-center text-center h-44 lg:h-32"
                  style={{
                    backgroundColor: "lightgray",
                  }}
                >
                  <span className="px-1 text-sm tracking-widest text-#808080">
                    NO PAYMENT PROOF
                  </span>
                </div>
              )}
              <div className="flex mt-1 lg:mt-2">
                <button
                  onClick={handleClick}
                  className="border border-black rounded w-1/3 lg:w-auto py-1 px-2 text-sm font-medium"
                >
                  {image.fileUrl ? "Change" : "Upload"} File
                </button>
                <input
                  ref={fileInput}
                  type="file"
                  onChange={handleChangeImage}
                  className="hidden"
                  accept="image/*"
                />
                <p className="inline ml-1">
                  {image.fileObj && image.fileObj.name.split(".")[0].length > 5
                    ? image.fileObj.name.slice(0, 5) +
                      "..." +
                      image.fileObj?.name.split(".")[1]
                    : image.fileObj?.name}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex">
          <h5 className="ml-auto text-xs">
            {location.pathname === "/profile"
              ? "TCK0101"
              : "upload payment proof"}
          </h5>
        </div> */}
          <div className="flex flex-row lg:flex-col mt-2 lg:mt-0">
            <div
              className="flex lg:border-b-2 w-1/2 lg:w-full lg:pb-2"
              style={{ borderColor: "rgba(183, 183, 183, 0.5)" }}
            >
              <div className="w-full lg:w-2/3 flex flex-col lg:flex-row">
                <h2 className="lg:w-1/4 font-bold">ID Order</h2>
                <h2 className="lg:w-1/4 font-bold">Full Name</h2>
                <h2 className="lg:w-1/4 font-bold">Gender</h2>
                <h2 className="lg:w-1/4 font-bold">Phone</h2>
              </div>
            </div>
            <div
              className="lg:border-b-2 flex lg:py-1 w-1/2 lg:w-full"
              style={{
                borderColor: "rgba(183, 183, 183, 0.5)",
              }}
            >
              <div
                className="flex flex-col lg:flex-row w-full lg:w-2/3"
                style={{ color: "#B1B1B1" }}
              >
                <h2 className="lg:w-1/4">1</h2>
                <h2 className="lg:w-1/4">John Doe</h2>
                <h2 className="lg:w-1/4">Male</h2>
                <h2 className="lg:w-1/4">083896833112</h2>
              </div>
              <div className="hidden w-1/3 lg:flex font-bold">
                <h2 className="w-1/2">Qty</h2>
                <h2 className="w-1/2">: 1</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row font-bold w-full lg:w-1/3 lg:ml-auto lg:pt-2 mt-2 lg:mt-0">
            <div className="lg:hidden lg:w-1/3 flex font-bold lg:ml-auto border-b-2 pb-1">
              <h2 className="w-1/2">Qty</h2>
              <h2 className="w-1/2">: 1</h2>
            </div>
            <div className="flex w-full pt-1 lg:pt-0">
              <h2 className="w-1/2">Total</h2>
              <h2 className="w-1/2">
                :{" "}
                <p className="inline" style={{ color: "#FF0000" }}>
                  IDR. 12,398,000
                </p>
              </h2>
            </div>
          </div>
          {/* <div
          className={`${
            location.pathname === "/list-transaction" &&
            detail.status === "Waiting Approve"
              ? "flex"
              : "hidden"
          } mt-5 text-white`}
        >
          <div className="ml-auto">
            <button
              // onClick={() => setShowModalApprove(false)}
              className="px-3 py-1 font-semibold rounded mr-3"
              style={{ backgroundColor: "#FF0742" }}
            >
              Cancel
            </button>
            <button
              // onClick={() => clickApprove(detail.id)}
              className="px-3 py-1 font-semibold rounded"
              style={{ backgroundColor: "#0ACF83" }}
            >
              Approve
            </button>
          </div>
        </div> */}
        </div>
        <button
          onClick={() => clickPay()}
          className={`ml-auto rounded px-16 py-2 text-white text-sm font-semibold lg:mb-10 xl:mb-0`}
          style={{ backgroundColor: "#FFAF00", marginTop: "20.5px" }}
        >
          PAY
        </button>
      </div>
      {showPaymentConfirm && (
        <PaymentConfirmation
          setShowPaymentConfirm={setShowPaymentConfirm}
          setPaymentStatus={setPaymentStatus}
        />
      )}
      {showPaymentProof && (
        <PaymentProofModal
          image={image}
          setShowPaymentProof={setShowPaymentProof}
        />
      )}
    </>
  );
}
