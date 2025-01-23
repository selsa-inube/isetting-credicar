import { useContext } from "react";
import { IRuleDecision } from "@isettingkit/input";

import { useDecisionForm } from "@hooks/forms/useDecisionForm";
import { useEnumRules } from "@hooks/MoneyDestination/useEnumRules";
import { AppContext } from "@context/AppContext";
import { DecisionsFormUI } from "./interface";
import {
  IEnumeratorsRules,
  IMessageModal,
  IRulesFormTextValues,
} from "./types";

interface IDecisionsForm {
  attentionModal: IMessageModal;
  deleteModal: IMessageModal;
  initialValues: IRuleDecision[];
  labelBusinessRules: string;
  textValuesBusinessRules: IRulesFormTextValues;
  decisionTemplateConfig: (
    enumeratorsRules: IEnumeratorsRules,
  ) => IRuleDecision | undefined;
  onNextStep: () => void;
  onPreviousStep: () => void;
  setDecisions: (decisions: IRuleDecision[]) => void;
  revertModalDisplayData: (
    dataDecision: IRuleDecision,
    originalDecision: IRuleDecision,
  ) => void;
}

const DecisionsForm = (props: IDecisionsForm) => {
  const {
    attentionModal,
    deleteModal,
    initialValues,
    labelBusinessRules,
    textValuesBusinessRules,
    decisionTemplateConfig,
    onNextStep,
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
    handleOpenModal,
    handleCloseModal,
    handleSubmitForm,
    handleToggleAttentionModal,
    handleToggleDeleteModal,
    handleDelete,
  } = useDecisionForm(initialValues, revertModalDisplayData, setDecisions);

  const { appData } = useContext(AppContext);
  const { enumRuleData } = useEnumRules(
    labelBusinessRules,
    appData.businessUnit.publicCode,
  );

  return (
    <DecisionsFormUI
      attentionModal={attentionModal}
      decisions={decisions}
      decisionTemplate={
        decisionTemplateConfig(enumRuleData) ?? ({} as IRuleDecision)
      }
      deleteModal={deleteModal}
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
      textValuesBusinessRules={textValuesBusinessRules}
    />
  );
};

export { DecisionsForm };
export type { IDecisionsForm };
