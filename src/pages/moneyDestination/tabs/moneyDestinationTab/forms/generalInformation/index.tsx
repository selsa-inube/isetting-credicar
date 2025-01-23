import { forwardRef, useContext } from "react";
import { FormikProps } from "formik";

import { useEnumMoneyDestination } from "@hooks/moneyDestination/useEnumMoneyDestination";
import { useGeneralInformationForm } from "@hooks/moneyDestination/useGeneralInformationForm";
import { GeneralInformationFormUI } from "./interface";
import { IGeneralInformationEntry } from "./types";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";

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
  const { appData } = useContext(AuthAndPortalData);

  const { enumData } = useEnumMoneyDestination(
    "moneydestination",
    appData.businessUnit.publicCode,
  );

  const { autosuggestValue, optionsDestination, formik, handleChange } =
    useGeneralInformationForm(
      enumData,
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
      optionsDestination={optionsDestination}
      onChange={handleChange}
      autosuggestValue={autosuggestValue}
      enumData={enumData}
    />
  );
});

GeneralInformationForm.displayName = "GeneralInformationForm";

export { GeneralInformationForm };
export type { IGeneralInformationForm };
