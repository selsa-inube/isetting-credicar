import { useContext } from "react";

import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { DetailsMoneyDestination } from "@design/feedback/detailsMoneyDestination";
import { useDetailsDestination } from "@hooks/moneyDestination/useDetailsDestination";
import { IEntry } from "@design/data/table/types";
import { detailsTabsConfig } from "@config/moneyDestination/moneyDestinationTab/generics/detailsTabsConfig";
import { useDetailsDestinationModal } from "@hooks/design/useDetailsDestinationModal";

interface IDetails {
  data: IEntry;
}

const Details = (props: IDetails) => {
  const { data } = props;
  const { appData } = useContext(AuthAndPortalData);

  const { showModal, handleToggleModal, evaluateRuleData } =
    useDetailsDestination(appData, data);

  const {
    isSelected,
    isMobile,
    handleTabChange,
    filteredTabsConfig,
    defaultSelectedTab,
  } = useDetailsDestinationModal(
    data,
    detailsTabsConfig,
    evaluateRuleData ?? [],
  );

  return (
    <>
      <DetailsMoneyDestination
        data={data}
        showModal={showModal}
        detailsTabsConfig={detailsTabsConfig}
        evaluateRuleData={evaluateRuleData}
        handleToggleModal={handleToggleModal}
        defaultSelectedTab={defaultSelectedTab ?? ""}
        filteredTabsConfig={filteredTabsConfig}
        isMobile={isMobile}
        isSelected={isSelected ?? defaultSelectedTab ?? ""}
        onTabChange={handleTabChange}
      />
    </>
  );
};

export { Details };
