import { FormikProps } from "formik";
import { ICompanyEntry } from "../ICompanyEntry";
import { IGeneralInformationEntry } from "../IGeneralInformationPayroll";

interface IAddPayrollAgreementRef {
  company: React.RefObject<FormikProps<ICompanyEntry>>;
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
}

export type { IAddPayrollAgreementRef };
