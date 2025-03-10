import { ISeverancePaymentCycles } from "../ISeverancePaymentCycles";
import { IPayrollSpecialBenefit } from "../IPayrollSpecialBenefit";
import { IRegularPaymentCycles } from "../IRegularPaymentCycles";

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
}

export type { IPayrollAgreementData };
