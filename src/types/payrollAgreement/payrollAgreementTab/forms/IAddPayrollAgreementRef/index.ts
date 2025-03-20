import { FormikProps } from "formik";
import { ICompanyEntry } from "../ICompanyEntry";
import { IGeneralInformationEntry } from "../IGeneralInformationPayroll";
import { IOrdinaryCyclesEntry } from "../IOrdinaryCyclesEntry";

interface IAddPayrollAgreementRef {
  company: React.RefObject<FormikProps<ICompanyEntry>>;
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  ordinaryCycles: React.RefObject<FormikProps<IOrdinaryCyclesEntry>>;
}

export type { IAddPayrollAgreementRef };
