import { IFormsUpdateData } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IUpdateDataPayrollAg";

import {
  renderCompanyVerification,
  renderExtraordinaryVerification,
  renderGeneralinfoVerification,
  renderRegularVerification,
} from "./utils";

interface IVerificationBoxes {
  updatedData: IFormsUpdateData;
  stepKey: number;
  typeRegularPayroll: boolean;
}

const VerificationBoxes = (props: IVerificationBoxes) => {
  const { updatedData, stepKey, typeRegularPayroll } = props;

  return (
    <>
      {stepKey === 1 && renderCompanyVerification(updatedData.company.values)}
      {stepKey === 2 &&
        renderGeneralinfoVerification(updatedData.generalInformation.values)}
      {stepKey === 3 &&
        !typeRegularPayroll &&
        renderRegularVerification(updatedData.ordinaryCycles.values)}
      {stepKey === 4 &&
        renderExtraordinaryVerification(updatedData.extraordinaryCycles.values)}
    </>
  );
};

export { VerificationBoxes };
