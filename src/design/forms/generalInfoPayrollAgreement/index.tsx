import { forwardRef } from "react";
import { FormikProps } from "formik";

import { IGeneralInformationEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IGeneralInformationPayroll";
import { useGeneralInformationForm } from "@hooks/payrollAgreement/useGeneralInformationForm";
import { IServerDomain } from "@ptypes/IServerDomain";
import { infoModal } from "@config/payrollAgreement/payrollAgreementTab/generic/infoModal";
import { GeneralInformationPayrollFormUI } from "./interface";

interface IGeneralInformationPayrollForm {
  initialValues: IGeneralInformationEntry;
  sourcesOfIncomeValues: IServerDomain[];
  setSourcesOfIncomeValues: React.Dispatch<
    React.SetStateAction<IServerDomain[]>
  >;
  onButtonClick: () => void;
  loading?: boolean;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
  onReset?: () => void;
  onPreviousStep?: () => void;
  editDataOption?: boolean;
  initialGeneralInfData?: IGeneralInformationEntry;
  companyAgreement?: string;
}

const GeneralInformationPayrollForm = forwardRef<
  FormikProps<IGeneralInformationEntry>,
  IGeneralInformationPayrollForm
>(
  (
    {
      initialValues,
      sourcesOfIncomeValues,
      companyAgreement,
      onFormValid,
      onSubmit,
      onButtonClick,
      onPreviousStep,
      setSourcesOfIncomeValues,
      onReset,
      loading = false,
      editDataOption = false,
      initialGeneralInfData,
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
      typePayrollOptions,
      isDisabledButton,
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
      initialGeneralInfData,
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
        isDisabledButton={isDisabledButton}
        showModal={showModal}
        valuesEqual={valuesEqual}
        onResetAdd={handleReset}
        onResetEdit={onReset}
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
        typePayrollOptions={typePayrollOptions as IServerDomain[]}
        companyAgreement={companyAgreement}
      />
    );
  },
);

GeneralInformationPayrollForm.displayName = "GeneralInformationPayrollForm";

export { GeneralInformationPayrollForm };
export type { IGeneralInformationPayrollForm };
