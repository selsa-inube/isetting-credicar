import { useContext } from "react";
import { IRuleDecision } from "@isettingkit/input";

import { AppContext } from "@context/AppContext";
import { useEnumRules } from "@hooks/moneyDestination/useEnumRules";
import { useDecisionForm } from "@hooks/forms/useDecisionForm";
import { revertModalDisplayData } from "@utils/revertModalDisplayData";
import { decisionTemplateConfig } from "@design/forms/decisions/config/decisionTemplate.config";
import { CreditLineFormUI } from "./interface";

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
  } = useDecisionForm(
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
