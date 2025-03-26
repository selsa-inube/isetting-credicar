import { IServerDomain } from "@ptypes/IServerDomain";
import { dateTraceabilityData } from "./dateTraceability";
import { additionalDebtorsData } from "./additionalDebtors";
import { companyData } from "./company";
import { typeIdentCompanyData } from "./typeIdentificationCompany";
import { daysForApplicationData } from "./daysForApplication";
import { typePayrollData } from "./typePayroll";
import { sourcesOfIncomeData } from "./sourcesOfIncome";

const domains: Record<string, IServerDomain[]> = {
  dateTraceability: dateTraceabilityData,
  additionalDebtors: additionalDebtorsData,
  company: companyData,
  typeIdentCompany: typeIdentCompanyData,
  daysForApplication: daysForApplicationData,
  typePayroll: typePayrollData,
  sourcesOfIncome: sourcesOfIncomeData,
};

function getDomainById(domainId: string) {
  return domains[domainId];
}

export { getDomainById };
