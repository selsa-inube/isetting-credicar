import { IServerDomain } from "@ptypes/IServerDomain";
import { dateTraceabilityData } from "./dateTraceability";
import { additionalDebtorsData } from "./additionalDebtors";
import { companyData } from "./company";
import { typeIdentCompanyData } from "./typeIdentificationCompany";
import { periodicityData } from "./periodicity";
import { daysForApplicationData } from "./daysForApplication";
import { typePayrollData } from "./typePayroll";
import { sourcesOfIncomeData } from "./sourcesOfIncome";
import { referenceDecisionData } from "./referenceDecision";

const domains: Record<string, IServerDomain[]> = {
  dateTraceability: dateTraceabilityData,
  additionalDebtors: additionalDebtorsData,
  company: companyData,
  typeIdentCompany: typeIdentCompanyData,
  daysForApplication: daysForApplicationData,
  typePayroll: typePayrollData,
  sourcesOfIncome: sourcesOfIncomeData,
  periodicity: periodicityData,
  referenceDecision: referenceDecisionData,
};

function getDomainById(domainId: string) {
  return domains[domainId];
}

export { getDomainById };
