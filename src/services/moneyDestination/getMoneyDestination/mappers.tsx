import { MdCategory } from "react-icons/md";
import { IconWithText } from "@components/data/IconWithText";

import { IMoneyDestinationData } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IMoneyDestinationData";
import { normalizeIconDestination } from "@utils/destination/normalizeIconDestination";

const mapMoneyDestinationToEntity = (
  data: IMoneyDestinationData,
): IMoneyDestinationData => {
  const business: IMoneyDestinationData = {
    id: String(data.moneyDestinationId),
    abbreviatedName: (
      <IconWithText
        icon={
          normalizeIconDestination(data.iconReference)?.icon || (
            <MdCategory size={20} />
          )
        }
        text={String(data.abbreviatedName)}
      />
    ),
    descriptionUse: String(data.descriptionUse),
    iconReference: String(data.iconReference),
    moneyDestinationId: String(data.moneyDestinationId),
  };

  return business;
};

const mapMoneyDestinationToEntities = (
  enums: IMoneyDestinationData[],
): IMoneyDestinationData[] => {
  return enums.map(mapMoneyDestinationToEntity);
};

export { mapMoneyDestinationToEntity, mapMoneyDestinationToEntities };
