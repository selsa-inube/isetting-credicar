import {
  renderCreditlineVerification,
  renderPersonalInfoVerification,
} from "./utils";
import { IFormsUpdateData } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IFormsUpdateData";

interface IVerificationBoxes {
  updatedData: IFormsUpdateData;
  stepKey: number;
}

function VerificationBoxes(props: IVerificationBoxes) {
  const { updatedData, stepKey } = props;

  return (
    <>
      {stepKey === 1 &&
        renderPersonalInfoVerification(updatedData.personalInformation.values)}
      {stepKey === 2 &&
        renderCreditlineVerification(updatedData.creditline.values)}
    </>
  );
}

export { VerificationBoxes };
