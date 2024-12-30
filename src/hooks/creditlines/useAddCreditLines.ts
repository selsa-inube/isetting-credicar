import { useRef, useState } from "react";
import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@pages/creditLines/forms/GeneralInformation/types";
import { addCreditLinesSteps } from "@pages/creditLines/AddCreditLines/config/assisted.config";

const useAddCreditlines = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<IGeneralInformationEntry>({
    nameCreditLine: "",
    descriptionCreditLine: "",
  });

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const handleNextStep = () => {
    if (currentStep < addCreditLinesSteps.length) {
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

  return {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
  };
};

export { useAddCreditlines };
