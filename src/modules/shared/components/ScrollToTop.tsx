import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LayoutProps } from "../layout/types";

const ScrollToTop = ({ children }: LayoutProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
