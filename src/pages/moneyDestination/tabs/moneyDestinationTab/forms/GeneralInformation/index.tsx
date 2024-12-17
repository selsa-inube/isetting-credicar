import { FormikProps, useFormik } from "formik";
import { object } from "yup";
import { forwardRef, useEffect, useImperativeHandle } from "react";

import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { GeneralInformationFormUI } from "./interface";
import { IGeneralInformationEntry } from "./types";

const createValidationSchema = () =>
  object().shape({
    nameDestination: validationRules.string.required(
      validationMessages.required,
    ),
    observations: validationRules.string.required(validationMessages.required),
  });

const validationSchema = createValidationSchema();

interface IGeneralInformationForm {
  initialValues: IGeneralInformationEntry;
  loading?: boolean;
  withNextButton?: boolean;
  handleNextStep: () => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
}

const GeneralInformationForm = forwardRef<
  FormikProps<IGeneralInformationEntry>,
  IGeneralInformationForm
>(
  (
    {
      initialValues,
      onFormValid,
      onSubmit,
      handleNextStep,
      loading,
      withNextButton = false,
    },
    ref,
  ) => {
    const formik = useFormik({
      initialValues,
      validationSchema,
      validateOnBlur: false,
      onSubmit: onSubmit ?? (() => true),
    });

    useImperativeHandle(ref, () => formik);

    useEffect(() => {
      if (onFormValid) {
        formik.validateForm().then((errors) => {
          const isFormValid = Object.keys(errors).length === 0;
          onFormValid(isFormValid);
        });
      }
    }, [formik.values, onFormValid]);

    return (
      <GeneralInformationFormUI
        loading={loading}
        formik={formik}
        withNextButton={withNextButton}
        handleNextStep={handleNextStep}
        nameSelected={""}
        onChange={() => {
          console.log("");
        }}
      />
    );
  },
);

GeneralInformationForm.displayName = "GeneralInformationForm";

export { GeneralInformationForm };
export type { IGeneralInformationForm };
