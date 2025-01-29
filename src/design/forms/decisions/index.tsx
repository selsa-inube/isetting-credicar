import { useContext } from "react";
import { IRuleDecision } from "@isettingkit/input";

import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useEnumRules } from "@hooks/moneyDestination/useEnumRules";
import { useDecisionForm } from "@hooks/forms/useDecisionForm";
import { IMessageModal } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/decisions/IMessageModal";
import { IRulesFormTextValues } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/decisions/IRulesFormTextValues";
import { IEnumeratorsRules } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/decisions/IEnumeratorsRules";
import { DecisionsFormUI } from "./interface";

interface IDecisionsForm {
  attentionModal: IMessageModal;
  deleteModal: IMessageModal;
  initialValues: IRuleDecision[];
  labelBusinessRules: string;
  textValuesBusinessRules: IRulesFormTextValues;
  decisionTemplateConfig: (
    enumeratorsRules: IEnumeratorsRules,
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
    decisionTemplateConfig,
    onButtonClick,
    onPreviousStep,
    revertModalDisplayData,
    setDecisions,
  } = props;

  const {
    isModalOpen,
    selectedDecision,
    decisions,
    showAttentionModal,
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
      onSubmitForm={handleSubmitForm}
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
