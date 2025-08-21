import { useState, useEffect, RefObject } from "react";

export const useHeaderHeight = (elementRef: RefObject<HTMLElement | null>) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (elementRef.current) {
        setHeaderHeight(elementRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [elementRef]);

  return headerHeight;
}