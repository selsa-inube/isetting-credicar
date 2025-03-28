import { forwardRef } from "react";
import { FormikProps } from "formik";

import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { useExtraordinaryCyclesForm } from "@hooks/payrollAgreement/useExtraordinaryCyclesForm";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { ExtraordinaryPaymentCyclesFormUI } from "./interface";

interface IExtraordinaryPaymentCyclesForm {
  extraordinaryPayment: IExtraordinaryCyclesEntry[];
  typeRegularPayroll: boolean;
  regularPaymentCycles: IOrdinaryCyclesEntry[];
  setExtraordinaryPayment: React.Dispatch<
    React.SetStateAction<IExtraordinaryCyclesEntry[]>
  >;
  onButtonClick: () => void;
  onPreviousStep: () => void;
  loading?: boolean;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IExtraordinaryCyclesEntry) => void;
  editDataOption?: boolean;
}

const ExtraordinaryPaymentCyclesForm = forwardRef<
  FormikProps<IExtraordinaryCyclesEntry>,
  IExtraordinaryPaymentCyclesForm
>(
  (
    {
      extraordinaryPayment,
      typeRegularPayroll,
      regularPaymentCycles,
      setExtraordinaryPayment,
      onFormValid,
      onSubmit,
      onButtonClick,
      onPreviousStep,
      loading = false,
      editDataOption = false,
    },
    ref,
  ) => {
    const {
      formik,
      isDisabledButton,
      valuesEqual,
      entries,
      showModal,
      isMobile,
      typePaymentOptions,
      numberDaysUntilCutOptions,
      monthOptions,
      dayOptions,
      handleToggleModal,
      handleChange,
      handleReset,
      handleAddCycle,
    } = useExtraordinaryCyclesForm(
      ref,
      editDataOption,
      typeRegularPayroll,
      loading,
      onSubmit,
      onFormValid,
      extraordinaryPayment,
      setExtraordinaryPayment,
      regularPaymentCycles,
    );

    return (
      <ExtraordinaryPaymentCyclesFormUI
        loading={loading}
        formik={formik}
        onButtonClick={onButtonClick}
        onChange={handleChange}
        editDataOption={editDataOption}
        isDisabledButton={isDisabledButton}
        valuesEqual={valuesEqual}
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onReset={handleReset}
        entries={entries}
        onAddCycle={handleAddCycle}
        onPreviousStep={onPreviousStep}
        isMobile={isMobile}
        typePaymentOptions={typePaymentOptions}
        numberDaysUntilCutOptions={numberDaysUntilCutOptions}
        monthOptions={monthOptions}
        dayOptions={dayOptions ?? []}
      />
    );
  },
);

ExtraordinaryPaymentCyclesForm.displayName = "ExtraordinaryPaymentCyclesForm";

export { ExtraordinaryPaymentCyclesForm };
export type { IExtraordinaryPaymentCyclesForm };
