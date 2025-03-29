import { forwardRef } from "react";
import { FormikProps } from "formik";

import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { useExtraordinaryCyclesForm } from "@hooks/payrollAgreement/useExtraordinaryCyclesForm";
import { ExtraordinaryPaymentCyclesFormUI } from "./interface";

interface IExtraordinaryPaymentCyclesForm {
  extraordinaryPayment: IExtraordinaryCyclesEntry[];
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
      handleToggleModal,
      handleChange,
      handleReset,
      handleAddCycle,
      setEntryDeleted,
    } = useExtraordinaryCyclesForm(
      ref,
      editDataOption,
      loading,
      onSubmit,
      onFormValid,
      extraordinaryPayment,
      setExtraordinaryPayment,
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
        setEntryDeleted={setEntryDeleted}
      />
    );
  },
);

ExtraordinaryPaymentCyclesForm.displayName = "ExtraordinaryPaymentCyclesForm";

export { ExtraordinaryPaymentCyclesForm };
export type { IExtraordinaryPaymentCyclesForm };
