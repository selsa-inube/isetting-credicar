import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { maxRetriesDelete } from "@config/environment";

const deleteWithRetries = async <T>(
  url: string,
  config: AxiosRequestConfig,
  data: string[],
  axiosInstance: AxiosInstance,
): Promise<T> => {
  const maxRetries = maxRetriesDelete;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response: AxiosResponse<T> = await axiosInstance.delete<T>(url, {
        ...config,
        data: data,
      });
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
  throw new Error("Error al eliminar los datos.");
};

export { deleteWithRetries };
