import { useState } from "react";
import { IRuleDecision } from "@isettingkit/input";
import { useMediaQuery } from "@inubekit/hooks";

import { mediaQueryMobile } from "@config/environment";
import { IRulesFormTextValues } from "@pages/moneyDestination/tabs/moneyDestinationTab/types";
import { IEntry } from "@components/data/Table/types";
import { IDetailsTabsConfig } from "./types";
import { DetailsDestinationModalUI } from "./interface";

interface IDetailsDestinationModal {
  detailsTabsConfig: IDetailsTabsConfig;
  portalId: string;
  data: IEntry;
  decisionTemplate: IRuleDecision;
  textValues: IRulesFormTextValues;
  onCloseModal: () => void;
}

function DetailsDestinationModal(props: IDetailsDestinationModal) {
  const {
    detailsTabsConfig,
    portalId,
    data,
    decisionTemplate,
    textValues,
    onCloseModal,
  } = props;

  const [isSelected, setIsSelected] = useState<string>();

  const isMobile = useMediaQuery(mediaQueryMobile);

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  return (
    <DetailsDestinationModalUI
      data={data}
      detailsTabsConfig={detailsTabsConfig}
      isSelected={isSelected ?? detailsTabsConfig.generalData.id}
      onCloseModal={onCloseModal}
      onTabChange={handleTabChange}
      portalId={portalId}
      smallScreenTab={isMobile}
      decisionTemplate={decisionTemplate}
      textValues={textValues}
    />
  );
}

export { DetailsDestinationModal };
export type { IDetailsDestinationModal };
