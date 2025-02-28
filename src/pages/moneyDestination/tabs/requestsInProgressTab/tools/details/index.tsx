import { DetailsRequestInProcess } from "@design/feedback/detailsRequestInProcess";
import { useDetailsRequestInProgress } from "@hooks/moneyDestination/useDetailsRequestInProgress";
import { IEntry } from "@design/data/table/types";

import {
  decisionTemplate,
  textValuesBusinessRules,
} from "@config/moneyDestination/moneyDestinationTab/businessRules";
import { useMoreDetailsRequestProgress } from "@hooks/moneyDestination/useMoreDetailsRequestProgress";
import { detailsTabsConfig } from "@config/moneyDestination/moneyDestinationTab/tabs";
import { moreDetailsTabsConfig } from "@config/moneyDestination/requestsInProgressTab/creditLinesTabs";
import { useDetailsDestinationModal } from "@hooks/design/useDetailsDestinationModal";
interface IDetails {
  data: IEntry;
}

const Details = (props: IDetails) => {
  const { data } = props;

  const {
    dateOptions,
    form,
    showModal,
    normalizeData,
    handleChange,
    handleToggleModal,
  } = useDetailsRequestInProgress(data);

  const {
    showMoreDetailsModal,
    moreDetailsData,
    decisions,
    isMoreDetails,
    onToggleMoreDetailsModal,
  } = useMoreDetailsRequestProgress(data);

  const {
    isSelected,
    isSelectedMoreDetails,
    isMobile,
    handleTabChange,
    handleMoreDetailsTabChange,
    filteredTabsMoreDetConfig,
    filteredTabsConfig,
    defaultSelectedTab,
    defaultSelectedMoreDetTab,
  } = useDetailsDestinationModal(
    moreDetailsData,
    detailsTabsConfig,
    decisions,
    moreDetailsTabsConfig,
  );

  return (
    <DetailsRequestInProcess
      data={normalizeData}
      showModal={showModal}
      form={form}
      onToggleModal={handleToggleModal}
      onChange={handleChange}
      dateOptions={dateOptions}
      moreDetailsData={moreDetailsData}
      showMoreDetailsModal={showMoreDetailsModal}
      detailsTabsConfig={detailsTabsConfig}
      moreDetailsTabsConfig={moreDetailsTabsConfig}
      decisionTemplate={decisionTemplate}
      decisions={decisions}
      textValuesBusinessRules={textValuesBusinessRules}
      onToggleMoreDetailsModal={onToggleMoreDetailsModal}
      isMoreDetails={isMoreDetails}
      isSelected={isSelected ?? defaultSelectedTab}
      isSelectedMoreDetails={isSelectedMoreDetails ?? defaultSelectedMoreDetTab}
      isMobile={isMobile}
      onTabChange={handleTabChange}
      onTabChangeMoreDetails={handleMoreDetailsTabChange}
      defaultSelectedTab={defaultSelectedTab}
      defaultSelectedMoreDetTab={defaultSelectedMoreDetTab}
      filteredTabsConfig={filteredTabsConfig}
      filteredTabsMoreDetConfig={filteredTabsMoreDetConfig}
    />
  );
};

export { Details };
