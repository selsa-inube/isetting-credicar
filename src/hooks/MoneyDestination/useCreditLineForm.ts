import { useState } from "react";
import { IRuleDecision } from "@isettingkit/input";

const useCreditLineForm = (
  initialValues: IRuleDecision[],
  revertModalDisplayData: (
    dataDecision: IRuleDecision,
    originalDecision: IRuleDecision,
  ) => void,
  setCreditLineDecisions: (decisions: IRuleDecision[]) => void,
) => {
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
      ? (revertModalDisplayData(
          dataDecision,
          selectedDecision,
        ) as unknown as IRuleDecision)
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
  return {
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
  };
};

export { useCreditLineForm };
