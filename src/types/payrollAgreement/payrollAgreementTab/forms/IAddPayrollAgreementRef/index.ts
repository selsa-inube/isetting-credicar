import { FormikProps } from "formik";
import { ICompanyEntry } from "../ICompanyEntry";

interface IAddPayrollAgreementRef {
  company: React.RefObject<FormikProps<ICompanyEntry>>;
}

export type { IAddPayrollAgreementRef };
