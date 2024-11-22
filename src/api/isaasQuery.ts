import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  IBusinessManagers,
  IStaffPortalByBusinessManager,
} from "@ptypes/staffPortal.types";
import {
  enviroment,
  fetchTimeoutServices,
  maxRetriesServices,
} from "@config/environment";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: enviroment.IVITE_ISAAS_QUERY_PROCESS_SERVICE,
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
      if (response.status === 204) {
        if (Array.isArray(response.data)) {
          return [] as T;
        }
        return {} as T;
      }

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
  throw new Error("Error al obtener los datos del operador.");
};

export const getBusinessManagers = async (
  businessManagerId: string,
): Promise<IBusinessManagers> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchByIdBusinessManager",
    },
  };
  return fetchWithRetries<IBusinessManagers>(
    `/business-managers/${businessManagerId}`,
    config,
  );
};

export const getStaffPortalByBusinessManager = async (
  portalCode: string,
): Promise<IStaffPortalByBusinessManager[]> => {
  const queryParams = new URLSearchParams({
    staffPortalId: portalCode,
  });
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllStaffPortalsByBusinessManager",
    },
  };
  const data = fetchWithRetries<IStaffPortalByBusinessManager[]>(
    `/staff-portals-by-business-manager?${queryParams.toString()}`,
    config,
  );
  return data;
};
