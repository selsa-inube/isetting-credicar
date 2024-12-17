import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Assisted, IAssistedStep } from "@inubekit/assisted";

import { Title } from "@components/data/Title";
import { crumbsAddDestination } from "@pages/moneyDestination/tabs/moneyDestinationTab/AddDestination/config/navigation";
import { tokens } from "@design/tokens";
import { GeneralInformationForm } from "../forms/GeneralInformation";
import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "../forms/GeneralInformation/types";

interface IAddDestinationUI {
  steps: IAssistedStep[];
  currentStep: number;
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialGeneralInformationValues: IGeneralInformationEntry;
  isCurrentFormValid: boolean;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStep: (step: number) => void;
  onPreviousStep: () => void;
  onNextStep: () => void;
  onSubmitClick: () => void;
}

function AddDestinationUI(props: IAddDestinationUI) {
  const {
    steps,
    currentStep,
    generalInformationRef,
    initialGeneralInformationValues,
    isCurrentFormValid,
    setIsCurrentFormValid,
    onPreviousStep,
    onNextStep,
    onSubmitClick,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 990px)");
  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${tokens.spacing.s200}`
          : `${tokens.spacing.s400} ${tokens.spacing.s800}`
      }
    >
      <Stack gap={tokens.spacing.s600} direction="column">
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
            onSubmitClick={onSubmitClick}
            disableNext={!isCurrentFormValid}
            controls={{
              goBackText: "Anterior",
              goNextText: "Siguiente",
              submitText: "Enviar",
            }}
          />
          <Stack direction="column">
            {currentStep === 1 && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialGeneralInformationValues}
                withNextButton={true}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
              />
            )}
            {currentStep === 2 && <></>}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export { AddDestinationUI };
