import React, { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import icon2 from "../../shared/images/icon2.svg";
import PaymentConfirmation from "./PaymentConfirmation";
import PaymentProofModal from "./PaymentProofModal";
import { useLocation } from "react-router-dom";
import { usePayForTrip } from "../../transactions/api";
import { useUploadPaymentProof } from "../../transactions/api";
import { TransactionProps } from "../../shared/types";

export default function BookingCard({
  addedStyles,
  transaction,
  setShowApprovalModal,
}: {
  addedStyles?: string;
  transaction: TransactionProps;
  setShowApprovalModal?: React.Dispatch<boolean>;
}) {
  const [image, setImage] = useState<{
    fileObj: File | null;
    fileUrl: string;
  }>({
    fileObj: null,
    fileUrl: "",
  });
  const [showPaymentConfirm, setShowPaymentConfirm] = useState(false);
  const [showPaymentProof, setShowPaymentProof] = useState(false);

  const { pathname } = useLocation();

  const payForTripMutation = usePayForTrip();
  const uploadPaymentProofMutation = useUploadPaymentProof();

  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInput.current?.click();
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      let changedImage = {
        fileObj: file,
        fileUrl: URL.createObjectURL(file),
      };
      setImage(changedImage);

      const formData = new FormData();
      formData.append("attachment", file);

      uploadPaymentProofMutation.mutate({ id: transaction.id, data: formData });
    } else {
      setImage({
        fileObj: null,
        fileUrl: "",
      });
    }
  };

  const clickPay = (id: string) => {
    setShowPaymentConfirm(true);
    payForTripMutation.mutate(id);
  };

  const imageNameGenerator = (image: string | undefined) => {
    if (!image) return "";

    if (image.includes("/")) {
      if (!image.split("/").pop()) {
        return "";
      }
      return image.split("/").pop()?.slice(0, 5) + "..." + image.split(".")[1];
    } else {
      return image.split(".")[0].length > 5
        ? image.slice(0, 5) + "..." + image.split(".")[1]
        : image;
    }
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
          } bg-white rounded border-2 py-2 px-4 border-#B7B7B7`}
        >
          <div className="flex">
            <img src={icon2} className="w-36 sm:w-auto" />
            <div className="ml-auto flex items-center">
              <h2 className="text-xl sm:text-3xl font-bold">Booking</h2>
            </div>
          </div>
          <div className="flex">
            <h4 className="text-sm sm:text-base lg:ml-auto text-#878787">
              {transaction.booking_date}
            </h4>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row lg:w-4/5">
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl font-bold">{transaction.trip.title}</h2>

                <h4 className="text-sm text-#959595">
                  {transaction.trip.country.name}
                </h4>
                <div
                  className={`${
                    transaction.status === "approve"
                      ? "bg-green-100 text-#0BDC5F"
                      : transaction.status === "waiting approve"
                      ? "bg-orange-100 text-#FF9900"
                      : "bg-red-100 text-#EC7A7A"
                  } mt-2 lg:mt-5 text-sm py-1 w-1/2 sm:w-1/3 text-center rounded capitalize`}
                >
                  {transaction.status}
                </div>
              </div>
              <div className="w-full flex flex-row lg:flex-col lg:w-1/4 mt-2 lg:mt-0">
                <div className="w-1/2 lg:w-full">
                  <h2 className="ml-auto font-bold">Date Trip</h2>
                  <h4 className="text-sm text-#959595">
                    {transaction.trip.date}
                  </h4>
                </div>
                <div className="w-1/2 lg:w-full">
                  <h2 className="font-bold lg:mt-5">Accomodation</h2>
                  <h4 className="text-sm text-#959595">
                    {transaction.trip.accomodation}
                  </h4>
                </div>
              </div>
              <div className="w-full flex flex-row lg:flex-col lg:w-1/4 mt-1 lg:mt-0">
                <div className="w-1/2 lg:w-full">
                  <h2 className="font-bold">Duration</h2>
                  <h4 className="text-sm text-#959595">
                    {transaction.trip.days} Days {transaction.trip.nights}{" "}
                    Nights
                  </h4>
                </div>
                <div className="w-1/2 lg:w-full">
                  <h2 className="font-bold lg:mt-5">Transportation</h2>
                  <h4 className="text-sm text-#959595">
                    {transaction.trip.transportation}
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mt-2 lg:mt-0">
              {image.fileUrl || transaction.attachment ? (
                <div className="w-full h-44 lg:h-32 relative group">
                  <img
                    src={image.fileUrl || transaction.attachment}
                    className="w-full h-full object-cover border border-#D3D3D3"
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
                <div className="flex justify-center items-center text-center h-44 lg:h-32 bg-#D3D3D3">
                  <span className="px-1 text-sm tracking-widest text-#808080">
                    NO PAYMENT PROOF
                  </span>
                </div>
              )}
              <div className="flex mt-1 lg:mt-2">
                <button
                  onClick={handleClick}
                  className={`${
                    pathname === "/transaction-list" ||
                    transaction.status !== "waiting payment"
                      ? "hidden"
                      : "block"
                  } border border-black rounded w-1/3 lg:w-auto py-1 px-2 text-sm font-medium`}
                >
                  {image.fileUrl || transaction.attachment
                    ? "Change"
                    : "Upload"}{" "}
                  File
                </button>
                <input
                  ref={fileInput}
                  type="file"
                  onChange={handleChangeImage}
                  className="hidden"
                  accept="image/*"
                />
                <p className="inline ml-1">
                  {imageNameGenerator(
                    transaction.attachment || image.fileObj?.name
                  )}
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
            <div className="flex lg:border-b-2 w-1/2 lg:w-full lg:pb-2 border-bookingCard">
              <div className="w-full lg:w-2/3 flex flex-col lg:flex-row">
                <h2 className="lg:w-1/4 font-bold">ID Order</h2>
                <h2 className="lg:w-1/4 font-bold">Full Name</h2>
                <h2 className="lg:w-1/4 font-bold">Gender</h2>
                <h2 className="lg:w-1/4 font-bold">Phone</h2>
              </div>
            </div>
            <div className="lg:border-b-2 flex lg:py-1 w-1/2 lg:w-full border-bookingCard">
              <div className="flex flex-col lg:flex-row w-full lg:w-2/3 text-#B1B1B1">
                <h2 className="lg:w-1/4">1</h2>
                <h2 className="lg:w-1/4">{transaction.customer.name}</h2>
                <h2 className="lg:w-1/4 capitalize">
                  {transaction.customer.gender}
                </h2>
                <h2 className="lg:w-1/4">{transaction.customer.phone}</h2>
              </div>
              <div className="hidden w-1/3 lg:flex font-bold">
                <h2 className="w-1/2">Qty</h2>
                <h2 className="w-1/2">: {transaction.quantity}</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row font-bold w-full lg:w-1/3 lg:ml-auto lg:pt-2 mt-2 lg:mt-0">
            <div className="lg:hidden lg:w-1/3 flex font-bold lg:ml-auto border-b-2 pb-1">
              <h2 className="w-1/2">Qty</h2>
              <h2 className="w-1/2">: {transaction.quantity}</h2>
            </div>
            <div className="flex w-full pt-1 lg:pt-0">
              <h2 className="w-1/2">Total</h2>
              <h2 className="w-1/2">
                :{" "}
                <p className="inline text-#FF0000">
                  IDR.{" "}
                  {new Intl.NumberFormat().format(
                    transaction.total_payment ? transaction.total_payment : 0
                  )}
                </p>
              </h2>
            </div>
          </div>
          <div
            className={`${
              pathname === "/transaction-list" &&
              transaction.status === "waiting approve"
                ? "flex"
                : "hidden"
            } mt-5 text-white`}
          >
            <div className="ml-auto">
              <button
                onClick={() => {
                  if (setShowApprovalModal) {
                    setShowApprovalModal(false);
                  }
                }}
                className="px-3 py-1 font-semibold rounded mr-3 bg-#FF0742"
              >
                Cancel
              </button>
              <button
                // onClick={() => clickApprove(detail.id)}
                className="px-3 py-1 font-semibold rounded bg-#0ACF83"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => clickPay(transaction.id)}
          className={`${
            pathname === "/transaction-list" ||
            transaction.status !== "waiting payment"
              ? "hidden"
              : "block"
          } ml-auto rounded px-16 py-2 text-white text-sm font-semibold lg:mb-10 xl:mb-0 bg-#FFAF00 mt-20.5px`}
        >
          PAY
        </button>
      </div>
      {showPaymentConfirm && (
        <PaymentConfirmation setShowPaymentConfirm={setShowPaymentConfirm} />
      )}
      {showPaymentProof && (
        <PaymentProofModal
          imageUrl={image.fileUrl || transaction.attachment}
          setShowPaymentProof={setShowPaymentProof}
        />
      )}
    </>
  );
}
