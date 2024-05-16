import leaf from "../images/leaf.svg";

export default function Footer() {
  return (
    <div className="relative mt-12 md:mt-32 w-full flex bg-#FFAF00">
      <div className="w-full text-xs md:text-sm py-2 text-white text-center">
        Copyright @ {new Date().getFullYear()} Dewe Tour - Sabrina - DW1792A1Z.
        All rights reserved
      </div>
      <div className="absolute hidden md:block bottom-0 right-0">
        <img src={leaf} alt="leaf" />
      </div>
    </div>
  );
}
