import { AxiosRequestConfig } from "axios";

import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isettingCredicar";
import { IEnumerators } from "@ptypes/IEnumerators";
import { mapEnumMoneyDestinationToEntities } from "./mappers";

const getEnumerators = async (
  enumCredicar: string,
  bussinesUnits: string,
): Promise<IEnumerators[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "GetEnum",
      "X-Business-unit": bussinesUnits,
    },
  };
  const data: IEnumerators[] = await getWithRetries<IEnumerators[]>(
    axiosInstance,
    `/enumerators/${enumCredicar}`,
    config,
  );
  return Array.isArray(data) ? mapEnumMoneyDestinationToEntities(data) : [];
};

export { getEnumerators };
