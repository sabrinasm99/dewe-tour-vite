import React from "react";
import styles from "./home-layout.module.css";
import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";
import hibiscus from "../images/hibiscus.svg";
import palm from "../images/palm.svg";

type LayoutProps = {
  children: React.ReactNode;
};
export default function HomeLayout({ children }: LayoutProps) {
  return (
    <div className={styles["app-layout"]}>
      <HeaderHome />
      <div className={styles["app-content"]}>{children}</div>
      <Footer />
      <div className="absolute" style={{ top: "24%", right: 0 }}>
        <img src={hibiscus} alt="hibiscus" />
      </div>
      <div className="absolute" style={{ top: "40%", left: 0 }}>
        <img src={palm} alt="palm" />
      </div>
    </div>
  );
}
