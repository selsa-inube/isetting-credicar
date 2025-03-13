import { IServerDomain } from "@ptypes/IServerDomain";
import { dateTraceabilityData } from "./dateTraceability";
import { additionalDebtorsData } from "./additionalDebtors";
import { companyData } from "./company";
import { typeIdentCompanyData } from "./typeIdentificationCompany";

const domains: Record<string, IServerDomain[]> = {
  dateTraceability: dateTraceabilityData,
  additionalDebtors: additionalDebtorsData,
  company: companyData,
  typeIdentCompany: typeIdentCompanyData,
};

function getDomainById(domainId: string) {
  return domains[domainId];
}

export { getDomainById };
