import { Link } from "react-router-dom";
import icon from "../../images/icon.svg";
import { useEffect, useState } from "react";
import RegisterModal from "../modals/RegisterModal";
import LoginModal from "../modals/LoginModal";
import { FaUserCircle } from "react-icons/fa";
import CustomerDropdown from "../drop-down/CustomerDropdown";
import AdminDropdown from "../drop-down/AdminDropdown";
import { useCheckIsAdmin } from "../../../users/api/checkIsAdmin";
import { useUserStore } from "../../../../store/useUserStore";

export default function Header() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const userId = useUserStore((state: any) => state.userId);
  const {
    data: isAdmin,
    isLoading: isLoadingCheckIsAdmin,
    isError: isErrorCheckIsAdmin,
    refetch: refetchCheckIsAdmin,
  } = useCheckIsAdmin();

  useEffect(() => {
    refetchCheckIsAdmin();
  }, [userId]);

  return (
    <div className="relative w-full text-white h-68px">
      <div className="absolute inset-0 bg-pantai blur-1.8px"></div>
      <div className="absolute px-2 xl:px-16 flex inset-0 text-white">
        <Link to="/" className="flex items-center">
          <img src={icon} className="w-40 xl:w-auto" />
        </Link>
        {!isLoadingCheckIsAdmin && !isErrorCheckIsAdmin && userId && (
          <div className="relative ml-auto flex items-center">
            <FaUserCircle
              onClick={() =>
                isAdmin
                  ? setShowAdminDropdown(!showAdminDropdown)
                  : setShowCustomerDropdown(!showCustomerDropdown)
              }
              className="text-gray-700 bg-white rounded-full border-2 cursor-pointer border-#FFAF00 w-40px h-40px sm:w-44px sm:h-44px"
            />
            {showCustomerDropdown && (
              <CustomerDropdown
                showCustomerDropdown={showCustomerDropdown}
                setShowCustomerDropdown={setShowCustomerDropdown}
              />
            )}
            {showAdminDropdown && (
              <AdminDropdown
                showAdminDropdown={showAdminDropdown}
                setShowAdminDropdown={setShowAdminDropdown}
              />
            )}
          </div>
        )}
        {(isErrorCheckIsAdmin || !userId) && (
          <>
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
          </>
        )}
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
