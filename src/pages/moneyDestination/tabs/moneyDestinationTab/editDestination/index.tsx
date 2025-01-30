import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEditDestination } from "@hooks/moneyDestination/useEditDestination";
import { editDestinationTabsConfig } from "@config/moneyDestination/editDestination/tabs";
import { EditDestinationUI } from "./interface";

const EditDestination = () => {
  const location = useLocation();
  const { data } = location.state || {};

  const {
    creditLineDecisions,
    formValues,
    generalInformationRef,
    onSubmit,
    handleReset,
    setCreditLineDecisions,
    setIsCurrentFormValid,
  } = useEditDestination(data);

  const [isSelected, setIsSelected] = useState<string>(
    editDestinationTabsConfig.generalInformation.id,
  );

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  return (
    <EditDestinationUI
      creditLineDecisions={creditLineDecisions}
      editDestinationTabsConfig={editDestinationTabsConfig}
      isSelected={isSelected}
      onTabChange={handleTabChange}
      generalInformationRef={generalInformationRef}
      initialGeneralInformationValues={formValues}
      onButtonClick={onSubmit}
      handleReset={handleReset}
      setCreditLineDecisions={setCreditLineDecisions}
      setIsCurrentFormValid={setIsCurrentFormValid}
    />
  );
};

export { EditDestination };
