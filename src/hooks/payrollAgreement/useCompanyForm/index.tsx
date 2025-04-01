import { useContext, useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { ICompanyEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/ICompanyEntry";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useCountries } from "@hooks/generic/useCountries";
import { useCities } from "@hooks/generic/useCities";
import { useLegalPerson } from "../useLegalPerson";

const useCompanyForm = (
  initialValues: ICompanyEntry,
  ref: React.ForwardedRef<FormikProps<ICompanyEntry>>,
  onSubmit: ((values: ICompanyEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined,
) => {
  const validationSchema = object().shape({
    companySelected: validationRules.string.required(
      validationMessages.required,
    ),
    companyName: validationRules.string,
    companyTypeIdent: validationRules.string,
    companyNumberIdent: validationRules.string,
    companyVerifDigit: validationRules.string,
    companyDateIdent: validationRules.string,
    companyNameCommercial: validationRules.string,
    companyCode: validationRules.string,
    companyCity: validationRules.string,
    companyAddressRes: validationRules.string,
    companyCountry: validationRules.string,
    companyCountryIdent: validationRules.string,
  });

  const [dynamicValidationSchema, setDynamicValidationSchema] =
    useState(validationSchema);

  const formik = useFormik({
    initialValues,
    validationSchema: dynamicValidationSchema,
    validateOnBlur: true,
    onSubmit: onSubmit ?? (() => true),
  });

  useImperativeHandle(ref, () => formik);

  const { appData } = useContext(AuthAndPortalData);
  const { legalPersonOptions } = useLegalPerson(
    appData.businessUnit.publicCode,
  );
  const { optionsCountries } = useCountries();
  const { optionsCities } = useCities();

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  const handleCompanyChange = (name: string, value: string) => {
    formik.setFieldValue(name, value).then(() => {
      formik.validateForm().then((errors) => {
        formik.setErrors(errors);
      });
    });

    if (name === "companySelected" && value === "addCompany") {
      setDynamicValidationSchema(
        validationSchema.shape({
          companyName: validationRules.string.required(
            validationMessages.required,
          ),
          companyTypeIdent: validationRules.string.required(
            validationMessages.required,
          ),
          companyNumberIdent: validationRules.string.required(
            validationMessages.required,
          ),
          companyVerifDigit: validationRules.string.required(
            validationMessages.required,
          ),
          companyDateIdent: validationRules.string.required(
            validationMessages.required,
          ),
          companyNameCommercial: validationRules.string.required(
            validationMessages.required,
          ),
          companyCode: validationRules.string.required(
            validationMessages.required,
          ),
          companyCity: validationRules.string.required(
            validationMessages.required,
          ),
          companyAddressRes: validationRules.string.required(
            validationMessages.required,
          ),
          companyCountry: validationRules.string.required(
            validationMessages.required,
          ),
          companyCountryIdent: validationRules.string.required(
            validationMessages.required,
          ),
        }),
      );
    } else {
      setDynamicValidationSchema(
        validationSchema.shape({
          companySelected: validationRules.string.required(
            validationMessages.required,
          ),
        }),
      );
    }
  };

  const handleChange = (name: string, value: string) => {
    formik.setFieldValue(name, value).then(() => {
      formik.validateForm().then((errors) => {
        formik.setErrors(errors);
      });
    });
  };

  return {
    formik,
    legalPersonOptions,
    optionsCountries,
    optionsCities,
    handleChange,
    handleCompanyChange,
  };
};

export { useCompanyForm };
