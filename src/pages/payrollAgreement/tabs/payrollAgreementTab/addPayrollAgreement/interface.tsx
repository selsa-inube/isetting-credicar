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
import { RegularPaymentCyclesForm } from "@design/forms/regularPaymentCycles";
import { ExtraordinaryPaymentCyclesForm } from "@design/forms/extraordinaryPaymentCycles";
import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { VerificationForm } from "@design/forms/verificationPayrollAgreement";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IRequestSteps } from "@design/modals/requestProcessModal/types";
interface IAddPayrollAgreementUI {
  currentStep: number;
  extraordinaryPayment: IExtraordinaryCyclesEntry[];
  formReferences: IAddPayrollAgreementRef;
  formValid: boolean;
  initialGeneralInformationValues: IAddPayrollAgreementForms;
  isCurrentFormValid: boolean;
  loading: boolean;
  regularPaymentCycles: IOrdinaryCyclesEntry[];
  requestSteps: IRequestSteps[];
  savePayrollAgreement: ISaveDataResponse;
  showGoBackModal: boolean;
  showModal: boolean;
  showPendingReqModal: boolean;
  showRequestProcessModal: boolean;
  smallScreen: boolean;
  sourcesOfIncomeValues: IServerDomain[];
  steps: IAssistedStep[];
  typeRegularPayroll: boolean;
  onToggleModal: () => void;
  setSourcesOfIncomeValues: React.Dispatch<
    React.SetStateAction<IServerDomain[]>
  >;
  onOpenModal: () => void;
  onCloseModal: () => void;
  onGoBack: () => void;
  onNextStep: () => void;
  onPreviousStep: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  setExtraordinaryPayment: React.Dispatch<
    React.SetStateAction<IExtraordinaryCyclesEntry[]>
  >;
  setRegularPaymentCycles: React.Dispatch<
    React.SetStateAction<IOrdinaryCyclesEntry[]>
  >;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  onFinishForm: () => void;
  setCurrentStep: (step: number) => void;
}

const AddPayrollAgreementUI = (props: IAddPayrollAgreementUI) => {
  const {
    currentStep,
    extraordinaryPayment,
    formReferences,
    formValid,
    initialGeneralInformationValues,
    isCurrentFormValid,
    loading,
    regularPaymentCycles,
    requestSteps,
    savePayrollAgreement,
    showGoBackModal,
    showModal,
    showPendingReqModal,
    showRequestProcessModal,
    smallScreen,
    sourcesOfIncomeValues,
    steps,
    typeRegularPayroll,
    onCloseModal,
    onClosePendingReqModal,
    onCloseRequestStatus,
    onFinishForm,
    onGoBack,
    onNextStep,
    onOpenModal,
    onPreviousStep,
    onToggleModal,
    setCurrentStep,
    setExtraordinaryPayment,
    setIsCurrentFormValid,
    setRegularPaymentCycles,
    setSourcesOfIncomeValues,
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
            onSubmitClick={onToggleModal}
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
            {currentStep === 3 && (
              <RegularPaymentCyclesForm
                regularPaymentCycles={regularPaymentCycles}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onNextStep}
                onPreviousStep={onPreviousStep}
                setRegularPaymentCycles={setRegularPaymentCycles}
              />
            )}
            {currentStep === 4 && (
              <ExtraordinaryPaymentCyclesForm
                extraordinaryPayment={extraordinaryPayment}
                setExtraordinaryPayment={setExtraordinaryPayment}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onNextStep}
                onPreviousStep={onPreviousStep}
                typeRegularPayroll={typeRegularPayroll}
                regularPaymentCycles={regularPaymentCycles}
              />
            )}
            {currentStep === 5 && (
              <VerificationForm
                updatedData={{
                  company: {
                    isValid: isCurrentFormValid,
                    values: initialGeneralInformationValues.company.values,
                  },
                  generalInformation: {
                    isValid: isCurrentFormValid,
                    values:
                      initialGeneralInformationValues.generalInformation.values,
                  },
                  ordinaryCycles: {
                    isValid: formValid,
                    values: regularPaymentCycles,
                  },
                  extraordinaryCycles: {
                    isValid: formValid,
                    values: extraordinaryPayment,
                  },
                }}
                requestSteps={requestSteps}
                onPreviousStep={onPreviousStep}
                handleStepChange={(stepId) => setCurrentStep(stepId)}
                showModal={showModal}
                showRequestProcessModal={showRequestProcessModal}
                onToggleModal={onToggleModal}
                onFinishForm={onFinishForm}
                savePayrollAgreement={savePayrollAgreement}
                loading={loading}
                onCloseRequestStatus={onCloseRequestStatus}
                showPendingReqModal={showPendingReqModal}
                onClosePendingReqModal={onClosePendingReqModal}
                typeRegularPayroll={typeRegularPayroll}
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
