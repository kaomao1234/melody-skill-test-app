import React, { useState, useCallback, useEffect } from "react";

const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (!isLocked) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);

  const toggle = useCallback(() => setIsLocked((prev) => !prev), []);

  return [isLocked, toggle] as const;
};
export { useScrollLock };
