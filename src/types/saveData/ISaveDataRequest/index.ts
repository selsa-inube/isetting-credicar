import { IRuleDecision } from "@isettingkit/input";

interface ISaveDataRequest {
  applicationName: string;
  businessManagerCode: string;
  businessUnitCode: string;
  configurationRequestData: Record<
    string,
    | string
    | number
    | boolean
    | string[]
    | Record<string, string>
    | IRuleDecision[]
  >;
  description: string;
  entityName: string;
  requestDate: string;
  useCaseName: string;
}

export type { ISaveDataRequest };
