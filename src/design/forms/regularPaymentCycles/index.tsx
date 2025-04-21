import { forwardRef } from "react";
import { FormikProps } from "formik";

import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { useOrdinaryCyclesForm } from "@hooks/payrollAgreement/useOrdinaryCyclesForm";
import { infoPeriodicityModal } from "@config/payrollAgreement/payrollAgreementTab/generic/infoPeriodicityModal";
import { IRegularPaymentCyclesForm } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IRegularPaymentCyclesForm";
import { RegularPaymentCyclesFormUI } from "./interface";

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
      initialData,
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
      isMobile,
      onToggleInfoModal,
      handleToggleModal,
      handleChange,
      handleAddCycle,
      setEntryDeleted,
    } = useOrdinaryCyclesForm(
      ref,
      editDataOption,
      loading,
      onSubmit,
      onFormValid,
      regularPaymentCycles,
      setRegularPaymentCycles,
      initialData,
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
        entries={entries}
        onAddCycle={handleAddCycle}
        onPreviousStep={onPreviousStep}
        infoModal={infoPeriodicityModal}
        numberDaysUntilCutOptions={numberDaysUntilCutOptions ?? []}
        paydayOptions={paydayOptions ?? []}
        periodicityOptions={periodicityOptions}
        showInfoModal={showInfoModal}
        onToggleInfoModal={onToggleInfoModal}
        isMobile={isMobile}
        setEntryDeleted={setEntryDeleted}
      />
    );
  },
);

RegularPaymentCyclesForm.displayName = "RegularPaymentCyclesForm";

export { RegularPaymentCyclesForm };
export type { IRegularPaymentCyclesForm };
