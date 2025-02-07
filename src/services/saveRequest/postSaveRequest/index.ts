import { AxiosRequestConfig } from "axios";
import { postWithRetries } from "@services/core/postWithRetries";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { axiosInstance } from "@api/isaasPersistence";
import { mapSaveMoneyDestinationEntityToApi } from "./mappers";

const postSaveRequest = async (
  userAccount: string,
  data: ISaveDataRequest,
): Promise<ISaveDataResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SaveSettingRequest",
      "X-User-Name": userAccount,
    },
  };

  const saveData = await postWithRetries<ISaveDataResponse>(
    `/requests`,
    config,
    mapSaveMoneyDestinationEntityToApi(data) as unknown as string[],
    axiosInstance,
  );

  return saveData;
};

export { postSaveRequest };
