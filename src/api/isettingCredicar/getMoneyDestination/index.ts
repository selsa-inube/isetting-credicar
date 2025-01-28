import { AxiosRequestConfig } from "axios";
import { IMoneyDestinationData } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IMoneyDestinationData";
import { fetchWithRetries } from "../axiosConfig/getRequests";

const getMoneyDestination = async (
  bussinesUnits: string,
): Promise<IMoneyDestinationData[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllMoneyDestination",
      "X-Business-unit": bussinesUnits,
    },
  };
  return fetchWithRetries<IMoneyDestinationData[]>(
    `/money-destinations`,
    config,
  );
};

export { getMoneyDestination };
