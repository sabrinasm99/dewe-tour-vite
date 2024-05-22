import { Link } from "react-router-dom";
import icon from "../../images/icon.svg";
import { useState } from "react";
import RegisterModal from "../modals/RegisterModal";
import LoginModal from "../modals/LoginModal";

export default function Header() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="relative w-full text-white h-68px">
      <div className="absolute inset-0 bg-pantai blur-1.8px"></div>
      <div className="absolute px-2 xl:px-16 flex inset-0 text-white">
        <Link to="/" className="flex items-center">
          <img src={icon} className="w-40 xl:w-auto" />
        </Link>
        <div className="flex items-center ml-auto mr-2">
          <button
            onClick={() => setShowLoginModal(true)}
            className="border border-white px-3 py-1 xl:py-1 xl:px-6 font-medium text-sm rounded-md"
          >
            Login
          </button>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setShowRegisterModal(true)}
            className="px-3 py-1 xl:py-1 xl:px-6 font-medium border text-sm rounded-md bg-#FFAF00 border-#FFAF00"
          >
            Register
          </button>
        </div>
      </div>
      {showRegisterModal && (
        <RegisterModal setShowRegisterModal={setShowRegisterModal} />
      )}
      {showLoginModal && (
        <LoginModal
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
        />
      )}
    </div>
  );
}
