import leaf from "../images/leaf.svg";

export default function Footer() {
  return (
    <div
      className="relative mt-32 w-full text-sm py-2 text-white text-center"
      style={{ backgroundColor: "#FFAF00" }}
    >
      Copyright @ {new Date().getFullYear()} Dewe Tour - Sabrina - DW1792A1Z.
      All rights reserved
      <div className="absolute" style={{ bottom: 0, right: 0 }}>
        <img src={leaf} alt="leaf" />
      </div>
    </div>
  );
}
