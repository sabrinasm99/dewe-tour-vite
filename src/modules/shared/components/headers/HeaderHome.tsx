import { useEffect, useState } from "react";
import icon from "../../images/icon.svg";
import { FaUserCircle } from "react-icons/fa";
import RegisterModal from "../modals/RegisterModal";
import LoginModal from "../modals/LoginModal";
import CustomerDropdown from "../drop-down/CustomerDropdown";
import AdminDropdown from "../drop-down/AdminDropdown";
import { useCheckIsAdmin } from "../../../users/api/checkIsAdmin";
import { useUserStore } from "../../../../store/useUserStore";

export default function HeaderHome() {
  const [search, setSearch] = useState("");
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

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="w-full text-white h-450px md:h-535.4px bg-pantai bg-no-repeat bg-cover">
        <div className="px-4 md:px-8 lg:px-10 xl:px-16">
          <div className="flex">
            <img src={icon} className="w-40 sm:w-auto" />
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
          <div className="mt-5 md:mt-14 lg:mt-10 xl:mt-5">
            <h1 className="tracking-wide font-bold text-40px sm:text-50px md:text-58px lg:text-60px">
              Explore
            </h1>
            <h2 className="font-thin text-40px sm:text-50px md:text-58px lg:text-60px">
              your amazing city together
            </h2>
          </div>
          <div className="mt-10">
            <h1 className="text-15px md:text-17px">
              Find great places to holiday
            </h1>
            <div className="flex mt-2 h-10">
              <input
                className="bg-white rounded-l-md text-gray-800 focus:outline-none pl-3 w-80% md:w-90%"
                type="search"
                value={search}
                name="search"
                onChange={handleSearch}
              />
              <button className="rounded-r-md flex items-center justify-center font-medium text-sm md:text-lg focus:outline-none bg-#FFAF00 w-20% md:w-10%">
                Search
              </button>
            </div>
          </div>
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
    </>
  );
}
