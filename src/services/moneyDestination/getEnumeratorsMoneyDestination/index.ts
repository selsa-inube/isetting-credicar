import { AxiosRequestConfig } from "axios";
import { IEnumeratorsMoneyDestination } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IEnumeratorsMoneyDestination";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isettingCredicar";
import { mapEnumMoneyDestinationToEntities } from "./mappers";

const getEnumeratorsMoneyDestination = async (
  enumDestination: string,
  bussinesUnits: string,
): Promise<IEnumeratorsMoneyDestination[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "GetEnum",
      "X-Business-unit": bussinesUnits,
    },
  };
  const data: IEnumeratorsMoneyDestination[] = await getWithRetries<
    IEnumeratorsMoneyDestination[]
  >(axiosInstance, `/enumerators/${enumDestination}`, config);
  return Array.isArray(data) ? mapEnumMoneyDestinationToEntities(data) : [];
};

export { getEnumeratorsMoneyDestination };
