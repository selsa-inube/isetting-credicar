import { AxiosRequestConfig } from "axios";
import { IEnumeratorsMoneyDestination } from "@pages/moneyDestination/tabs/moneyDestinationTab/types";
import { fetchWithRetries } from "../axiosConfig/getRequests";

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
