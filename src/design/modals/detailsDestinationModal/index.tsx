import { IRuleDecision } from "@isettingkit/input";

import { IEntry } from "@design/data/table/types";
import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";
import { useDetailsDestinationModal } from "@hooks/design/useDetailsDestinationModal";
import { DetailsDestinationModalUI } from "./interface";
import { IDetailsTabsConfig } from "./types";

interface IDetailsDestinationModal {
  detailsTabsConfig: IDetailsTabsConfig;
  portalId: string;
  data: IEntry;
  decisionTemplate: IRuleDecision;
  decisions: IRuleDecision[];
  textValues: IRulesFormTextValues;
  onCloseModal: () => void;
}

const DetailsDestinationModal = (props: IDetailsDestinationModal) => {
  const {
    detailsTabsConfig,
    portalId,
    data,
    decisionTemplate,
    decisions,
    textValues,
    onCloseModal,
  } = props;

  const {
    isSelected,
    isMobile,
    handleTabChange,
    filteredTabsConfig,
    defaultSelectedTab,
  } = useDetailsDestinationModal(data, detailsTabsConfig, decisions);

  return (
    <DetailsDestinationModalUI
      data={data}
      filteredTabsConfig={filteredTabsConfig}
      detailsTabsConfig={detailsTabsConfig}
      isSelected={isSelected ?? defaultSelectedTab}
      onCloseModal={onCloseModal}
      onTabChange={handleTabChange}
      portalId={portalId}
      smallScreenTab={isMobile}
      decisionTemplate={decisionTemplate}
      textValues={textValues}
      decisions={decisions}
    />
  );
};

export { DetailsDestinationModal };
export type { IDetailsDestinationModal };
