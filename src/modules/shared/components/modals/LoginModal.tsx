import React from "react";
import hibiscusmodal from "../../images/hibiscusmodal.svg";
import palmmodal from "../../images/palmmodal.svg";

export default function LoginModal({
  setShowLoginModal,
  setShowRegisterModal,
}: {
  setShowLoginModal: React.Dispatch<boolean>;
  setShowRegisterModal: React.Dispatch<boolean>;
}) {
  const clickHere = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };
  return (
    <>
      <div className="fixed rounded-md py-3 px-6 z-30 bg-white top-50% left-50% -translate-x-50% -translate-y-50% w-350px shadow-modal">
        <h1 className="text-black text-3xl font-bold mt-8 text-center">
          Login
        </h1>
        <div className="mt-12">
          <label className="text-black block font-bold">Email</label>
          <input
            className="text-gray-800 w-full border pl-1 focus:outline-none rounded bg-#D2D2D240"
            type="text"
            name="email"
            // value={inputLogin.email}
            // onChange={handleChangeLogin}
          />
        </div>
        <div className="mt-5">
          <label className="text-black block font-bold">Password</label>
          <input
            className="text-gray-800 w-full border pl-1 focus:outline-none rounded bg-#D2D2D240"
            type="password"
            name="password"
            // value={inputLogin.password}
            // onChange={handleChangeLogin}
          />
        </div>
        <div className="mt-8">
          <button
            // onClick={submitLogin}
            className="w-full p-1 px-3 bg-purple-800 text-white focus:outline-none border rounded font-bold"
            style={{ backgroundColor: "#FFAF00", borderColor: "#FFAF00" }}
          >
            Login
          </button>
        </div>
        <h3 className="text-sm mt-3 font-light" style={{ color: "#B1B1B1" }}>
          Don't have an account? Click{" "}
          <p onClick={clickHere} className="font-bold inline cursor-pointer">
            Here
          </p>
        </h3>
        <div className="absolute" style={{ top: 0, left: 0 }}>
          <img src={palmmodal} />
        </div>
        <div className="absolute" style={{ top: 0, right: 0 }}>
          <img src={hibiscusmodal} className="rounded-md" />
        </div>
      </div>
      <div
        onClick={() => setShowLoginModal(false)}
        className="fixed z-20 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
