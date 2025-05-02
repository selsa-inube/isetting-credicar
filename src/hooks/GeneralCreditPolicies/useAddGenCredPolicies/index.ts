import { useRef, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { FormikProps } from "formik";

import { addPayrollAgreementSteps } from "@config/payrollAgreement/payrollAgreementTab/assisted/steps";
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
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 990px)");

  const decisionsGeneralRef = useRef<FormikProps<IDecisionsGeneralEntry>>(null);

  const formReferences: IAddGenCredPoliciesRef = {
    decisionsGeneral: decisionsGeneralRef,
  };

  const handleNextStep = () => {
    if (currentStep < addPayrollAgreementSteps.length) {
      if (decisionsGeneralRef.current) {
        setFormValues((prevValues) => ({
          ...prevValues,
          decisionsGeneral: {
            ...prevValues.decisionsGeneral,
            values: decisionsGeneralRef.current!.values,
          },
        }));
        setIsCurrentFormValid(decisionsGeneralRef.current.isValid);
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

  const formValid = !isCurrentFormValid;

  const handleSubmitClick = () => {
    console.log();
  };

  return {
    currentStep,
    formValues,
    formReferences,
    formValid,
    smallScreen,
    isCurrentFormValid,
    showModal,
    handleToggleModal,
    handleNextStep,
    handlePreviousStep,
    setCurrentStep,
    setIsCurrentFormValid,
    setShowModal,
    handleSubmitClick,
  };
};

export { useAddGenCredPolicies };
