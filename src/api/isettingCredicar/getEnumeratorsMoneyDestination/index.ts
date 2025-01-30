import { AxiosRequestConfig } from "axios";
import { fetchWithRetries } from "../axiosConfig/getRequests";
import { IEnumeratorsMoneyDestination } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IEnumeratorsMoneyDestination";

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
  return fetchWithRetries<IEnumeratorsMoneyDestination[]>(
    `/enumerators/${enumDestination}`,
    config,
  );
};

export { getEnumeratorsMoneyDestination };
