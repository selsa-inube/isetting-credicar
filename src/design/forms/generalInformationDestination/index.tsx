import { forwardRef, useContext } from "react";
import { FormikProps } from "formik";

import { useEnumMoneyDestination } from "@hooks/moneyDestination/useEnumMoneyDestination";
import { useGeneralInformationForm } from "@hooks/moneyDestination/useGeneralInformationForm";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { IGeneralInformationEntry } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IGeneralInformationDestination";
import { GeneralInformationFormUI } from "./interface";

interface IGeneralInformationForm {
  initialValues: IGeneralInformationEntry;
  loading?: boolean;
  onButtonClick: () => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
  editDataOption?: boolean;
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
      onButtonClick,
      loading,
      editDataOption = false,
    },
    ref,
  ) => {
    const { appData } = useContext(AuthAndPortalData);

    const { enumData } = useEnumMoneyDestination(
      "moneydestination",
      appData.businessUnit.publicCode,
    );

    const {
      autosuggestValue,
      optionsDestination,
      formik,
      isDisabledButton,
      icon,
      handleChange,
      valuesEqual,
    } = useGeneralInformationForm(
      enumData,
      initialValues,
      ref,
      editDataOption,
      loading,
      onSubmit,
      onFormValid,
    );

    return (
      <GeneralInformationFormUI
        loading={loading}
        formik={formik}
        onButtonClick={onButtonClick}
        optionsDestination={optionsDestination}
        onChange={handleChange}
        autosuggestValue={autosuggestValue}
        editDataOption={editDataOption}
        isDisabledButton={isDisabledButton}
        icon={icon}
        valuesEqual={valuesEqual()}
      />
    );
  },
);

GeneralInformationForm.displayName = "GeneralInformationForm";

export { GeneralInformationForm };
export type { IGeneralInformationForm };
