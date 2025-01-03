import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  enviroment,
  fetchTimeoutServices,
  maxRetriesServices,
} from "@config/environment";
import {
  IEnumeratorsMoneyDestination,
  IEnumeratorsRules,
} from "@pages/moneyDestination/tabs/moneyDestinationTab/types";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: enviroment.ISETTING_CREDICAR_QUERY_PROCESS_SERVICE,
  timeout: fetchTimeoutServices,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    return Promise.reject(new Error(error.message));
  },
);

const fetchWithRetries = async <T>(
  url: string,
  config: AxiosRequestConfig,
): Promise<T> => {
  const maxRetries = maxRetriesServices;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get<T>(
        url,
        config,
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Attempt ${attempt} failed: ${error.message}`);
      } else {
        console.error(`Attempt ${attempt} failed: ${String(error)}`);
      }
      if (attempt === maxRetries) {
        throw error;
      }
    }
  }
  throw new Error("Error al obtener los de las unidades de negocio.");
};

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

const getEnumeratorsRules = async (
  ruleName: string,
  bussinesUnits: string,
): Promise<IEnumeratorsRules> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "GetByIdBusinessRuleCatalog",
      "X-Business-unit": bussinesUnits,
    },
  };
  return fetchWithRetries<IEnumeratorsRules>(
    `/enums/business-rules-catalog/${ruleName}`,
    config,
  );
};

export { getEnumeratorsMoneyDestination, getEnumeratorsRules };
