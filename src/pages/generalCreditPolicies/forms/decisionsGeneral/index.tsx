import { forwardRef } from "react";
import { FormikProps } from "formik";

import { IDecisionsGeneralEntry } from "@ptypes/generalCredPolicies/forms/IDecisionsGeneralEntry";
import { useDecisionsGenForm } from "@hooks/GeneralCreditPolicies/useDecisionsGenForm";
import { IDecisionsGeneralForm } from "@ptypes/generalCredPolicies/forms/IDecisionsGeneralForm";
import { DecisionsGeneralFormUI } from "./interface";

const DecisionsGeneralForm = forwardRef<
  FormikProps<IDecisionsGeneralEntry>,
  IDecisionsGeneralForm
>(
  (
    {
      initialValues,
      editDataOption = false,
      onFormValid,
      onSubmit,
      handleNextStep,
      loading = false,
    },
    ref,
  ) => {
    const {
      formik,
      showModal,
      isMobile,
      isDisabledButton,
      handleChangeMethods,
      handleChange,
      handleInfoModal,
      handleToggleChange,
    } = useDecisionsGenForm({ initialValues, ref, onSubmit, onFormValid });

    return (
      <DecisionsGeneralFormUI
        editDataOption={editDataOption}
        loading={loading}
        formik={formik}
        onButtonClick={handleNextStep}
        onReferenceChange={handleChange}
        onToggle={handleToggleChange}
        showModal={showModal}
        onInfoModal={handleInfoModal}
        isMobile={isMobile}
        onChangeMethods={handleChangeMethods}
        isDisabledButton={isDisabledButton}
      />
    );
  },
);

DecisionsGeneralForm.displayName = "DecisionsGeneralForm";

export { DecisionsGeneralForm };
