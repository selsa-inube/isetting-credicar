import { forwardRef } from "react";
import { FormikProps } from "formik";

import { useGeneralInfoCreditLineForm } from "@hooks/creditlines/useGeneralInfoCreditLineForm";
import { GeneralInformationFormUI } from "./interface";
import { IGeneralInformationEntry } from "./types";

interface IGeneralInformationForm {
  initialValues: IGeneralInformationEntry;
  loading?: boolean;
  handleNextStep: () => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
}

const GeneralInformationForm = forwardRef<
  FormikProps<IGeneralInformationEntry>,
  IGeneralInformationForm
>(({ initialValues, onFormValid, onSubmit, handleNextStep, loading }, ref) => {
  const { formik } = useGeneralInfoCreditLineForm(
    initialValues,
    ref,
    onSubmit,
    onFormValid,
  );

  return (
    <GeneralInformationFormUI
      loading={loading}
      formik={formik}
      onNextStep={handleNextStep}
    />
  );
});

GeneralInformationForm.displayName = "GeneralInformationForm";

export { GeneralInformationForm };
export type { IGeneralInformationForm };
