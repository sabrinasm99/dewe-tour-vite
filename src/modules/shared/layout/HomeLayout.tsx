import styles from "./layout.module.css";
import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";
import { LayoutProps } from "./types";
import BaseLayout from "./BaseLayout";

export default function HomeLayout({ children }: LayoutProps) {
  return (
    <BaseLayout>
      <HeaderHome />
      <div className={styles["home-content"]}>{children}</div>
      <Footer />
    </BaseLayout>
  );
}
