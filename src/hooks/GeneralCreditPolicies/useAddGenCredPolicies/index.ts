import { useRef, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { FormikProps } from "formik";

import { IAddGenCredPoliciesForms } from "@ptypes/generalCredPolicies/forms/IAddGenCredPoliciesForms";
import { IAddGenCredPoliciesRef } from "@ptypes/generalCredPolicies/forms/IAddGenCredPoliciesRef";
import { IDecisionsGeneralEntry } from "@ptypes/generalCredPolicies/forms/IDecisionsGeneralEntry";
import { addGenCredPoliciesSteps } from "@config/generalCreditPolicies/assisted/steps";

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
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 990px)");

  const decisionsGeneralRef = useRef<FormikProps<IDecisionsGeneralEntry>>(null);

  const formReferences: IAddGenCredPoliciesRef = {
    decisionsGeneral: decisionsGeneralRef,
  };

  const handleFormValidChange = (isValid: boolean) => {
    setIsCurrentFormValid(isValid);
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
        setCurrentStep(currentStep + 1);
      }
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

  return {
    currentStep,
    formValues,
    formReferences,
    smallScreen,
    isCurrentFormValid,
    showModal,
    handleFormValidChange,
    handleToggleModal,
    handleNextStep,
    handlePreviousStep,
    setCurrentStep,
    setIsCurrentFormValid,
    setShowModal,
  };
};

export { useAddGenCredPolicies };
