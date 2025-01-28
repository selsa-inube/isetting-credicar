import { MdAddCircleOutline, MdOutlineWarningAmber } from "react-icons/md";
import { IRuleDecision } from "@isettingkit/input";
import { BusinessRules } from "@isettingkit/business-rules";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";

import { tokens } from "@design/tokens";
import { DecisionModal } from "@components/modals/DecisionModal";
import { ComponentAppearance } from "@enum/appearances";
import { IMessageModal } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/decisions/IMessageModal";
import { IRulesFormTextValues } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/decisions/IRulesFormTextValues";
import { StyledContainer } from "./styles";

interface IDecisionsFormUI {
  attentionModal: IMessageModal;
  decisions: IRuleDecision[];
  decisionTemplate: IRuleDecision;
  deleteModal: IMessageModal;
  isModalOpen: boolean;
  loading: boolean;
  selectedDecision: IRuleDecision | null;
  showAttentionModal: boolean;
  showDeleteModal: boolean;
  textValuesBusinessRules: IRulesFormTextValues;
  hasChanges: boolean;
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
  editDataOption?: boolean;
}

const DecisionsFormUI = (props: IDecisionsFormUI) => {
  const {
    attentionModal,
    decisions,
    decisionTemplate,
    deleteModal,
    isModalOpen,
    loading,
    selectedDecision,
    showAttentionModal,
    showDeleteModal,
    textValuesBusinessRules,
    editDataOption,
    hasChanges,
    onCloseModal,
    onDelete,
    onButtonClick,
    onOpenModal,
    onPreviousStep,
    onSubmitForm,
    onToggleAttentionModal,
    onToggleDeleteModal,
    onSave,
    handleReset,
  } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <form>
      <Stack direction="column" gap={tokens.spacing.s300}>
        <StyledContainer $isMobile={isMobile}>
          <Stack
            justifyContent="flex-end"
            alignItems="center"
            gap={tokens.spacing.s250}
          >
            <Button
              iconBefore={<MdAddCircleOutline />}
              spacing="wide"
              onClick={onOpenModal}
              fullwidth={isMobile}
            >
              Agregar decisión
            </Button>
          </Stack>
          <BusinessRules
            decisions={decisions}
            textValues={textValuesBusinessRules}
            loading={loading}
            decisionTemplate={decisionTemplate}
            isModalOpen={isModalOpen}
            selectedDecision={selectedDecision}
            handleOpenModal={onOpenModal}
            handleCloseModal={onCloseModal}
            handleSubmitForm={onSubmitForm}
            handleDelete={onToggleDeleteModal}
          />
        </StyledContainer>

        <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
          <Button
            fullwidth={isMobile}
            onClick={editDataOption ? handleReset : onPreviousStep}
            appearance={ComponentAppearance.GRAY}
            disabled={editDataOption ? !hasChanges : false}
          >
            {editDataOption ? "Cancelar" : "Anterior"}
          </Button>

          <Button
            fullwidth={isMobile}
            onClick={onSave}
            appearance={ComponentAppearance.PRIMARY}
            disabled={editDataOption ? !hasChanges : false}
          >
            {editDataOption ? "Guardar" : "Siguiente"}
          </Button>
        </Stack>
        {showAttentionModal && (
          <DecisionModal
            portalId="portal"
            title={attentionModal.title}
            description={attentionModal.description}
            actionText={attentionModal.actionText}
            withIcon
            icon={<MdOutlineWarningAmber />}
            appearance={ComponentAppearance.WARNING}
            onCloseModal={onToggleAttentionModal}
            onClick={onButtonClick}
          />
        )}
        {showDeleteModal && (
          <DecisionModal
            portalId="portal"
            title={deleteModal.title}
            description={deleteModal.description}
            actionText={deleteModal.actionText}
            onCloseModal={() => onToggleDeleteModal("")}
            onClick={onDelete}
          />
        )}
      </Stack>
    </form>
  );
};

export { DecisionsFormUI };
