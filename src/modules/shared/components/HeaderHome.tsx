import { useState } from "react";
import icon from "../images/icon.svg";
import { FaUserCircle } from "react-icons/fa";
import pantai from "../images/pantai.png";

export default function HeaderHome() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div
        className="w-full text-white h-450px md:h-535.4px"
        style={{
          backgroundImage: `url(${pantai})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="px-4 md:px-8 lg:px-10 xl:px-16">
          <div className="flex">
            <img src={icon} className="w-40 sm:w-auto" />
            {localStorage.email ? (
              <div className="ml-auto flex items-center">
                <FaUserCircle
                  className="text-gray-700 bg-white rounded-full border-2 cursor-pointer"
                  style={{
                    borderColor: "#FFAF00",
                    width: "44px",
                    height: "44px",
                  }}
                />
              </div>
            ) : (
              <>
                <div className="flex items-center ml-auto mr-2">
                  <button className="border border-white px-2 py-1 md:py-1 md:px-6 font-medium text-sm rounded-md">
                    Login
                  </button>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 md:py-1 md:px-6 font-medium border text-sm rounded-md"
                    style={{
                      backgroundColor: "#FFAF00",
                      borderColor: "#FFAF00",
                    }}
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
      {/* <div
        className={`${
          showModalUser && localStorage.role === "User" ? "block" : "hidden"
        } absolute bg-white py-3 rounded font-bold shadow-md`}
        style={{ top: "75px", left: "1143px" }}
      >
        <div className="px-4">
          <Link to="/profile">
            <div className="flex py-1 px-3 cursor-pointer hover:bg-blue-200">
              <img src={user} className="mr-2" />
              <h2 className="flex items-center">Profile</h2>
            </div>
          </Link>
          <Link to={`/payment/${userId}`}>
            <div className="flex py-1 px-3 cursor-pointer hover:bg-blue-200">
              <img src={bill} className="mr-2" />
              <h2 className="">Pay</h2>
            </div>
          </Link>
        </div>
        <hr />
        <div className="px-4">
          <div
            className="flex py-1 px-3 cursor-pointer hover:bg-blue-200"
            onClick={submitLogout}
          >
            <img src={logout} className="mr-2" />
            <h2>Logout</h2>
          </div>
        </div>
        <div className="absolute" style={{ top: "-11px", right: "2px" }}>
          <img src={triangle} />
        </div>
      </div> */}

      {/* <div
        className={`${
          showModalUser && localStorage.role === "Admin" ? "block" : "hidden"
        } absolute bg-white py-3 rounded font-bold`}
        style={{ top: "75px", left: "1140px" }}
      >
        <div className="px-4">
          <Link to="/income-trip">
            <div className="flex py-1 px-3 cursor-pointer">
              <img src={journey} className="mr-2" />
              <h2 className="flex items-center">Trip</h2>
            </div>
          </Link>
        </div>
        <hr />
        <div className="px-4">
          <div
            className="flex py-1 px-3 cursor-pointer"
            onClick={submitLogout}
          >
            <img src={logout} className="mr-2" />
            <h2>Logout</h2>
          </div>
        </div>
        <div className="absolute" style={{ top: "-11px", right: "2px" }}>
          <img src={triangle} />
        </div>
      </div> */}
    </>
  );
}
