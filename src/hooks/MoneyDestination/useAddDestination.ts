import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormikProps } from "formik";
import { IRuleDecision } from "@isettingkit/input";

import { addDestinationStepsConfig } from "@pages/moneyDestination/tabs/moneyDestinationTab/AddDestination/config/assisted.config";
import { IGeneralInformationEntry } from "@pages/moneyDestination/tabs/moneyDestinationTab/forms/GeneralInformation/types";

const useAddDestination = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<IGeneralInformationEntry>({
    nameDestination: "",
    description: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [creditLineDecisions, setCreditLineDecisions] = useState<
    IRuleDecision[]
  >([]);

  const navigate = useNavigate();

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const [nameDecision, setNameDecision] = useState(
    generalInformationRef.current?.values.nameDestination ?? "",
  );

  useEffect(() => {
    setNameDecision(formValues.nameDestination ?? "");
  }, [formValues.nameDestination]);

  const handleNextStep = () => {
    if (currentStep < addDestinationStepsConfig("").length) {
      if (generalInformationRef.current) {
        setFormValues(generalInformationRef.current.values);
        setIsCurrentFormValid(generalInformationRef.current.isValid);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmitClick = () => {
    handleToggleModal();
    navigate("/money-destination");
  };

  return {
    creditLineDecisions,
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    nameDecision,
    showModal,
    handleNextStep,
    handlePreviousStep,
    handleSubmitClick,
    handleToggleModal,
    setCreditLineDecisions,
    setCurrentStep,
    setIsCurrentFormValid,
  };
};

export { useAddDestination };
