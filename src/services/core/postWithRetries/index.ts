import { axiosInstance } from "@src/api/isettingCredicar";
import { maxRetriesServices } from "@config/environment";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const postWithRetries = async <T>(
  url: string,
  config: AxiosRequestConfig,
  data: string[],
): Promise<T> => {
  const maxRetries = maxRetriesServices;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response: AxiosResponse<T> = await axiosInstance.post<T>(
        url,
        data,
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

export { postWithRetries };
