import logout from "../../images/logout.svg";
import journey from "../../images/journey.svg";
import triangle from "../../images/triangle.svg";
import { useNavigate } from "react-router-dom";

export default function AdminDropdown({
  showAdminDropdown,
  setShowAdminDropdown,
}: {
  showAdminDropdown: boolean;
  setShowAdminDropdown: React.Dispatch<boolean>;
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute bg-white py-3 rounded font-bold shadow-md text-black z-30 right-0 w-36 top-60px sm:top-75px">
        <div className="border-b-2">
          <div
            onClick={() => {
              setShowAdminDropdown(!showAdminDropdown);
              navigate(`/admin-trip-list`);
            }}
            className="flex py-1 px-5 cursor-pointer hover:bg-gray-200"
          >
            <img src={journey} className="mr-2" />
            <h2 className="">Trip</h2>
          </div>
        </div>
        <div
          className="flex py-1 px-5 cursor-pointer hover:bg-gray-200"
          // onClick={submitLogout}
        >
          <img src={logout} className="mr-2" />
          <h2>Logout</h2>
        </div>
        <div className="absolute" style={{ top: "-11px", right: "2px" }}>
          <img src={triangle} />
        </div>
      </div>
      <div
        onClick={() => setShowAdminDropdown(!showAdminDropdown)}
        className="fixed z-20 top-0 left-0 h-full w-full"
      />
    </>
  );
}
