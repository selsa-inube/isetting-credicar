import { useEffect } from "react";

const useClearLocalStorage = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
};

export { useClearLocalStorage };
