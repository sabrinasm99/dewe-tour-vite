import styles from "./layout.module.css";
import { LayoutProps } from "./types";
import hibiscus from "../images/hibiscus.svg";
import palm from "../images/palm.svg";

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <div className={styles["app-layout"]}>
      {children}
      <div className="absolute right-0 top-24%">
        <img src={hibiscus} alt="hibiscus" />
      </div>
      <div className="absolute left-0 top-40%">
        <img src={palm} alt="palm" />
      </div>
    </div>
  );
}
