import user from "../../images/user.svg";
import bill from "../../images/bill.svg";
import triangle from "../../images/triangle.svg";
import logout from "../../images/logout.svg";
import { useNavigate } from "react-router-dom";

export default function CustomerDropdown({
  showCustomerDropdown,
  setShowCustomerDropdown,
}: {
  showCustomerDropdown: boolean;
  setShowCustomerDropdown: React.Dispatch<boolean>;
}) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`absolute bg-white py-3 rounded font-bold shadow-md text-black z-30 right-0 w-36`}
        style={{ top: "75px" }}
      >
        <div className="border-b-2">
          <div
            onClick={() => {
              setShowCustomerDropdown(!showCustomerDropdown);
              navigate(`/profile`);
            }}
            className="flex py-1 px-5 cursor-pointer hover:bg-gray-200"
          >
            <img src={user} className="mr-2" />
            <h2 className="flex items-center">Profile</h2>
          </div>
          <div
            onClick={() => {
              setShowCustomerDropdown(!showCustomerDropdown);
              navigate(`/payment/1`);
            }}
            className="flex py-1 px-5 cursor-pointer hover:bg-gray-200"
          >
            <img src={bill} className="mr-2" />
            <h2 className="">Pay</h2>
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
        onClick={() => setShowCustomerDropdown(!showCustomerDropdown)}
        className="fixed z-20 top-0 left-0 h-full w-full"
      />
    </>
  );
}
