import { AxiosRequestConfig } from "axios";

import { IRequestMoneyDestination } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IRequestMoneyDestination";
import { deleteWithRetries } from "@services/core/deleteWithRetries";
import { axiosInstance } from "@api/isettingCredicar";
import { mapDeleteMoneyDestToApi } from "./mappers";

const deleteMoneyDestination = async (
  businessUnit: string,
  data: IRequestMoneyDestination,
): Promise<IRequestMoneyDestination> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "DeleteMoneyDestination",
      "X-Business-unit": businessUnit,
    },
  };

  const deleteData = await deleteWithRetries<IRequestMoneyDestination>(
    `/money-destinations`,
    config,
    mapDeleteMoneyDestToApi(data) as unknown as string[],
    axiosInstance,
  );

  return deleteData;
};

export { deleteMoneyDestination };
