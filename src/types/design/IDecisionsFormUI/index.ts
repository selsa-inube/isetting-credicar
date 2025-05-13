import { IRuleDecision } from "@isettingkit/input";
import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";

interface IDecisionsFormUI {
  decisions: IRuleDecision[];
  decisionTemplate: IRuleDecision;
  deleteModal: IMessageModal;
  isModalOpen: boolean;
  loading: boolean;
  selectedDecision: IRuleDecision | null;
  showDeleteModal: boolean;
  textValuesBusinessRules: IRulesFormTextValues;
  hasChanges: boolean;
  isMobile: boolean;
  onButtonClick: () => void;
  onPreviousStep: () => void;
  onCloseModal: () => void;
  onDelete: () => void;
  onOpenModal: () => void;
  onSubmitForm: (dataDecision: IRuleDecision) => void;
  onToggleAttentionModal: () => void;
  onToggleDeleteModal: (id: string) => void;
  onSave: () => void;
  handleReset: () => void;
  disabledButton?: boolean;
  showAttentionModal?: boolean;
  attentionModal?: IMessageModal;
  editDataOption?: boolean;
  titleContentAddCard?: string;
  messageEmptyDecisions?: string;
}

export type { IDecisionsFormUI };
