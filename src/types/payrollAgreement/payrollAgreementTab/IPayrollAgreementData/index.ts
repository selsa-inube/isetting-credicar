import { ISeverancePaymentCycles } from "../ISeverancePaymentCycles";
import { IPayrollSpecialBenefit } from "../IPayrollSpecialBenefit";
import { IRegularPaymentCycles } from "../IRegularPaymentCycles";
import { IIncomeTypes } from "../../RequestPayrollAgre/IIncomeTypes";

interface IPayrollAgreementData {
  abbreviatedName: string;
  legalPersonIdentification: string;
  legalPersonName: string;
  numberOfDaysForReceivingTheDiscounts: number;
  payrollForDeductionAgreementCode: string;
  payrollForDeductionAgreementId: string;
  payrollForDeductionAgreementType: string;
  payrollSpecialBenefitPaymentCycles: IPayrollSpecialBenefit[];
  regularPaymentCycles: IRegularPaymentCycles[];
  severancePaymentCycles: ISeverancePaymentCycles[];
  id?: string;
  incomeTypes?: IIncomeTypes[];
}

export type { IPayrollAgreementData };
