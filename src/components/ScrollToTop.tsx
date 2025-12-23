import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Use useLayoutEffect to scroll before browser paint
  useLayoutEffect(() => {
    // Force scroll to top with multiple methods for reliability
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  // Also handle any delayed content loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};
