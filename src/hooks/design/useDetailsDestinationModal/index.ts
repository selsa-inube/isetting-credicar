import { useState } from "react";
import { IRuleDecision } from "@isettingkit/input";
import { useMediaQuery } from "@inubekit/inubekit";

import { mediaQueryMobile } from "@config/environment";
import {
  IDetailsTabsConfig,
  IMoreDetailsTabsConfig,
} from "@design/modals/detailsDestinationModal/types";
import { IEntry } from "@design/data/table/types";

const useDetailsDestinationModal = (
  data: IEntry,
  detailsTabsConfig: IDetailsTabsConfig,
  decisions: IRuleDecision[],
  moreDetailsTabsConfig?: IMoreDetailsTabsConfig,
) => {
  const [isSelected, setIsSelected] = useState<string>();
  const [isSelectedMoreDetails, setIsSelectedMoreDetails] = useState<string>();

  const isMobile = useMediaQuery(mediaQueryMobile);

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  const handleMoreDetailsTabChange = (tabId: string) => {
    setIsSelectedMoreDetails(tabId);
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

  const filteredTabsMoreDetConfig =
    moreDetailsTabsConfig &&
    Object.keys(moreDetailsTabsConfig).reduce((acc, key) => {
      const tab = moreDetailsTabsConfig[key as keyof IMoreDetailsTabsConfig];
      if (
        !decisions.some(
          (decision) => decision.transactionOperation === "Insert",
        ) &&
        tab.id === moreDetailsTabsConfig.creditLineIncluded.id
      ) {
        return acc;
      }
      if (
        !decisions.some(
          (decision) => decision.transactionOperation === "Delete",
        ) &&
        tab.id === moreDetailsTabsConfig.creditLineRemoved.id
      ) {
        return acc;
      }
      acc[key as keyof IMoreDetailsTabsConfig] = tab;
      return acc;
    }, {} as IMoreDetailsTabsConfig);

  const defaultSelectedTab = filteredTabsConfig.generalData
    ? detailsTabsConfig.generalData.id
    : detailsTabsConfig.creditLine.id;

  const defaultSelectedMoreDetTab =
    moreDetailsTabsConfig && filteredTabsMoreDetConfig?.creditLineIncluded
      ? moreDetailsTabsConfig?.creditLineIncluded.id
      : moreDetailsTabsConfig?.creditLineRemoved.id;

  return {
    isSelected,
    isSelectedMoreDetails,
    isMobile,
    handleTabChange,
    handleMoreDetailsTabChange,
    filteredTabsConfig,
    filteredTabsMoreDetConfig,
    defaultSelectedTab,
    defaultSelectedMoreDetTab,
  };
};

export { useDetailsDestinationModal };
