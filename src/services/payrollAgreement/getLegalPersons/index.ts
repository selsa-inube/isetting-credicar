import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isettingCredicar";
import { ILegalPerson } from "@ptypes/payrollAgreement/payrollAgreementTab/ILegalPerson";
import { mapLegalPersonsToEntities } from "./mappers";

const getLegalPersonsData = async (
  bussinesUnits: string,
): Promise<ILegalPerson[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllLegalPerson",
      "X-Business-unit": bussinesUnits,
    },
  };
  const data: ILegalPerson[] = await getWithRetries<ILegalPerson[]>(
    axiosInstance,
    `/legal-persons`,
    config,
  );
  return Array.isArray(data) ? mapLegalPersonsToEntities(data) : [];
};

export { getLegalPersonsData };
