import React from "react";
import hibiscusmodal from "../../images/hibiscusmodal.svg";
import palmmodal from "../../images/palmmodal.svg";

export default function RegisterModal({
  setShowRegisterModal,
}: {
  setShowRegisterModal: React.Dispatch<boolean>;
}) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 200,
          transform: "translate(-50%,-50%)",
          backgroundColor: "white",
          left: "50%",
          top: "50%",
          width: "350px",
          boxShadow: "1px 1px 8px black",
        }}
        className="rounded-md py-3 px-6"
      >
        <h1 className="text-black text-3xl font-bold mt-8 text-center">
          Register
        </h1>
        <div className="mt-6">
          <label className="text-black block font-bold">Full Name</label>
          <input
            className="text-gray-800 w-full border pl-1 focus:outline-none rounded bg-#D2D2D240"
            type="text"
            name="fullName"
            // value={inputRegister.fullName}
            // onChange={handleChangeRegister}
          />
          {/* <h3 className="text-red-600 text-sm">{warning}</h3> */}
        </div>
        <div className="mt-4">
          <label className="text-black block font-bold">Email</label>
          <input
            className="text-gray-800 w-full border pl-1 focus:outline-none rounded bg-#D2D2D240"
            type="email"
            name="email"
            // value={inputRegister.email}
            // onChange={handleChangeRegister}
          />
        </div>
        <div className="mt-4">
          <label className="text-black block font-bold">Password</label>
          <input
            className="text-gray-800 w-full border pl-1 focus:outline-none rounded bg-#D2D2D240"
            type="password"
            name="password"
            // value={inputRegister.password}
            // onChange={handleChangeRegister}
          />
        </div>
        <div className="mt-4">
          <label className="text-black block font-bold">Phone</label>
          <input
            className="text-gray-800 w-full border pl-1 focus:outline-none rounded bg-#D2D2D240"
            type="number"
            name="phone"
            // value={inputRegister.phone}
            // onChange={handleChangeRegister}
          />
        </div>
        <div className="mt-4">
          <label className="text-black block font-bold">Gender</label>
          <select
            name="gender"
            // value={inputRegister.gender}
            className="text-gray-800 w-full border pl-1 focus:outline-none rounded bg-#D2D2D240"
            // onChange={handleChangeRegister}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="text-black block font-bold">Address</label>
          <textarea
            className="text-gray-800 w-full border pl-1 focus:outline-none rounded max-h-100px bg-#D2D2D240"
            name="address"
            // value={inputRegister.address}
            // onChange={handleChangeRegister}
          />
        </div>
        <div className="mt-8 mb-3">
          <button
            // onClick={submitRegister}
            className="w-full p-1 px-3 bg-purple-800 text-white focus:outline-none border rounded font-bold"
            style={{ backgroundColor: "#FFAF00", borderColor: "#FFAF00" }}
          >
            Register
          </button>
        </div>
        <div className="absolute" style={{ top: 0, left: 0 }}>
          <img src={palmmodal} />
        </div>
        <div className="absolute" style={{ top: 0, right: 0 }}>
          <img src={hibiscusmodal} className="rounded-md" />
        </div>
      </div>
      <div
        onClick={() => setShowRegisterModal(false)}
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
