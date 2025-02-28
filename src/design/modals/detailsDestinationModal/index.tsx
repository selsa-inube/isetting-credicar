import { IRuleDecision } from "@isettingkit/input";

import { IEntry } from "@design/data/table/types";
import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";
import { DetailsDestinationModalUI } from "./interface";
import { IDetailsTabsConfig, IMoreDetailsTabsConfig } from "./types";
interface IDetailsDestinationModal {
  data: IEntry;
  decisions: IRuleDecision[];
  decisionTemplate: IRuleDecision;
  defaultSelectedTab: string;
  detailsTabsConfig: IDetailsTabsConfig;
  filteredTabsConfig: IDetailsTabsConfig;
  isMobile: boolean;
  isMoreDetails: boolean;
  isSelected: string;
  portalId: string;
  textValues: IRulesFormTextValues;
  onCloseModal: () => void;
  onTabChange: (id: string) => void;
  onMoreDetailsTabChange?: (id: string) => void;
  defaultSelectedMoreDetTab?: string;
  filteredTabsMoreDetConfig?: IMoreDetailsTabsConfig;
  isSelectedMoreDetails?: string;
  moreDetailsTabsConfig?: IMoreDetailsTabsConfig;
}

const DetailsDestinationModal = (props: IDetailsDestinationModal) => {
  const {
    data,
    decisions,
    decisionTemplate,
    defaultSelectedMoreDetTab,
    defaultSelectedTab,
    detailsTabsConfig,
    filteredTabsConfig,
    filteredTabsMoreDetConfig,
    isMobile,
    isMoreDetails,
    isSelected,
    isSelectedMoreDetails,
    moreDetailsTabsConfig,
    portalId,
    textValues,
    onCloseModal,
    onMoreDetailsTabChange,
    onTabChange,
  } = props;

  return (
    <DetailsDestinationModalUI
      data={data}
      filteredTabsConfig={filteredTabsConfig}
      detailsTabsConfig={detailsTabsConfig}
      moreDetailsTabsConfig={moreDetailsTabsConfig}
      isSelected={isSelected ?? defaultSelectedTab}
      onCloseModal={onCloseModal}
      onTabChange={onTabChange}
      portalId={portalId}
      smallScreenTab={isMobile}
      decisionTemplate={decisionTemplate}
      textValues={textValues}
      decisions={decisions}
      isSelectedMoreDetails={isSelectedMoreDetails ?? defaultSelectedMoreDetTab}
      filteredTabsMoreDetConfig={filteredTabsMoreDetConfig}
      onTabChangeMoreDetails={onMoreDetailsTabChange}
      isMoreDetails={isMoreDetails}
    />
  );
};

export { DetailsDestinationModal };
export type { IDetailsDestinationModal };
