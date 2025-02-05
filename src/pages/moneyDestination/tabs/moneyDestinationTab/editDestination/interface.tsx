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

interface IEditDestinationUI {
  editDestinationTabsConfig: IEditDestinationTabsConfig;
  creditLineDecisions: IRuleDecision[];
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialGeneralInformationValues: IGeneralInformationEntry;
  isSelected: string;
  onTabChange: (id: string) => void;
  onButtonClick: () => void;
  handleReset: () => void;
  setCreditLineDecisions: (decisions: IRuleDecision[]) => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditDestinationUI = (props: IEditDestinationUI) => {
  const {
    creditLineDecisions,
    editDestinationTabsConfig,
    generalInformationRef,
    initialGeneralInformationValues,
    isSelected,
    onTabChange,
    onButtonClick,
    handleReset,
    setCreditLineDecisions,
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
              />
            )}
            {isSelected === editDestinationTabsConfig.creditLine.id && (
              <DecisionsForm
                attentionModal={attentionModal}
                deleteModal={deleteModal}
                textValuesBusinessRules={textValuesBusinessRules}
                decisionTemplateConfig={decisionTemplateConfig}
                onButtonClick={onButtonClick}
                onPreviousStep={handleReset}
                initialValues={creditLineDecisions}
                setDecisions={setCreditLineDecisions}
                revertModalDisplayData={revertModalDisplayData}
                labelBusinessRules="LineOfCredit"
                conditionForSwitchPlace={
                  initialGeneralInformationValues.nameDestination
                }
                editDataOption
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { EditDestinationUI };
