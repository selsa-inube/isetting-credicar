import { IServerDomain } from "@ptypes/domain.types";
import { dateTraceabilityData } from "./dateTraceability";
import { additionalDebtorsData } from "./additionalDebtors";

const domains: Record<string, IServerDomain[]> = {
  dateTraceability: dateTraceabilityData,
  additionalDebtors: additionalDebtorsData,
};

function getDomainById(domainId: string) {
  return domains[domainId];
}

export { getDomainById };
