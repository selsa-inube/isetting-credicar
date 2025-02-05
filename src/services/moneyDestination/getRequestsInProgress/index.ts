import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isettingProcess";
import { IRequestsInProgress } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/requestsInProgress/IRequestsInProgress";
import { mapRequestsInProgressToEntities } from "./mappers";

const getRequestsInProgress = async (
  bussinesUnits: string,
): Promise<IRequestsInProgress[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllPendingConfiguartionByBusinessUnit",
      "X-Business-unit": bussinesUnits,
    },
  };

  const queryParams = new URLSearchParams({
    applicationName: "ifac",
    entityName: "MoneyDestination",
  });
  const data = await getWithRetries<IRequestsInProgress[]>(
    axiosInstance,
    `/requests/business-unit/${bussinesUnits}?${queryParams.toString()}`,
    config,
  );
  return Array.isArray(data) ? mapRequestsInProgressToEntities(data) : [];
};

export { getRequestsInProgress };
