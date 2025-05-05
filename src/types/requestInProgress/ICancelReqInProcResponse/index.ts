import { IConfigurationRequestsTraceability } from "@ptypes/requestInProgress/IConfigRequestsTraceability";
import { IUserManConfigRequests } from "../IUserManConfigRequests";

interface ICancelReqInProcResponse {
  applicationName: string;
  businessManagerCode: string;
  businessUnitCode: string;
  configurationRequestData: Record<
    string,
    string | number | boolean | string[] | Record<string, string>
  >;
  configurationRequestsTraceability: IConfigurationRequestsTraceability[];
  description: string;
  entityName: string;
  removalJustification: string;
  requestDate: string;
  requestNumber: string;
  requestStatus: string;
  settingRequestId: string;
  useCaseName: string;
  userManagingConfigurationRequests: IUserManConfigRequests[];
}

export type { ICancelReqInProcResponse };
