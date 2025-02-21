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
import { IDetailsTabsConfig } from "@design/modals/detailsDestinationModal/types";
import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";
import { StyledContainerIcon } from "./styles";

interface IDetails {
  data: IEntry;
  moreDetailsData: IEntry;
  showModal: boolean;
  showMoreDetailsModal: boolean;
  form: { name: string; dateTraceability: string };
  dateOptions: IServerDomain[];
  detailsTabsConfig: IDetailsTabsConfig;
  decisionTemplate: IRuleDecision;
  decisions: IRuleDecision[];
  textValuesBusinessRules: IRulesFormTextValues;
  onToggleModal: () => void;
  onToggleMoreDetailsModal: () => void;
  onChange: (name: string, newValue: string) => void;
}

const DetailsRequestInProcess = (props: IDetails) => {
  const {
    data,
    moreDetailsData,
    showModal,
    detailsTabsConfig,
    showMoreDetailsModal,
    form,
    dateOptions,
    decisions,
    decisionTemplate,
    textValuesBusinessRules,
    onToggleModal,
    onToggleMoreDetailsModal,
    onChange,
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
          portalId="portal"
          onCloseModal={onToggleMoreDetailsModal}
          textValues={textValuesBusinessRules}
          decisionTemplate={decisionTemplate}
          decisions={decisions}
        />
      )}
    </>
  );
};

export { DetailsRequestInProcess };
