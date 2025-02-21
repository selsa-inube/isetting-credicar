import { AxiosRequestConfig } from "axios";

import { deleteWithRetries } from "@services/core/deleteWithRetries";
import { axiosInstance } from "@api/isaasPersistence";
import { ICancelReqInProcResponse } from "@ptypes/requestInProgress/ICancelReqInProcResponse";
import { ICancelReqInProcRequest } from "@ptypes/requestInProgress/ICancelReqInProcRequest";
import { mapCancelRequestInProgressToApi } from "./mappers";

const cancelRequestInProgress = async (
  businessUnit: string,
  data: ICancelReqInProcRequest,
): Promise<ICancelReqInProcResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "RemoveSettingRequest",
      "X-Business-unit": businessUnit,
    },
  };

  const deleteData = await deleteWithRetries<ICancelReqInProcResponse>(
    `/requests`,
    config,
    mapCancelRequestInProgressToApi(data) as unknown as string[],
    axiosInstance,
  );

  return deleteData;
};

export { cancelRequestInProgress };
