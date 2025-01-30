import { useContext } from "react";

import { IEntry } from "@components/data/Table/types";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { DetailsMoneyDestination } from "@design/feedback/detailsMoneyDestination";
import { useDetailsDestination } from "@src/hooks/moneyDestination/useDetailsDestination";

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
