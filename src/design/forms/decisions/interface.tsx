import { MdAddCircleOutline, MdOutlineWarningAmber } from "react-icons/md";
import { IRuleDecision } from "@isettingkit/input";
import { BusinessRules } from "@isettingkit/business-rules";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";

import { tokens } from "@design/tokens";
import { DecisionModal } from "@components/modals/DecisionModal";
import { ComponentAppearance } from "@src/enum/appearances";
import { StyledContainer } from "./styles";
import { IMessageModal, IRulesFormTextValues } from "@design/forms/decisions/types";

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
  onNextStep: () => void;
  onPreviousStep: () => void;
  onCloseModal: () => void;
  onDelete: () => void;
  onOpenModal: () => void;
  onSubmitForm: (dataDecision: IRuleDecision) => void;
  onToggleAttentionModal: () => void;
  onToggleDeleteModal: (id: string) => void;
}

function DecisionsFormUI(props: IDecisionsFormUI) {
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
    onCloseModal,
    onDelete,
    onNextStep,
    onOpenModal,
    onPreviousStep,
    onSubmitForm,
    onToggleAttentionModal,
    onToggleDeleteModal,
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
            onClick={onPreviousStep}
            appearance={ComponentAppearance.GRAY}
          >
            Anterior
          </Button>

          <Button
            fullwidth={isMobile}
            onClick={
              decisions && decisions.length > 0
                ? onNextStep
                : onToggleAttentionModal
            }
            appearance={ComponentAppearance.PRIMARY}
          >
            Siguiente
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
            onClick={onNextStep}
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
}

export { DecisionsFormUI };
