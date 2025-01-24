import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useTimeoutNavigation = (timeout = 7000) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, timeout);

    return () => clearTimeout(timer);
  }, [navigate, timeout]);
};

export { useTimeoutNavigation };