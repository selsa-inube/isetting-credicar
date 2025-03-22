import {
  Assisted,
  Breadcrumbs,
  IAssistedStep,
  Stack,
  useMediaQuery,
} from "@inubekit/inubekit";

import { Title } from "@design/data/title";
import { tokens } from "@design/tokens";
import { IAddPayrollAgreementForms } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IAddPayrollAgreementForms";
import { IAddPayrollAgreementRef } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IAddPayrollAgreementRef";
import { crumbsAddPayrollAgreement } from "@config/payrollAgreement/payrollAgreementTab/navigation";
import { CompanyForm } from "@design/forms/companyPayrollAgreement";
import { RegularPaymentCyclesForm } from "@design/forms/regularPaymentCycles";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
interface IAddPayrollAgreementUI {
  currentStep: number;
  formReferences: IAddPayrollAgreementRef;
  initialGeneralInformationValues: IAddPayrollAgreementForms;
  isCurrentFormValid: boolean;
  steps: IAssistedStep[];
  regularPaymentCycles: IOrdinaryCyclesEntry[];
  setRegularPaymentCycles: React.Dispatch<
    React.SetStateAction<IOrdinaryCyclesEntry[]>
  >;
  onNextStep: () => void;
  onPreviousStep: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddPayrollAgreementUI = (props: IAddPayrollAgreementUI) => {
  const {
    currentStep,
    formReferences,
    initialGeneralInformationValues,
    setIsCurrentFormValid,
    isCurrentFormValid,
    steps,
    regularPaymentCycles,
    onNextStep,
    onPreviousStep,
    setRegularPaymentCycles,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 990px)");

  const formValid =
    regularPaymentCycles && regularPaymentCycles.length > 0
      ? false
      : !isCurrentFormValid;

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
          <Breadcrumbs crumbs={crumbsAddPayrollAgreement} />
          <Title
            title="Agregar nómina de convenio"
            description=" agrega nómina de convenio."
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
              console.log();
            }}
            disableNext={formValid}
            controls={{
              goBackText: "Anterior",
              goNextText: "Siguiente",
              submitText: "Finalizar",
            }}
            size={smallScreen ? "small" : "large"}
          />
          <Stack direction="column">
            {currentStep === 1 && (
              <CompanyForm
                ref={formReferences.company}
                initialValues={initialGeneralInformationValues.company.values}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onNextStep}
              />
            )}
            {currentStep === 3 && (
              <RegularPaymentCyclesForm
                regularPaymentCycles={regularPaymentCycles}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onNextStep}
                onPreviousStep={onPreviousStep}
                setRegularPaymentCycles={setRegularPaymentCycles}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AddPayrollAgreementUI };
