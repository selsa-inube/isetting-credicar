import { forwardRef } from "react";
import { FormikProps } from "formik";

import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { useOrdinaryCyclesForm } from "@hooks/payrollAgreement/useOrdinaryCyclesForm";
import { infoPeriodicityModal } from "@config/payrollAgreement/payrollAgreementTab/generic/infoPeriodicityModal";
import { RegularPaymentCyclesFormUI } from "./interface";

interface IRegularPaymentCyclesForm {
  regularPaymentCycles: IOrdinaryCyclesEntry[];
  onButtonClick: () => void;
  onPreviousStep: () => void;
  setRegularPaymentCycles: React.Dispatch<
    React.SetStateAction<IOrdinaryCyclesEntry[]>
  >;
  loading?: boolean;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IOrdinaryCyclesEntry) => void;
  editDataOption?: boolean;
}

const RegularPaymentCyclesForm = forwardRef<
  FormikProps<IOrdinaryCyclesEntry>,
  IRegularPaymentCyclesForm
>(
  (
    {
      regularPaymentCycles,
      onFormValid,
      onSubmit,
      onButtonClick,
      onPreviousStep,
      setRegularPaymentCycles,
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
      showAddModal,
      numberDaysUntilCutOptions,
      paydayOptions,
      periodicityOptions,
      showInfoModal,
      onToggleInfoModal,
      handleToggleModal,
      handleChange,
      handleReset,
      handleAddCycle,
    } = useOrdinaryCyclesForm(
      ref,
      editDataOption,
      loading,
      onSubmit,
      onFormValid,
      regularPaymentCycles,
      setRegularPaymentCycles,
    );

    return (
      <RegularPaymentCyclesFormUI
        loading={loading}
        formik={formik}
        onButtonClick={onButtonClick}
        onChange={handleChange}
        editDataOption={editDataOption}
        isDisabledButton={isDisabledButton}
        valuesEqual={valuesEqual}
        showAddModal={showAddModal}
        onToggleModal={handleToggleModal}
        onReset={handleReset}
        entries={entries}
        onAddCycle={handleAddCycle}
        onPreviousStep={onPreviousStep}
        infoModal={infoPeriodicityModal}
        numberDaysUntilCutOptions={numberDaysUntilCutOptions ?? []}
        paydayOptions={paydayOptions ?? []}
        periodicityOptions={periodicityOptions}
        showInfoModal={showInfoModal}
        onToggleInfoModal={onToggleInfoModal}
      />
    );
  },
);

RegularPaymentCyclesForm.displayName = "RegularPaymentCyclesForm";

export { RegularPaymentCyclesForm };
export type { IRegularPaymentCyclesForm };
