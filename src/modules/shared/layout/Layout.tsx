import Footer from "../components/Footer";
import Header from "../components/Header";
import BaseLayout from "./BaseLayout";
import { LayoutProps } from "./types";

export default function Layout({ children }: LayoutProps) {
  return (
    <BaseLayout>
      <Header />
      <div>{children}</div>
      <Footer />
    </BaseLayout>
  );
}
