import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = (disabled?: boolean) => {
  const { pathname } = useLocation();

  const scrollHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    !disabled && scrollHandler();
  }, [pathname]);

  return scrollHandler;
};
