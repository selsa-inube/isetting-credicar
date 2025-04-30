import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useGeneralCreditPolicies = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [policiesData] = useState<[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (policiesData.length === 0) {
      setShowModal(true);
    }
  }, [policiesData]);

  const handlePolicies = () => {
    setShowModal(false);
    navigate("/general-credit-policies/add-general-credit-policies");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return {
    showModal,
    handlePolicies,
    handleCloseModal,
    policiesData,
  };
};

export { useGeneralCreditPolicies };
