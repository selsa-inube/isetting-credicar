import { useContext } from "react";
import { IRuleDecision } from "@isettingkit/input";

import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useEnumRules } from "@hooks/moneyDestination/useEnumRules";
import { useDecisionForm } from "@hooks/forms/useDecisionForm";
import { IDecisionsForm } from "@ptypes/decisions/IDecisionsForm";
import { DecisionsFormUI } from "./interface";

const DecisionsForm = (props: IDecisionsForm) => {
  const {
    attentionModal,
    deleteModal,
    initialValues,
    labelBusinessRules,
    textValuesBusinessRules,
    editDataOption,
    nameMoneyDestination,
    showAttentionModal,
    titleContentAddCard,
    messageEmptyDecisions,
    normalizeEvaluateRuleData,
    decisionTemplateConfig,
    onButtonClick,
    onPreviousStep,
    revertModalDisplayData,
    setDecisions,
    setShowAttentionModal,
  } = props;

  const {
    isModalOpen,
    selectedDecision,
    decisions,
    showDeleteModal,
    hasChanges,
    cancelButtonLabel,
    saveButtonLabel,
    handleOpenModal,
    handleCloseModal,
    handleSubmitForm,
    handleToggleAttentionModal,
    handleToggleDeleteModal,
    handleDelete,
    handleSave,
    handleReset,
  } = useDecisionForm(
    initialValues,
    revertModalDisplayData,
    onButtonClick,
    setDecisions,
    setShowAttentionModal,
    showAttentionModal,
    normalizeEvaluateRuleData,
    editDataOption,
  );

  const { appData } = useContext(AuthAndPortalData);
  const { ruleData } = useEnumRules(
    labelBusinessRules,
    appData.businessUnit.publicCode,
  );

  return (
    <DecisionsFormUI
      attentionModal={attentionModal}
      decisions={decisions}
      decisionTemplate={
        decisionTemplateConfig(ruleData, nameMoneyDestination) ??
        ({} as IRuleDecision)
      }
      deleteModal={deleteModal}
      isModalOpen={isModalOpen}
      loading={false}
      onCloseModal={handleCloseModal}
      onDelete={handleDelete}
      onButtonClick={onButtonClick}
      onOpenModal={handleOpenModal}
      onPreviousStep={onPreviousStep}
      onSubmitForm={(dataDecision: IRuleDecision) =>
        handleSubmitForm(
          dataDecision,
          decisionTemplateConfig(ruleData, nameMoneyDestination) ??
            ({} as IRuleDecision),
        )
      }
      onToggleAttentionModal={handleToggleAttentionModal}
      onToggleDeleteModal={handleToggleDeleteModal}
      selectedDecision={selectedDecision}
      showAttentionModal={showAttentionModal}
      showDeleteModal={showDeleteModal}
      textValuesBusinessRules={textValuesBusinessRules}
      editDataOption={editDataOption}
      onSave={handleSave}
      handleReset={handleReset}
      hasChanges={hasChanges}
      titleContentAddCard={titleContentAddCard}
      messageEmptyDecisions={messageEmptyDecisions}
      cancelButtonLabel={cancelButtonLabel}
      saveButtonLabel={saveButtonLabel}
    />
  );
};

export { DecisionsForm };
export type { IDecisionsForm };
