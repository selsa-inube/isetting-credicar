import { useContext } from "react";
import { IRuleDecision } from "@isettingkit/input";

import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useEnumRules } from "@hooks/moneyDestination/useEnumRules";
import { useDecisionForm } from "@hooks/forms/useDecisionForm";
import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";
import { DecisionsFormUI } from "./interface";

interface IDecisionsForm {
  attentionModal: IMessageModal;
  deleteModal: IMessageModal;
  initialValues: IRuleDecision[];
  labelBusinessRules: string;
  textValuesBusinessRules: IRulesFormTextValues;
  showAttentionModal: boolean;
  decisionTemplateConfig: (
    enumeratorsRules: IRuleDecision,
    conditionForSwitchPlace: string,
  ) => IRuleDecision | undefined;
  onButtonClick: () => void;
  onPreviousStep: () => void;
  setDecisions: (decisions: IRuleDecision[]) => void;
  revertModalDisplayData: (
    dataDecision: IRuleDecision,
    originalDecision: IRuleDecision,
  ) => void;
  conditionForSwitchPlace: string;
  setShowAttentionModal: React.Dispatch<React.SetStateAction<boolean>>;
  editDataOption?: boolean;
}

const DecisionsForm = (props: IDecisionsForm) => {
  const {
    attentionModal,
    deleteModal,
    initialValues,
    labelBusinessRules,
    textValuesBusinessRules,
    editDataOption,
    conditionForSwitchPlace,
    showAttentionModal,
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
    editDataOption,
  );

  const { appData } = useContext(AuthAndPortalData);
  const { enumRuleData } = useEnumRules(
    labelBusinessRules,
    appData.businessUnit.publicCode,
  );

  return (
    <DecisionsFormUI
      attentionModal={attentionModal}
      decisions={decisions}
      decisionTemplate={
        decisionTemplateConfig(enumRuleData, conditionForSwitchPlace) ??
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
          decisionTemplateConfig(enumRuleData, conditionForSwitchPlace) ??
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
    />
  );
};

export { DecisionsForm };
export type { IDecisionsForm };
