import { useEffect } from "react";

function useOutsideClick(
  primaryRef: React.RefObject<HTMLDivElement>,
  isSecondModalOpen: boolean,
  isThirdModalOpen: boolean,
  callback: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (primaryRef.current?.contains(event.target as Node)) {
        return;
      }
      if (isSecondModalOpen) {
        return;
      }

      if (isThirdModalOpen) {
        return;
      }
      callback();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSecondModalOpen, primaryRef, callback]);

  useEffect(() => {
    if (isSecondModalOpen) {
      return;
    }

    if (isThirdModalOpen) {
      return;
    }

    callback();
  }, [isSecondModalOpen, isThirdModalOpen]);
}

export { useOutsideClick };
