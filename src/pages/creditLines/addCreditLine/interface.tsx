import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Assisted, IAssistedStep } from "@inubekit/assisted";

import { Title } from "@components/data/Title";
import { tokens } from "@design/tokens";
import { GeneralInformationForm } from "../forms/GeneralInformation";
import { crumbsAddCreditLines } from "./config/navigation";
import { CreditProspectForm } from "../../../design/forms/creditProspect";
import { IFormsCreditlines, IFormsCreditlinesRefs } from "./types";
import { IOptionsProspect } from "@src/design/forms/creditProspect/types";

interface IAddCreditLinesUI {
  currentStep: number;
  formReferences: IFormsCreditlinesRefs;
  initialValues: IFormsCreditlines;
  isCurrentFormValid: boolean;
  steps: IAssistedStep[];
  onNextStep: () => void;
  onPreviousStep: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  optionsProspect: IOptionsProspect[];
  setOptionsProspect: React.Dispatch<React.SetStateAction<IOptionsProspect[]>>;
}

function AddCreditLinesUI(props: IAddCreditLinesUI) {
  const {
    currentStep,
    formReferences,
    initialValues,
    isCurrentFormValid,
    steps,
    onNextStep,
    onPreviousStep,
    setIsCurrentFormValid,
    optionsProspect,
    setOptionsProspect,
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
          <Breadcrumbs crumbs={crumbsAddCreditLines} />
          <Title
            title="Líneas de crédito"
            description="Registra los medios de pago"
            sizeTitle="large"
          />
        </Stack>
        <Stack gap={tokens.spacing.s300} direction="column">
          <Assisted
            step={steps[currentStep - 1]}
            totalSteps={steps.length}
            onBackClick={onPreviousStep}
            onNextClick={onNextStep}
            onSubmitClick={() => {
              console.log("");
            }}
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
                ref={formReferences.generalInformation}
                initialValues={initialValues.generalInformation.values}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
              />
            )}
            {currentStep === 2 && (
              <CreditProspectForm
                ref={formReferences.creditProspect}
                initialValues={initialValues.creditProspect.values}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
                onPreviousStep={onPreviousStep}
                optionsProspect={optionsProspect}
                setOptionsProspect={setOptionsProspect}
                isFormValid={isCurrentFormValid}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export { AddCreditLinesUI };
