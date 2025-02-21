import { DetailsRequestInProcess } from "@design/feedback/detailsRequestInProcess";
import { useDetailsRequestInProgress } from "@hooks/moneyDestination/useDetailsRequestInProgress";
import { IEntry } from "@design/data/table/types";

import {
  decisionTemplate,
  textValuesBusinessRules,
} from "@config/moneyDestination/moneyDestinationTab/businessRules";
import { useMoreDetailsRequestProgress } from "@hooks/moneyDestination/useMoreDetailsRequestProgress";
import { detailsTabsConfig } from "@config/moneyDestination/moneyDestinationTab/tabs";
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
    onToggleMoreDetailsModal,
  } = useMoreDetailsRequestProgress(data);

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
      decisionTemplate={decisionTemplate}
      decisions={decisions}
      textValuesBusinessRules={textValuesBusinessRules}
      onToggleMoreDetailsModal={onToggleMoreDetailsModal}
    />
  );
};

export { Details };
