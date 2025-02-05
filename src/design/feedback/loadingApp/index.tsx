import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoadingAppUI } from "./interface";

const LoadingApp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <LoadingAppUI />;
};

export { LoadingApp };
