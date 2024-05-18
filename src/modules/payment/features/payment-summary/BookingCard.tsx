import { useState, useRef } from "react";
import icon2 from "../../../shared/images/icon2.svg";

export default function BookingCard() {
  const [image, setImage] = useState<{
    fileObj: File | null;
    fileUrl: string;
  }>({
    fileObj: null,
    fileUrl: "",
  });

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

  return (
    <>
      <div
        className={`${
          location.pathname === "/profile" ? "mt-8" : "mt-0"
        } bg-white rounded border-2 py-2 px-4 w-2/3`}
        style={{ borderColor: "#B7B7B7" }}
      >
        <div className="flex">
          <img src={icon2} />
          <div className="ml-auto flex items-center">
            <h2 className="text-3xl font-bold">Booking</h2>
          </div>
        </div>
        <div className="flex">
          <h4 className="ml-auto" style={{ color: "#878787" }}>
            Monday, 22 July 2024
          </h4>
        </div>
        <div className="flex">
          <div className="flex w-4/5">
            <div className="w-1/2">
              <h2 className="text-xl font-bold">6D/4N Fun Tassie Vacation</h2>

              <h4 className="text-sm" style={{ color: "#959595" }}>
                Australia
              </h4>
              <div
                // className={`${
                //   detail.status === "Approve"
                //     ? "bg-green-100"
                //     : detail.status === "Waiting Approve"
                //     ? "bg-orange-100"
                //     : "bg-red-100"
                // } mt-5 text-sm py-1 w-1/3 text-center rounded`}
                // style={
                //   detail.status === "Approve"
                //     ? { color: "#0BDC5F" }
                //     : detail.status === "Waiting Approve"
                //     ? { color: "#FF9900" }
                //     : { color: "#EC7A7A" }
                // }
                className="bg-red-100 mt-5 text-sm py-1 w-1/3 text-center rounded"
                style={{ color: "#EC7A7A" }}
              >
                Waiting Payment
              </div>
            </div>
            <div className="w-1/4">
              <h2 className="ml-auto font-bold">Date Trip</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                26 August 2024
              </h4>
              <h2 className="font-bold mt-5">Accomodation</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                Hotel 4 Nights
              </h4>
            </div>
            <div className="w-1/4">
              <h2 className="font-bold">Duration</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                6 Days 4 Nights
              </h4>
              <h2 className="font-bold mt-5">Transportation</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                Qatar Airways
              </h4>
            </div>
          </div>
          <div className="w-1/5">
            {image.fileUrl ? (
              <img
                src={image.fileUrl}
                className="w-full h-32 object-cover border"
                style={{
                  borderColor: "lightgray",
                }}
                alt="image"
              />
            ) : (
              <div
                className="flex justify-center items-center text-center h-32"
                style={{
                  backgroundColor: "lightgray",
                }}
              >
                <span
                  style={{
                    color: "grey",
                    letterSpacing: "1px",
                    fontWeight: 400,
                  }}
                  className="px-1 text-sm"
                >
                  NO PAYMENT PROOF
                </span>
              </div>
            )}
            <div className="flex">
              <button
                onClick={handleClick}
                className="border border-black rounded px-1 mt-2"
              >
                Choose File
              </button>
              <input
                ref={fileInput}
                type="file"
                onChange={handleChangeImage}
                className="hidden"
                accept="image/*"
              />
              <p className="inline-flex items-center ml-2">
                {image.fileObj && image.fileObj.name.split(".")[0].length > 10
                  ? image.fileObj.name.slice(0, 10) +
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
        <div
          className="flex border-b-2"
          style={{ borderColor: "rgba(183, 183, 183, 0.5)" }}
        >
          <div className="w-2/3 flex">
            <h2 className="w-1/4 font-bold">ID Order</h2>
            <h2 className="w-1/4 font-bold">Full Name</h2>
            <h2 className="w-1/4 font-bold">Gender</h2>
            <h2 className="w-1/4 font-bold">Phone</h2>
          </div>
        </div>
        <div
          className="border-b-2 flex"
          style={{ borderColor: "rgba(183, 183, 183, 0.5)" }}
        >
          <div className="w-2/3 flex py-1" style={{ color: "#B1B1B1" }}>
            <h2 className="w-1/4">1</h2>
            <h2 className="w-1/4">John Doe</h2>
            <h2 className="w-1/4">Male</h2>
            <h2 className="w-1/4">083896833112</h2>
          </div>
          <div className="w-1/3 flex font-bold">
            <h2 className="w-1/2">Qty</h2>
            <h2 className="w-1/2">: 1</h2>
          </div>
        </div>
        <div className="flex font-bold">
          <div className="w-1/3 ml-auto flex pt-2">
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
    </>
  );
}
