import { useContext } from "react";
import { IFormsUpdateData } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IUpdateDataPayrollAg";
import { useLegalPerson } from "@hooks/payrollAgreement/useLegalPerson";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
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

  const { appData } = useContext(AuthAndPortalData);
  const { legalPersonData } = useLegalPerson(appData.businessUnit.publicCode);

  const companyEndpointData = legalPersonData
    .filter(
      (item) =>
        item.legalPersonName === updatedData.company.values.companySelected,
    )
    .map((item) => ({
      companySelected: item.legalPersonName,
      companyName: item.legalPersonName,
      companyNameCommercial: item.tradename,
      companyCountry: item.countryTaxResidence,
      companyNumberIdent: item.identificationDocumentNumber,
      companyAddressRes: item.headquarterAddress,
    }))
    .find((item) => item);

  return (
    <>
      {stepKey === 1 &&
        renderCompanyVerification(
          companyEndpointData ?? updatedData.company.values,
        )}
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
