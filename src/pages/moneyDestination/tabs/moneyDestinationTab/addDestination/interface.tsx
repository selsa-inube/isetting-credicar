import { FormikProps } from "formik";
import { IRuleDecision } from "@isettingkit/input";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Assisted, IAssistedStep } from "@inubekit/assisted";

import { Title } from "@components/data/Title";
import { crumbsAddDestination } from "@config/moneyDestination/addDestination/navigation";
import { tokens } from "@design/tokens";
import { IRequestSteps } from "@design/feedback/RequestProcess/types";
import { GeneralInformationForm } from "@pages/moneyDestination/tabs/moneyDestinationTab/forms/generalInformation";
import { IGeneralInformationEntry } from "@pages/moneyDestination/tabs/moneyDestinationTab/forms/generalInformation/types";
import { CreditLineForm } from "@pages/moneyDestination/tabs/moneyDestinationTab/forms/creditLine";
import { VerificationForm } from "@pages/moneyDestination/tabs/moneyDestinationTab/forms/verificationForm";

interface IAddDestinationUI {
  creditLineDecisions: IRuleDecision[];
  currentStep: number;
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialGeneralInformationValues: IGeneralInformationEntry;
  isCurrentFormValid: boolean;
  requestSteps: IRequestSteps[];
  showModal: boolean;
  showRequestProcessModal: boolean;
  steps: IAssistedStep[];
  onFinishForm: () => void;
  onNextStep: () => void;
  onPreviousStep: () => void;
  onToggleModal: () => void;
  setCreditLineDecisions: (decisions: IRuleDecision[]) => void;
  setCurrentStep: (step: number) => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddDestinationUI(props: IAddDestinationUI) {
  const {
    creditLineDecisions,
    currentStep,
    generalInformationRef,
    initialGeneralInformationValues,
    isCurrentFormValid,
    requestSteps,
    showModal,
    showRequestProcessModal,
    steps,
    onFinishForm,
    onNextStep,
    onPreviousStep,
    onToggleModal,
    setCreditLineDecisions,
    setCurrentStep,
    setIsCurrentFormValid,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 990px)");

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${tokens.spacing.s200}`
          : `${tokens.spacing.s300} ${tokens.spacing.s800}`
      }
    >
      <Stack gap={tokens.spacing.s300} direction="column">
        <Stack gap={tokens.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsAddDestination} />
          <Title
            title="Destinos de dinero"
            description=" Destino del dinero para crédito."
            sizeTitle="large"
          />
        </Stack>
        <Stack gap={tokens.spacing.s300} direction="column">
          <Assisted
            step={steps[currentStep - 1]}
            totalSteps={steps.length}
            onBackClick={onPreviousStep}
            onNextClick={onNextStep}
            onSubmitClick={onToggleModal}
            disableNext={!isCurrentFormValid}
            controls={{
              goBackText: "Anterior",
              goNextText: "Siguiente",
              submitText: "Finalizar",
            }}
            size={smallScreen ? "small" : "large"}
          />
          <Stack direction="column">
            {currentStep === 1 && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialGeneralInformationValues}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
              />
            )}
            {currentStep === 2 && (
              <CreditLineForm
                onNextStep={onNextStep}
                onPreviousStep={onPreviousStep}
                initialValues={creditLineDecisions}
                setCreditLineDecisions={setCreditLineDecisions}
              />
            )}
            {currentStep === 3 && (
              <VerificationForm
                updatedData={{
                  personalInformation: {
                    isValid: isCurrentFormValid,
                    values: initialGeneralInformationValues,
                  },
                  creditline: {
                    isValid: true,
                    values: creditLineDecisions,
                  },
                }}
                requestSteps={requestSteps}
                onPreviousStep={onPreviousStep}
                handleStepChange={(stepId) => setCurrentStep(stepId)}
                showModal={showModal}
                showRequestProcessModal={showRequestProcessModal}
                onToggleModal={onToggleModal}
                onFinishForm={onFinishForm}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export { AddDestinationUI };
