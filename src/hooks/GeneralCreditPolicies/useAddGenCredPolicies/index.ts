import { useRef, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { IRuleDecision } from "@isettingkit/input";
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
  const [contributionsPortfolio, setContributionsPortfolio] = useState<
    IRuleDecision[]
  >([]);
  const [incomePortfolio, setIncomePortfolio] = useState<IRuleDecision[]>([]);
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
    if (currentStep >= addPayrollAgreementSteps.length) return;

    const updateFormValues = () => {
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
      }
    };

    const calculateNextStep = () => {
      const isFactor =
        decisionsGeneralRef.current?.values.factor ??
        formValues.decisionsGeneral.values.factor;
      const isReciprocity =
        decisionsGeneralRef.current?.values.reciprocity ??
        formValues.decisionsGeneral.values.reciprocity;

      if (currentStep === 2) {
        return isFactor ? currentStep + 1 : 4;
      }

      if (currentStep === 3 || currentStep === 4) {
        return currentStep + 1;
      }

      return isReciprocity ? currentStep + 1 : isFactor ? 3 : 4;
    };

    updateFormValues();
    setCurrentStep(calculateNextStep());
  };

  const handlePreviousStep = () => {
    if (currentStep <= 1) return;

    const isReciprocity =
      formValues.decisionsGeneral.values.reciprocity === true;
    const isFactor = formValues.decisionsGeneral.values.factor === true;

    const calculateStep = (
      defaultStep: number,
      condition: boolean,
      stepIfTrue: number,
    ) => (condition ? stepIfTrue : defaultStep);

    switch (currentStep) {
      case 4:
        setCurrentStep(
          calculateStep(
            calculateStep(1, isReciprocity, 2),
            isFactor,
            currentStep - 1,
          ),
        );
        break;

      case 3:
        setCurrentStep(calculateStep(1, isReciprocity, currentStep - 1));
        break;

      case 2:
      case 5:
        setCurrentStep(currentStep - 1);
        break;

      default:
        break;
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const formValid =
    (currentStep === 2 && contributionsPortfolio.length === 0) ||
    (currentStep === 3 && incomePortfolio.length === 0)
      ? true
      : isCurrentFormValid;

  return {
    currentStep,
    formValues,
    formReferences,
    smallScreen,
    isCurrentFormValid,
    showModal,
    contributionsPortfolio,
    incomePortfolio,
    formValid,
    setIncomePortfolio,
    setContributionsPortfolio,
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
