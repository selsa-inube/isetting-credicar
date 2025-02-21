import { useState } from "react";
import { IEntry } from "@design/data/table/types";
import { IAppData } from "@ptypes/context/authAndPortalDataProvider/IAppData";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { formatDate } from "@utils/date/formatDate";

const useDeleteDestination = (data: IEntry, appData: IAppData) => {
  const [showModal, setShowModal] = useState(false);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = () => {
    setSaveData({
      applicationName: "ifac",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "Solicitud de eliminación de un destino de dinero",
      entityName: "MoneyDestination",
      requestDate: formatDate(new Date()),
      useCaseName: "DeleteMoneyDestination",
      configurationRequestData: {
        moneyDestinationId: data.id,
        abbreviatedName: data.name,
        descriptionUse: data.descriptionUse,
        iconReference: data.icon,
        justification: `La eliminación del destino de dinero es solicitada por ${appData.user.userAccount}`,
      },
    });
    setShowRequestProcessModal(true);
  };

  return {
    showModal,
    saveData,
    showRequestProcessModal,
    handleToggleModal,
    handleClick,
    setShowRequestProcessModal,
    setShowModal,
  };
};
export { useDeleteDestination };
