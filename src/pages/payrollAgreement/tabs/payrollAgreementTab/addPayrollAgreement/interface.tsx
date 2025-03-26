import {
  Assisted,
  Breadcrumbs,
  IAssistedStep,
  Stack,
} from "@inubekit/inubekit";

import { Title } from "@design/data/title";
import { tokens } from "@design/tokens";
import { IAddPayrollAgreementForms } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IAddPayrollAgreementForms";
import { IAddPayrollAgreementRef } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IAddPayrollAgreementRef";
import { crumbsAddPayrollAgreement } from "@config/payrollAgreement/payrollAgreementTab/navigation";
import { CompanyForm } from "@design/forms/companyPayrollAgreement";
import { DecisionModal } from "@design/modals/decisionModal";
import { goBackModal } from "@config/payrollAgreement/payrollAgreementTab/forms/goBackModal";
import { IServerDomain } from "@ptypes/IServerDomain";
import { GeneralInformationPayrollForm } from "@design/forms/generalInfoPayrollAgreement";
interface IAddPayrollAgreementUI {
  currentStep: number;
  formReferences: IAddPayrollAgreementRef;
  initialGeneralInformationValues: IAddPayrollAgreementForms;
  isCurrentFormValid: boolean;
  steps: IAssistedStep[];
  sourcesOfIncomeValues: IServerDomain[];
  smallScreen: boolean;
  setSourcesOfIncomeValues: React.Dispatch<
    React.SetStateAction<IServerDomain[]>
  >;
  showGoBackModal: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
  onGoBack: () => void;
  onNextStep: () => void;
  onPreviousStep: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddPayrollAgreementUI = (props: IAddPayrollAgreementUI) => {
  const {
    currentStep,
    formReferences,
    initialGeneralInformationValues,
    isCurrentFormValid,
    steps,
    showGoBackModal,
    smallScreen,
    onOpenModal,
    onCloseModal,
    sourcesOfIncomeValues,
    setSourcesOfIncomeValues,
    setIsCurrentFormValid,
    onNextStep,
    onPreviousStep,
    onGoBack,
  } = props;

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
            onClick={onOpenModal}
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
              <CompanyForm
                ref={formReferences.company}
                initialValues={initialGeneralInformationValues.company.values}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onNextStep}
              />
            )}
            {currentStep === 2 && (
              <GeneralInformationPayrollForm
                ref={formReferences.generalInformation}
                initialValues={
                  initialGeneralInformationValues.generalInformation.values
                }
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onNextStep}
                onPreviousStep={onPreviousStep}
                sourcesOfIncomeValues={sourcesOfIncomeValues}
                setSourcesOfIncomeValues={setSourcesOfIncomeValues}
              />
            )}
          </Stack>
        </Stack>
      </Stack>

      {showGoBackModal && (
        <DecisionModal
          portalId="portal"
          title={goBackModal.title}
          description={goBackModal.description}
          actionText={goBackModal.actionText}
          onCloseModal={onCloseModal}
          onClick={onGoBack}
        />
      )}
    </Stack>
  );
};

export { AddPayrollAgreementUI };
