import { FormikProps } from "formik";
import { IRuleDecision } from "@isettingkit/input";
import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inubekit/inubekit";

import { Title } from "@design/data/title";
import { tokens } from "@design/tokens";
import { GeneralInformationForm } from "@design/forms/generalInformationDestination";
import { DecisionsForm } from "@design/forms/decisions";

import { revertModalDisplayData } from "@utils/revertModalDisplayData";
import { IGeneralInformationEntry } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IGeneralInformationDestination";
import { crumbsEditDestination } from "@config/moneyDestination/editDestination/navigation";
import { textValuesBusinessRules } from "@config/moneyDestination/moneyDestinationTab/businessRules";
import { IEditDestinationTabsConfig } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/tabs/ITabConfig/IEditDestinationTabsConfig";
import { attentionModal, deleteModal } from "@config/decisions/messages";
import { decisionTemplateConfig } from "@config/decisions/decisionTemplateDestination";
import { DecisionModal } from "@design/modals/decisionModal";
import { RequestProcessModal } from "@design/modals/requestProcessModal";
import { IRequestSteps } from "@design/feedback/RequestProcess/types";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ComponentAppearance } from "@enum/appearances";
import { requestPendingModal } from "@config/moneyDestination/moneyDestinationTab/generics/requestPendingModal";
import { requestProcessMessage } from "@config/moneyDestination/moneyDestinationTab/generics/requestProcessMessage";
import { requestStatusMessage } from "@config/moneyDestination/moneyDestinationTab/generics/requestStatusMessage";

interface IEditDestinationUI {
  editDestinationTabsConfig: IEditDestinationTabsConfig;
  creditLineDecisions: IRuleDecision[];
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialGeneralInformationValues: IGeneralInformationEntry;
  isSelected: string;
  requestSteps: IRequestSteps[];
  loading: boolean;
  showPendingReqModal: boolean;
  showRequestProcessModal: boolean;
  saveMoneyDestination: ISaveDataResponse;
  onTabChange: (id: string) => void;
  onButtonClick: () => void;
  onReset: () => void;
  setCreditLineDecisions: (decisions: IRuleDecision[]) => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
}

const EditDestinationUI = (props: IEditDestinationUI) => {
  const {
    creditLineDecisions,
    editDestinationTabsConfig,
    generalInformationRef,
    initialGeneralInformationValues,
    isSelected,
    saveMoneyDestination,
    requestSteps,
    loading,
    showPendingReqModal,
    showRequestProcessModal,
    onTabChange,
    onButtonClick,
    onReset,
    setCreditLineDecisions,
    setIsCurrentFormValid,
    onCloseRequestStatus,
    onClosePendingReqModal,
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
          <Breadcrumbs crumbs={crumbsEditDestination} />
          <Title
            title="Destinos de dinero"
            description=" Destino del dinero para crédito."
            sizeTitle="large"
          />
        </Stack>
        <Stack gap={tokens.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(editDestinationTabsConfig)}
            selectedTab={isSelected}
            onChange={onTabChange}
          />
          <Stack direction="column">
            {isSelected === editDestinationTabsConfig.generalInformation.id && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialGeneralInformationValues}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onButtonClick}
                editDataOption
                loading={loading}
              />
            )}
            {isSelected === editDestinationTabsConfig.creditLine.id && (
              <DecisionsForm
                attentionModal={attentionModal}
                deleteModal={deleteModal}
                textValuesBusinessRules={textValuesBusinessRules}
                decisionTemplateConfig={decisionTemplateConfig}
                onButtonClick={onButtonClick}
                onPreviousStep={onReset}
                initialValues={creditLineDecisions}
                setDecisions={setCreditLineDecisions}
                revertModalDisplayData={revertModalDisplayData}
                labelBusinessRules="LineOfCredit"
                nameMoneyDestination={
                  initialGeneralInformationValues.nameDestination
                }
                editDataOption
                showAttentionModal={false}
                setShowAttentionModal={() => console.log()}
                titleContentAddCard="Agregar línea de crédito"
                messageEmptyDecisions="Agrega línea de crédito"
              />
            )}
          </Stack>
        </Stack>
      </Stack>
      {showRequestProcessModal && (
        <RequestProcessModal
          portalId="portal"
          saveData={saveMoneyDestination}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          loading={loading}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={onCloseRequestStatus}
        />
      )}
      {showPendingReqModal && saveMoneyDestination.requestNumber && (
        <DecisionModal
          portalId="portal"
          title={requestPendingModal(saveMoneyDestination.requestNumber).title}
          description={
            requestPendingModal(saveMoneyDestination.requestNumber).description
          }
          actionText={
            requestPendingModal(saveMoneyDestination.requestNumber).actionText
          }
          onCloseModal={onClosePendingReqModal}
          onClick={onClosePendingReqModal}
          withCancelButton={false}
        />
      )}
    </Stack>
  );
};

export { EditDestinationUI };
