import { useContext } from "react";

import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { DetailsMoneyDestination } from "@design/feedback/detailsMoneyDestination";
import { useDetailsDestination } from "@hooks/moneyDestination/useDetailsDestination";
import { IEntry } from "@design/data/table/types";

interface IDetails {
  data: IEntry;
}

const Details = (props: IDetails) => {
  const { data } = props;
  const { appData } = useContext(AuthAndPortalData);

  const { showModal, handleToggleModal, evaluateRuleData } =
    useDetailsDestination(appData, data);

  return (
    <>
      <DetailsMoneyDestination
        data={data}
        showModal={showModal}
        evaluateRuleData={evaluateRuleData}
        handleToggleModal={handleToggleModal}
      />
    </>
  );
};

export { Details };
