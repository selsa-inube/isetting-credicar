import { useContext } from "react";
import { IRuleDecision } from "@isettingkit/input";

import { AppContext } from "@context/AppContext";
import { useEnumRules } from "@hooks/MoneyDestination/useEnumRules";
import { useCreditLineForm } from "@hooks/MoneyDestination/useCreditLineForm";
import { CreditLineFormUI } from "./interface";
import { revertModalDisplayData } from "./utils";
import { decisionTemplateConfig } from "./config/decisionTemplate.config";

interface ICreditLineForm {
  initialValues: IRuleDecision[];
  onNextStep: () => void;
  onPreviousStep: () => void;
  setCreditLineDecisions: (decisions: IRuleDecision[]) => void;
}

const CreditLineForm = (props: ICreditLineForm) => {
  const { onNextStep, onPreviousStep, initialValues, setCreditLineDecisions } =
    props;

  const {
    isModalOpen,
    selectedDecision,
    decisions,
    showAttentionModal,
    showDeleteModal,
    handleOpenModal,
    handleCloseModal,
    handleSubmitForm,
    handleToggleAttentionModal,
    handleToggleDeleteModal,
    handleDelete,
  } = useCreditLineForm(
    initialValues,
    revertModalDisplayData,
    setCreditLineDecisions,
  );

  const { appData } = useContext(AppContext);
  const { enumRuleData } = useEnumRules(
    "LineOfCredit",
    appData.businessUnit.publicCode,
  );

  return (
    <CreditLineFormUI
      decisions={decisions}
      decisionTemplate={
        decisionTemplateConfig(enumRuleData) ?? ({} as IRuleDecision)
      }
      isModalOpen={isModalOpen}
      loading={false}
      onCloseModal={handleCloseModal}
      onDelete={handleDelete}
      onNextStep={onNextStep}
      onOpenModal={handleOpenModal}
      onPreviousStep={onPreviousStep}
      onSubmitForm={handleSubmitForm}
      onToggleAttentionModal={handleToggleAttentionModal}
      onToggleDeleteModal={handleToggleDeleteModal}
      selectedDecision={selectedDecision}
      showAttentionModal={showAttentionModal}
      showDeleteModal={showDeleteModal}
    />
  );
};

export { CreditLineForm };
export type { ICreditLineForm };
