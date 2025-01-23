import { MdOutlineArrowBack } from "react-icons/md";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";

import { ComponentAppearance } from "@ptypes/aparences.types";
import { Accordion } from "@design/data/Accordion";
import { tokens } from "@design/tokens";
import { DecisionModal } from "@components/modals/DecisionModal";
import { IRequestSteps } from "@design/feedback/RequestProcess/types";
import { RequestProcessModal } from "@components/modals/RequestProcessModal";
import { VerificationBoxes } from "./verificationBoxes";
import { IFormsUpdateData } from "./types";
import { addDestinationStepsConfig } from "../../addDestination/config/assisted.config";
import { finishModal } from "./config/messages.config";

interface IVerificationForm {
  requestSteps: IRequestSteps[];
  showModal: boolean;
  showRequestProcessModal: boolean;
  updatedData: IFormsUpdateData;
  handleStepChange: (stepId: number) => void;
  onFinishForm: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
}

function VerificationForm(props: IVerificationForm) {
  const {
    requestSteps,
    showModal,
    showRequestProcessModal,
    updatedData,
    handleStepChange,
    onFinishForm,
    onPreviousStep,
    onToggleModal,
  } = props;

  const isTablet = useMediaQuery("(max-width: 1224px)");

  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <Stack direction="column" gap={tokens.spacing.s300}>
      {addDestinationStepsConfig("")
        .filter((step) => step.name.toLowerCase() !== "verificación")
        .map((step) => (
          <Accordion title={step.name} key={`${step.id}-box`}>
            <Stack
              direction="column"
              width="100%"
              alignItems="flex-end"
              gap={isTablet ? tokens.spacing.s150 : tokens.spacing.s200}
            >
              <VerificationBoxes
                updatedData={updatedData}
                stepKey={Number(step.id)}
              />

              <Button
                iconBefore={<MdOutlineArrowBack />}
                onClick={() => handleStepChange(step.number)}
                appearance={ComponentAppearance.DARK}
                variant="none"
              >
                Regresar a este paso
              </Button>
            </Stack>
          </Accordion>
        ))}
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
          onClick={onToggleModal}
          appearance={ComponentAppearance.PRIMARY}
        >
          Finalizar
        </Button>
      </Stack>

      {showModal && (
        <DecisionModal
          portalId="portal"
          title={finishModal.title}
          description={finishModal.description}
          actionText={finishModal.actionText}
          onCloseModal={onToggleModal}
          onClick={onFinishForm}
        />
      )}
      {showRequestProcessModal && (
        <RequestProcessModal
          title="Procesando solicitud"
          description="Hemos recibido tu solicitud y se encuentra en proceso.Por favor, espera mientras la gestionamos."
          portalId="portal"
          requestSteps={requestSteps}
        />
      )}
    </Stack>
  );
}

export { VerificationForm };
