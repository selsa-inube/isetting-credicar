import { IServerDomain } from "@ptypes/domain.types";
import { dateTraceabilityData } from "./dateTraceability";

const domains: Record<string, IServerDomain[]> = {
  dateTraceability: dateTraceabilityData,
};

function getDomainById(domainId: string) {
  return domains[domainId];
}

export { getDomainById };
