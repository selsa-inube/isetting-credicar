import { useRef, useState } from "react";
import { FormikProps } from "formik";
import { IRuleDecision } from "@isettingkit/input";

import { ICreditProspectEntry } from "@design/forms/creditProspect/types";
import { optionsProspectConfig } from "@design/forms/creditProspect/config/optionsProspect.config";

import { addCreditLinesSteps } from "@config/creditLines/addCreditLine/assisted";
import { IFormsCreditlines } from "@ptypes/creditLines/addCreditLine/IFormsCreditlines";
import { IGeneralInformationEntry } from "@ptypes/creditLines/forms/IGeneralInformationEntry";
import { IFormsCreditlinesRefs } from "@ptypes/creditLines/addCreditLine/IFormsCreditlinesRefs";

const useAddCreditlines = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [decisions, setDecisions] = useState<IRuleDecision[]>([]);
  const [formValues, setFormValues] = useState<IFormsCreditlines>({
    generalInformation: {
      isValid: false,
      values: {
        nameCreditLine: "",
        descriptionCreditLine: "",
      },
    },
    creditProspect: {
      isValid: false,
      values: {
        additionalDebtors: "",
      },
    },
  });

  const [optionsProspect, setOptionsProspect] = useState(optionsProspectConfig);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const creditProspectRef = useRef<FormikProps<ICreditProspectEntry>>(null);

  const formReferences: IFormsCreditlinesRefs = {
    generalInformation: generalInformationRef,
    creditProspect: creditProspectRef,
  };

  const handleNextStep = () => {
    if (currentStep < addCreditLinesSteps.length) {
      if (generalInformationRef.current) {
        setFormValues((prev) => ({
          ...prev,
          generalInformation: {
            ...prev.generalInformation,
            values: generalInformationRef.current
              ? generalInformationRef.current.values
              : ({} as IGeneralInformationEntry),
          },
        }));
        setIsCurrentFormValid(generalInformationRef.current.isValid);
      }
      if (creditProspectRef.current) {
        setFormValues((prev) => ({
          ...prev,
          creditProspect: {
            ...prev.creditProspect,
            values: creditProspectRef.current
              ? creditProspectRef.current.values
              : ({} as ICreditProspectEntry),
          },
        }));
        setIsCurrentFormValid(creditProspectRef.current.isValid);
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
    decisions,
    formReferences,
    formValues,
    isCurrentFormValid,
    optionsProspect,
    handleNextStep,
    handlePreviousStep,
    setDecisions,
    setIsCurrentFormValid,
    setOptionsProspect,
  };
};

export { useAddCreditlines };
