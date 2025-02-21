import { useState } from "react";
import { IRuleDecision } from "@isettingkit/input";
import { useMediaQuery } from "@inubekit/inubekit";

import { mediaQueryMobile } from "@config/environment";
import { IDetailsTabsConfig } from "@design/modals/detailsDestinationModal/types";
import { IEntry } from "@design/data/table/types";

const useDetailsDestinationModal = (
  data: IEntry,
  detailsTabsConfig: IDetailsTabsConfig,
  decisions: IRuleDecision[],
) => {
  const [isSelected, setIsSelected] = useState<string>();

  const isMobile = useMediaQuery(mediaQueryMobile);

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  const filteredTabsConfig = Object.keys(detailsTabsConfig).reduce(
    (acc, key) => {
      const tab = detailsTabsConfig[key as keyof IDetailsTabsConfig];
      if (
        decisions.length === 0 &&
        tab.id === detailsTabsConfig.creditLine.id
      ) {
        return acc;
      }
      if (
        data.abbreviatedName === undefined &&
        data.descriptionUse === undefined &&
        tab.id === detailsTabsConfig.generalData.id
      ) {
        return acc;
      }
      acc[key as keyof IDetailsTabsConfig] = tab;
      return acc;
    },
    {} as IDetailsTabsConfig,
  );

  const defaultSelectedTab = filteredTabsConfig.generalData
    ? detailsTabsConfig.generalData.id
    : detailsTabsConfig.creditLine.id;

  return {
    isSelected,
    isMobile,
    handleTabChange,
    filteredTabsConfig,
    defaultSelectedTab,
  };
};

export { useDetailsDestinationModal };
