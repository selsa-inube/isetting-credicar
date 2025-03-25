import { forwardRef } from "react";
import { FormikProps } from "formik";

import { IGeneralInformationEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IGeneralInformationPayroll";
import { useGeneralInformationForm } from "@hooks/payrollAgreement/useGeneralInformationForm";
import { infoModal } from "@config/payrollAgreement/payrollAgreementTab/generics/infoModal";
import { IServerDomain } from "@ptypes/IServerDomain";
import { GeneralInformationPayrollFormUI } from "./interface";

interface IGeneralInformationPayrollForm {
  initialValues: IGeneralInformationEntry;
  sourcesOfIncomeValues: IServerDomain[];
  setSourcesOfIncomeValues: React.Dispatch<
    React.SetStateAction<IServerDomain[]>
  >;
  onButtonClick: () => void;
  onPreviousStep: () => void;
  loading?: boolean;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
  editDataOption?: boolean;
  initialGeneralInfData?: IGeneralInformationEntry;
}

const GeneralInformationPayrollForm = forwardRef<
  FormikProps<IGeneralInformationEntry>,
  IGeneralInformationPayrollForm
>(
  (
    {
      initialValues,
      sourcesOfIncomeValues,
      onFormValid,
      onSubmit,
      onButtonClick,
      onPreviousStep,
      setSourcesOfIncomeValues,
      loading = false,
      editDataOption = false,
    },
    ref,
  ) => {
    const {
      autosuggestValue,
      formik,
      showModal,
      valuesEqual,
      isMobile,
      focused,
      displayList,
      selectRef,
      setFocused,
      setDisplayList,
      handleChangeSelect,
      handleChangeAutosuggest,
      handleReset,
      handleToggleModal,
      handleChangeCheck,
    } = useGeneralInformationForm(
      initialValues,
      ref,
      editDataOption,
      loading,
      sourcesOfIncomeValues,
      onSubmit,
      onFormValid,
      setSourcesOfIncomeValues,
    );

    return (
      <GeneralInformationPayrollFormUI
        loading={loading}
        formik={formik}
        onButtonClick={onButtonClick}
        onChangeSelect={handleChangeSelect}
        onChangeAutosuggest={handleChangeAutosuggest}
        autosuggestValue={autosuggestValue}
        onPreviousStep={onPreviousStep}
        editDataOption={editDataOption}
        isDisabledButton={!formik.isValid}
        showModal={showModal}
        valuesEqual={valuesEqual}
        onReset={handleReset}
        infoModal={infoModal}
        onToggleInfoModalModal={handleToggleModal}
        onChangeCheck={handleChangeCheck}
        sourcesOfIncomeValues={sourcesOfIncomeValues}
        isMobile={isMobile}
        displayList={displayList}
        focused={focused}
        selectRef={selectRef}
        setFocused={setFocused}
        setDisplayList={setDisplayList}
      />
    );
  },
);

GeneralInformationPayrollForm.displayName = "GeneralInformationPayrollForm";

export { GeneralInformationPayrollForm };
export type { IGeneralInformationPayrollForm };
