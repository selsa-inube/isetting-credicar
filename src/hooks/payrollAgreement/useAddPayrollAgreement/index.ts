import { useRef, useState } from "react";
import { FormikProps } from "formik";

import { addPayrollAgreementSteps } from "@config/payrollAgreement/payrollAgreementTab/assisted";
import { IAddPayrollAgreementForms } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IAddPayrollAgreementForms";
import { ICompanyEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/ICompanyEntry";
import { IAddPayrollAgreementRef } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IAddPayrollAgreementRef";

const useAddPayrollAgreement = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<IAddPayrollAgreementForms>({
    company: {
      isValid: false,
      values: {
        companySelected: "",
        companyName: "",
        companyTypeIdent: "",
        companyNumberIdent: "",
        companyVerifDigit: "",
        companyDateIdent: "",
        companyNameCommercial: "",
        companyCode: "",
        companyCity: "",
        companyAddressRes: "",
        companyCountry: "",
        companyCountryIdent: "",
      },
    },
  });
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const generalInformationRef = useRef<FormikProps<ICompanyEntry>>(null);

  const formReferences: IAddPayrollAgreementRef = {
    company: generalInformationRef,
  };

  const handleNextStep = () => {
    if (currentStep < addPayrollAgreementSteps.length) {
      if (generalInformationRef.current) {
        setFormValues((prevValues) => ({
          ...prevValues,
          company: {
            ...prevValues.company,
            values: generalInformationRef.current!.values,
          },
        }));
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
    formReferences,
    isCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
    setCurrentStep,
    setIsCurrentFormValid,
  };
};

export { useAddPayrollAgreement };
