import { useRef, useState } from "react";
import { FormikProps } from "formik";

import { addDestinationSteps } from "./config/assisted.config";
import { AddDestinationUI } from "./interface";
import { IGeneralInformationEntry } from "../forms/GeneralInformation/types";

function AddDestination() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<IGeneralInformationEntry>({
    nameDestination: "",
    description: "",
  });

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const handleNextStep = () => {
    if (currentStep < addDestinationSteps.length) {
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

  const handleSubmitClick = () => {
    console.log("Proceso completado");
  };

  return (
    <AddDestinationUI
      steps={addDestinationSteps}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      onPreviousStep={handlePreviousStep}
      onNextStep={handleNextStep}
      onSubmitClick={handleSubmitClick}
      generalInformationRef={generalInformationRef}
      initialGeneralInformationValues={formValues}
      isCurrentFormValid={isCurrentFormValid}
      setIsCurrentFormValid={setIsCurrentFormValid}
    />
  );
}

export { AddDestination };
