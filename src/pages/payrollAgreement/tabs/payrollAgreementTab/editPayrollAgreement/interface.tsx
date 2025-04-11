import { MdOutlineWarningAmber } from "react-icons/md";
import { FormikProps } from "formik";
import { Breadcrumbs, Stack, Tabs } from "@inubekit/inubekit";

import { IEditPayrollAgreementForms } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IEditPayrollAgreementForms";
import { IGeneralInformationEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IGeneralInformationPayroll";
import { requestStatusMessage } from "@config/payrollAgreement/payrollAgreementTab/generic/requestStatusMessage";
import { requestProcessMessage } from "@config/payrollAgreement/payrollAgreementTab/generic/requestProcessMessage";
import { crumbsEditPayrollAgreement } from "@config/payrollAgreement/payrollAgreementTab/edit/navigation";
import { editPayrollAgTabsConfig } from "@config/payrollAgreement/payrollAgreementTab/edit/tab";
import { goBackModal } from "@config/payrollAgreement/payrollAgreementTab/forms/goBackModal";
import { GeneralInformationPayrollForm } from "@design/forms/generalInfoPayrollAgreement";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { RequestProcess } from "@design/feedback/RequestProcess";
import { DecisionModal } from "@design/modals/decisionModal";
import { ComponentAppearance } from "@enum/appearances";
import { IServerDomain } from "@ptypes/IServerDomain";
import { Title } from "@design/data/title";
import { tokens } from "@design/tokens";
import { IRequestSteps } from "@design/modals/requestProcessModal/types";
import { sendEditedModal } from "@config/payrollAgreement/payrollAgreementTab/generic/sendEditModal";
import { RegularPaymentCyclesForm } from "@design/forms/regularPaymentCycles";
import { ExtraordinaryPaymentCyclesForm } from "@design/forms/extraordinaryPaymentCycles";
import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { IEditPayrollTabsConfig } from "@ptypes/payrollAgreement/payrollAgreementTab/IEditPayrollTabsConfig";
import { deletedAlertModal } from "@config/payrollAgreement/payrollAgreementTab/generic/deletedAlertModal";

interface IEditPayrollAgreementUI {
  isSelected: string;
  onTabChange: (id: string) => void;
  formReferences: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  formValues: IEditPayrollAgreementForms;
  initialValues: IEditPayrollAgreementForms;
  smallScreen: boolean;
  sourcesOfIncomeValues: IServerDomain[];
  companyAgreement: string;
  showGoBackModal: boolean;
  showRequestProcessModal: boolean;
  savePayrollAgreement: ISaveDataResponse;
  showPendingReqModal: boolean;
  requestSteps: IRequestSteps[];
  showEditedModal: boolean;
  loadingSendData: boolean;
  typeRegularPayroll: boolean;
  regularPaymentCycles: IOrdinaryCyclesEntry[];
  extraordinaryPayment: IExtraordinaryCyclesEntry[];
  filteredTabsConfig: IEditPayrollTabsConfig;
  showDeletedAlertModal: boolean;
  setExtraordinaryPayment: React.Dispatch<
    React.SetStateAction<IExtraordinaryCyclesEntry[]>
  >;
  setRegularPaymentCycles: React.Dispatch<
    React.SetStateAction<IOrdinaryCyclesEntry[]>
  >;
  setSourcesOfIncomeValues: React.Dispatch<
    React.SetStateAction<IServerDomain[]>
  >;
  handleOpenModal: () => void;
  onReset: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseGoBackModal: () => void;
  onGoBack: () => void;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  onToggleEditedModal: () => void;
  onEditedModal: () => void;
  onToggleDeletedAlertModal: () => void;
}

const EditPayrollAgreementUI = (props: IEditPayrollAgreementUI) => {
  const {
    formReferences,
    formValues,
    isSelected,
    initialValues,
    smallScreen,
    sourcesOfIncomeValues,
    companyAgreement,
    showGoBackModal,
    showRequestProcessModal,
    savePayrollAgreement,
    showPendingReqModal,
    requestSteps,
    showEditedModal,
    loadingSendData,
    regularPaymentCycles,
    typeRegularPayroll,
    extraordinaryPayment,
    filteredTabsConfig,
    showDeletedAlertModal,
    setExtraordinaryPayment,
    setRegularPaymentCycles,
    onTabChange,
    handleOpenModal,
    onReset,
    setIsCurrentFormValid,
    setSourcesOfIncomeValues,
    onCloseGoBackModal,
    onGoBack,
    onCloseRequestStatus,
    onClosePendingReqModal,
    onToggleEditedModal,
    onEditedModal,
    onToggleDeletedAlertModal,
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
          <Breadcrumbs crumbs={crumbsEditPayrollAgreement} />
          <Title
            title="Editar nómina de convenio"
            description="Edita nómina de convenio."
            sizeTitle="large"
            navigatePage="/payroll-agreement"
            onClick={handleOpenModal}
          />
        </Stack>
        <Stack gap={tokens.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(filteredTabsConfig)}
            selectedTab={isSelected}
            onChange={onTabChange}
          />
          <Stack direction="column">
            {isSelected === editPayrollAgTabsConfig.generalInformation.id && (
              <GeneralInformationPayrollForm
                ref={formReferences}
                initialValues={formValues.generalInformation.values}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onToggleEditedModal}
                onReset={onReset}
                sourcesOfIncomeValues={sourcesOfIncomeValues}
                setSourcesOfIncomeValues={setSourcesOfIncomeValues}
                editDataOption
                companyAgreement={companyAgreement}
                initialGeneralInfData={initialValues.generalInformation.values}
              />
            )}
            {typeRegularPayroll &&
              isSelected ===
                editPayrollAgTabsConfig.regularPaymentCycles.id && (
                <RegularPaymentCyclesForm
                  regularPaymentCycles={regularPaymentCycles}
                  onFormValid={setIsCurrentFormValid}
                  onButtonClick={onToggleEditedModal}
                  onPreviousStep={onReset}
                  setRegularPaymentCycles={setRegularPaymentCycles}
                  editDataOption
                  initialData={initialValues.ordinaryCycles.values}
                />
              )}
            {isSelected ===
              editPayrollAgTabsConfig.extraordinaryPaymentCycles.id && (
              <ExtraordinaryPaymentCyclesForm
                extraordinaryPayment={extraordinaryPayment}
                setExtraordinaryPayment={setExtraordinaryPayment}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onToggleEditedModal}
                onPreviousStep={onReset}
                typeRegularPayroll={typeRegularPayroll}
                regularPaymentCycles={regularPaymentCycles}
                initialData={initialValues.extraordinaryCycles.values}
                editDataOption
              />
            )}
          </Stack>
        </Stack>
      </Stack>

      {showEditedModal && (
        <DecisionModal
          portalId="portal"
          title={sendEditedModal.title}
          description={sendEditedModal.description}
          actionText={sendEditedModal.actionText}
          onCloseModal={onToggleEditedModal}
          onClick={onEditedModal}
          isLoading={loadingSendData}
        />
      )}

      {showGoBackModal && (
        <DecisionModal
          portalId="portal"
          title={goBackModal.title}
          description={goBackModal.description}
          actionText={goBackModal.actionText}
          onCloseModal={onCloseGoBackModal}
          onClick={onGoBack}
        />
      )}
      {showDeletedAlertModal && (
        <DecisionModal
          portalId="portal"
          title={deletedAlertModal.title}
          description={deletedAlertModal.description}
          actionText={deletedAlertModal.actionText}
          withIcon
          withCancelButton={false}
          icon={<MdOutlineWarningAmber />}
          appearance={ComponentAppearance.WARNING}
          onCloseModal={onToggleDeletedAlertModal}
          onClick={onToggleDeletedAlertModal}
          moreDetails={deletedAlertModal.moreDetails}
        />
      )}
      {showRequestProcessModal && (
        <RequestProcess
          portalId="portal"
          saveData={savePayrollAgreement}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={onCloseRequestStatus}
        />
      )}
      {showPendingReqModal && savePayrollAgreement.requestNumber && (
        <RequestStatusModal
          portalId="portal"
          title={requestStatusMessage(savePayrollAgreement.responsible).title}
          description={
            requestStatusMessage(savePayrollAgreement.responsible).description
          }
          requestNumber={savePayrollAgreement.requestNumber}
          onClick={onClosePendingReqModal}
          onCloseModal={onClosePendingReqModal}
          isLoading={false}
          actionText={
            requestStatusMessage(savePayrollAgreement.responsible).actionText
          }
          appearance={ComponentAppearance.PRIMARY}
        />
      )}
    </Stack>
  );
};

export { EditPayrollAgreementUI };
