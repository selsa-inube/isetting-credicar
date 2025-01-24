import { MdAddCircleOutline, MdOutlineWarningAmber } from "react-icons/md";
import { IRuleDecision } from "@isettingkit/input";
import { BusinessRules } from "@isettingkit/business-rules";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";

import { tokens } from "@design/tokens";
import { DecisionModal } from "@components/modals/DecisionModal";
import { ComponentAppearance } from "@ptypes/aparences.types";
import {
  attentionModal,
  deleteModal,
} from "@design/forms/decisions/config/messages.config";
import { StyledContainer } from "./styles";
import { textValuesBusinessRules } from "@config/moneyDestination/moneyDestinationTab/businessRules";

interface ICreditLineFormUI {
  decisions: IRuleDecision[];
  decisionTemplate: IRuleDecision;
  isModalOpen: boolean;
  loading: boolean;
  selectedDecision: IRuleDecision | null;
  showAttentionModal: boolean;
  showDeleteModal: boolean;
  onNextStep: () => void;
  onPreviousStep: () => void;
  onCloseModal: () => void;
  onDelete: () => void;
  onOpenModal: () => void;
  onSubmitForm: (dataDecision: IRuleDecision) => void;
  onToggleAttentionModal: () => void;
  onToggleDeleteModal: (id: string) => void;
}

function CreditLineFormUI(props: ICreditLineFormUI) {
  const {
    decisions,
    decisionTemplate,
    isModalOpen,
    loading,
    selectedDecision,
    showAttentionModal,
    showDeleteModal,
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

export { CreditLineFormUI };
