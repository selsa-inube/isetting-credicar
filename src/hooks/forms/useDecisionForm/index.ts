import { useState, useEffect } from "react";
import { IRuleDecision } from "@isettingkit/input";

const useDecisionForm = (
  initialValues: IRuleDecision[],
  revertModalDisplayData: (
    dataDecision: IRuleDecision,
    originalDecision: IRuleDecision,
  ) => void,
  onButtonClick: () => void,
  setCreditLineDecisions: (decisions: IRuleDecision[]) => void,
  editDataOption?: boolean,
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDecision, setSelectedDecision] =
    useState<IRuleDecision | null>(null);
  const [decisions, setDecisions] = useState<IRuleDecision[]>(initialValues);
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState("");
  const [hasChanges, setHasChanges] = useState(false);
  const [savedDecisions, setSavedDecisions] = useState<IRuleDecision[]>([]);

  const initialDecisions = useState(initialValues)[0];

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
          decisionId: `Decisión ${decisions.length + 1}`,
        };

    const updatedDecisions = isEditing
      ? decisions.map((decision) =>
          decision.decisionId === selectedDecision.decisionId
            ? newDecision
            : decision,
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
    const updatedDecisions = decisions.filter(
      (decision) => decision.decisionId !== id,
    );
    setDecisions(updatedDecisions);
    setCreditLineDecisions(updatedDecisions);
    handleToggleDeleteModal(id);
  };

  const handleSave = () => {
    if (editDataOption) {
      setHasChanges(false);
      setSavedDecisions(decisions);
      return decisions;
    } else {
      if (decisions && decisions.length > 0) {
        onButtonClick();
        setSavedDecisions(decisions);
      } else {
        handleToggleAttentionModal();
      }
    }
  };

  const handleReset = () => {
    setDecisions(initialDecisions);
    setSavedDecisions(initialDecisions);
  };

  useEffect(() => {
    if (JSON.stringify(decisions) !== JSON.stringify(initialDecisions)) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [decisions, initialDecisions]);

  return {
    isModalOpen,
    selectedDecision,
    decisions,
    showAttentionModal,
    showDeleteModal,
    hasChanges,
    savedDecisions,
    handleOpenModal,
    handleCloseModal,
    handleSubmitForm,
    handleToggleAttentionModal,
    handleToggleDeleteModal,
    handleDelete,
    handleSave,
    handleReset,
  };
};

export { useDecisionForm };
