import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";
import { IRuleDecision } from "@isettingkit/input";

import { ComponentAppearance } from "@enum/appearances";
import { labelsOfRequest } from "@config/moneyDestination/requestsInProgressTab/details/labelsOfRequest";
import { labelsOfTraceability } from "@config/moneyDestination/requestsInProgressTab/details/labelsOfTraceability";
import { IServerDomain } from "@ptypes/IServerDomain";
import { IEntry } from "@design/data/table/types";
import { DetailsRequestsInProgressModal } from "@design/modals/detailsRequestsInProgressModal";
import { DetailsDestinationModal } from "@design/modals/detailsDestinationModal";
import {
  IDetailsTabsConfig,
  IMoreDetailsTabsConfig,
} from "@design/modals/detailsDestinationModal/types";
import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";
import { StyledContainerIcon } from "./styles";

interface IDetails {
  data: IEntry;
  dateOptions: IServerDomain[];
  decisions: IRuleDecision[];
  decisionTemplate: IRuleDecision;
  defaultSelectedTab: string;
  detailsTabsConfig: IDetailsTabsConfig;
  filteredTabsConfig: IDetailsTabsConfig;
  form: { name: string; dateTraceability: string };
  isMoreDetails: boolean;
  isSelected: string;
  moreDetailsData: IEntry;
  moreDetailsTabsConfig: IMoreDetailsTabsConfig;
  showModal: boolean;
  showMoreDetailsModal: boolean;
  textValuesBusinessRules: IRulesFormTextValues;
  onChange: (name: string, newValue: string) => void;
  onTabChange: (id: string) => void;
  onToggleModal: () => void;
  onToggleMoreDetailsModal: () => void;
  defaultSelectedMoreDetTab?: string;
  filteredTabsMoreDetConfig?: IMoreDetailsTabsConfig;
  isMobile: boolean;
  isSelectedMoreDetails?: string;
  onTabChangeMoreDetails?: (id: string) => void;
}

const DetailsRequestInProcess = (props: IDetails) => {
  const {
    data,
    dateOptions,
    decisions,
    decisionTemplate,
    defaultSelectedMoreDetTab,
    defaultSelectedTab,
    detailsTabsConfig,
    filteredTabsConfig,
    filteredTabsMoreDetConfig,
    form,
    isMobile,
    isMoreDetails,
    isSelected,
    isSelectedMoreDetails,
    moreDetailsData,
    moreDetailsTabsConfig,
    showModal,
    showMoreDetailsModal,
    textValuesBusinessRules,
    onChange,
    onTabChange,
    onTabChangeMoreDetails,
    onToggleModal,
    onToggleMoreDetailsModal,
  } = props;

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={ComponentAppearance.DARK}
          icon={<MdOutlineRemoveRedEye />}
          size={screenTablet ? "20px" : "16px"}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Detalles
          </Text>
        )}
      </StyledContainerIcon>

      {showModal && (
        <DetailsRequestsInProgressModal
          data={data}
          portalId="portal"
          dateOptions={dateOptions}
          labelsOfRequest={labelsOfRequest}
          labelsOfTraceability={labelsOfTraceability}
          dateSelected={form.dateTraceability}
          onCloseModal={onToggleModal}
          onChange={onChange}
          onMoreDetails={onToggleMoreDetailsModal}
        />
      )}

      {showMoreDetailsModal && (
        <DetailsDestinationModal
          data={moreDetailsData}
          detailsTabsConfig={detailsTabsConfig}
          moreDetailsTabsConfig={moreDetailsTabsConfig}
          portalId="portal"
          onCloseModal={onToggleMoreDetailsModal}
          textValues={textValuesBusinessRules}
          decisionTemplate={decisionTemplate}
          decisions={decisions}
          isMoreDetails={isMoreDetails}
          defaultSelectedTab={defaultSelectedTab}
          filteredTabsConfig={filteredTabsConfig}
          isMobile={isMobile}
          isSelected={isSelected ?? defaultSelectedTab}
          onTabChange={onTabChange}
          onMoreDetailsTabChange={onTabChangeMoreDetails}
          defaultSelectedMoreDetTab={defaultSelectedMoreDetTab}
          filteredTabsMoreDetConfig={filteredTabsMoreDetConfig}
          isSelectedMoreDetails={
            isSelectedMoreDetails ?? defaultSelectedMoreDetTab
          }
        />
      )}
    </>
  );
};

export { DetailsRequestInProcess };
