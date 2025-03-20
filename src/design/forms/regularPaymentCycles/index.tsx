import { forwardRef } from "react";
import { FormikProps } from "formik";

import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { useOrdinaryCyclesForm } from "@hooks/payrollAgreement/useOrdinaryCyclesForm";
import { RegularPaymentCyclesFormUI } from "./interface";

interface IRegularPaymentCyclesForm {
  initialValues: IOrdinaryCyclesEntry;
  onButtonClick: () => void;
  onPreviousStep: () => void;
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
      initialValues,
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
      handleToggleModal,
      handleChange,
      handleReset,
      handleAddCycle,
    } = useOrdinaryCyclesForm(
      initialValues,
      ref,
      editDataOption,
      loading,
      onSubmit,
      onFormValid,
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
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onReset={handleReset}
        entries={entries}
        onAddCycle={handleAddCycle}
        onPreviousStep={onPreviousStep}
      />
    );
  },
);

RegularPaymentCyclesForm.displayName = "RegularPaymentCyclesForm";

export { RegularPaymentCyclesForm };
export type { IRegularPaymentCyclesForm };
