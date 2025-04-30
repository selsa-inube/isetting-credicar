import { useRef, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { FormikProps } from "formik";

import { addGenCredPoliciesSteps } from "@config/generalCreditPolicies/assisted/steps";
import { IAddGenCredPoliciesForms } from "@ptypes/generalCredPolicies/forms/IAddGenCredPoliciesForms";
import { IAddGenCredPoliciesRef } from "@ptypes/generalCredPolicies/forms/IAddGenCredPoliciesRef";
import { IDecisionsGeneralEntry } from "@ptypes/generalCredPolicies/forms/IDecisionsGeneralEntry";

const useAddGenCredPolicies = () => {
  const initialValues = {
    decisionsGeneral: {
      isValid: false,
      values: {
        reference: "",
        additionalDebtors: false,
        sourcesIncome: false,
        financialObligations: false,
        realGuarantees: false,
        calculation: false,
        reciprocity: false,
        factor: false,
      },
    },
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] =
    useState<IAddGenCredPoliciesForms>(initialValues);
  const [showModal, setShowModal] = useState(false);

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 990px)");

  const decisionsGeneralRef = useRef<FormikProps<IDecisionsGeneralEntry>>(null);

  const formReferences: IAddGenCredPoliciesRef = {
    decisionsGeneral: decisionsGeneralRef,
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleNextStep = () => {
    if (currentStep < addGenCredPoliciesSteps.length) {
      if (decisionsGeneralRef.current) {
        setFormValues((prevValues) => ({
          ...prevValues,
          decisionsGeneral: {
            ...prevValues.decisionsGeneral,
            values: decisionsGeneralRef.current
              ? decisionsGeneralRef.current.values
              : ({} as IDecisionsGeneralEntry),
          },
        }));
        setIsCurrentFormValid(decisionsGeneralRef.current.isValid);
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
    console.log();
  };

  return {
    currentStep,
    formValues,
    formReferences,
    smallScreen,
    isCurrentFormValid,
    handleToggleModal,
    handleNextStep,
    handlePreviousStep,
    setCurrentStep,
    setIsCurrentFormValid,
    handleSubmitClick,
  };
};

export { useAddGenCredPolicies };
