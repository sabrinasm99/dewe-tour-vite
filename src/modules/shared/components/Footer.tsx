import { useLocation } from "react-router-dom";
import leaf from "../images/leaf.svg";

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        pathname === "/payment"
          ? "relative bottom-0"
          : "relative mt-12 md:mt-32"
      }  w-full flex bg-#FFAF00`}
    >
      <div className="w-full text-xs md:text-sm py-2 text-white text-center">
        Copyright @ {new Date().getFullYear()} Dewe Tour. All rights reserved
      </div>
      <div className="absolute hidden lg:block bottom-0 right-0">
        <img src={leaf} alt="leaf" />
      </div>
    </div>
  );
}
