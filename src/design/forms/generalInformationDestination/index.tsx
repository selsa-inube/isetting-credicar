import { forwardRef, useContext } from "react";
import { FormikProps } from "formik";

import { useEnumerators } from "@hooks/useEnumerators";
import { useGeneralInformationForm } from "@hooks/moneyDestination/useGeneralInformationForm";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { IGeneralInformationEntry } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IGeneralInformationDestination";
import { GeneralInformationFormUI } from "./interface";

interface IGeneralInformationForm {
  initialValues: IGeneralInformationEntry;
  onButtonClick: () => void;
  loading?: boolean;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
  editDataOption?: boolean;
  initialGeneralInfData?: IGeneralInformationEntry;
}

const GeneralInformationForm = forwardRef<
  FormikProps<IGeneralInformationEntry>,
  IGeneralInformationForm
>(
  (
    {
      initialValues,
      initialGeneralInfData,
      onFormValid,
      onSubmit,
      onButtonClick,
      loading = false,
      editDataOption = false,
    },
    ref,
  ) => {
    const { appData } = useContext(AuthAndPortalData);

    const { enumData } = useEnumerators(
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
      handleReset,
      valuesEqualBoton,
    } = useGeneralInformationForm(
      enumData,
      initialValues,
      ref,
      editDataOption,
      loading,
      onSubmit,
      onFormValid,
      initialGeneralInfData,
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
        valuesEqual={valuesEqualBoton}
        onReset={handleReset}
      />
    );
  },
);

GeneralInformationForm.displayName = "GeneralInformationForm";

export { GeneralInformationForm };
export type { IGeneralInformationForm };
