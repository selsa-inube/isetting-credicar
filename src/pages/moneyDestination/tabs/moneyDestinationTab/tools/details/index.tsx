import { useContext, useState } from "react";

import { IEntry } from "@components/data/Table/types";
import { useEvaluateRuleByBusinessUnit } from "@hooks/rules/useEvaluateRuleByBusinessUnit";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { DetailsMoneyDestination } from "@design/feedback/detailsMoneyDestination";

interface IDetails {
  data: IEntry;
}

const Details = (props: IDetails) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);
  const { appData } = useContext(AuthAndPortalData);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const { evaluateRuleData } = useEvaluateRuleByBusinessUnit(
    appData.businessUnit.publicCode,
    {
      ruleName: "LineOfCredit",
      conditions: [
        {
          condition: "MoneyDestination",
          value: data.descriptionUse,
        },
      ],
    },
  );

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
