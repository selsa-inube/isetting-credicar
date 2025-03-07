import { IPIayrollSpecialBenefit } from "../IPIayrollSpecialBenefit";
import { IRegularPaymentCycles } from "../IRegularPaymentCycles";
import { ISeverancePaymentCycles } from "../ISeverancePaymentCycles";

interface IPayrollAgreementData {
  abbreviatedName: string;
  legalPersonIdentification: string;
  legalPersonName: string;
  numberOfDaysForReceivingTheDiscounts: number;
  payrollForDeductionAgreementCode: string;
  payrollForDeductionAgreementId: string;
  payrollForDeductionAgreementType: string;
  payrollSpecialBenefitPaymentCycles: IPIayrollSpecialBenefit[];
  regularPaymentCycles: IRegularPaymentCycles[];
  severancePaymentCycles: ISeverancePaymentCycles[];
  id?: string;
}

export type { IPayrollAgreementData };
