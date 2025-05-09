import { MdAddCircleOutline, MdOutlineWarningAmber } from "react-icons/md";
import { BusinessRules } from "@isettingkit/business-rules";
import { Stack, useMediaQuery, Button } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { DecisionModal } from "@design/modals/decisionModal";
import { IDecisionsFormUI } from "@ptypes/decisions/IDecisionsFormUI";
import { decisionsLabels } from "@config/decisions/decisionsLabels";
import { StyledContainer } from "./styles";

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
    titleContentAddCard,
    messageEmptyDecisions,
    cancelButtonLabel,
    saveButtonLabel,
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
              {decisionsLabels.addButton}
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
            customTitleContentAddCard={titleContentAddCard}
            customMessageEmptyDecisions={messageEmptyDecisions}
          />
        </StyledContainer>

        <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
          <Button
            fullwidth={isMobile}
            onClick={editDataOption ? handleReset : onPreviousStep}
            appearance={ComponentAppearance.GRAY}
            disabled={editDataOption ? !hasChanges : false}
          >
            {cancelButtonLabel}
          </Button>

          <Button
            fullwidth={isMobile}
            onClick={onSave}
            appearance={ComponentAppearance.PRIMARY}
            disabled={editDataOption ? !hasChanges : false}
          >
            {saveButtonLabel}
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
