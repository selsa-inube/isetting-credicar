import { useContext, useState } from "react";
import { IRuleDecision } from "@isettingkit/input";

import { AppContext } from "@context/AppContext";
import { useEnumRules } from "@hooks/MoneyDestination/useEnumRules";
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

  const { appData } = useContext(AppContext);
  const { enumRuleData } = useEnumRules(
    "LineOfCredit",
    appData.businessUnit.publicCode,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDecision, setSelectedDecision] =
    useState<IRuleDecision | null>(null);
  const [decisions, setDecisions] = useState<IRuleDecision[]>(initialValues);
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState("");

  const handleOpenModal = () => {
    setSelectedDecision(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDecision(null);
  };

  const handleSubmitForm = (dataDecision: IRuleDecision) => {
    const isEditing = selectedDecision !== null;

    const newDecision = isEditing
      ? revertModalDisplayData(dataDecision, selectedDecision)
      : {
          ...dataDecision,
          id: `Decisión ${decisions.length + 1}`,
        };

    const updatedDecisions = isEditing
      ? decisions.map((decision) =>
          decision.id === selectedDecision.id ? newDecision : decision,
        )
      : [...decisions, newDecision];

    setDecisions(updatedDecisions);
    setCreditLineDecisions(updatedDecisions);

    handleCloseModal();
  };

  const handleToggleAttentionModal = () => {
    setShowAttentionModal(!showAttentionModal);
  };

  const handleToggleDeleteModal = (id: string) => {
    setId(id);
    setShowDeleteModal(!showDeleteModal);
  };

  const handleDelete = () => {
    const updatedDecisions = decisions.filter((decision) => decision.id !== id);
    setDecisions(updatedDecisions);
    setCreditLineDecisions(updatedDecisions);
    handleToggleDeleteModal(id);
  };

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
