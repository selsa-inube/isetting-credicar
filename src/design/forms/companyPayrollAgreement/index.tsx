import { forwardRef } from "react";
import { FormikProps } from "formik";
import { ICompanyEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/ICompanyEntry";
import { useCompanyForm } from "@hooks/payrollAgreement/useCompanyForm";
import { CompanyFormUI } from "./interface";

interface ICompanyForm {
  initialValues: ICompanyEntry;
  onButtonClick: () => void;
  loading?: boolean;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: ICompanyEntry) => void;
}

const CompanyForm = forwardRef<FormikProps<ICompanyEntry>, ICompanyForm>(
  (
    { initialValues, onFormValid, onSubmit, onButtonClick, loading = false },
    ref,
  ) => {
    const {
      formik,
      optionsCountries,
      optionsCities,
      legalPersonOptions,
      handleChange,
      handleCompanyChange,
    } = useCompanyForm(initialValues, ref, onSubmit, onFormValid);

    return (
      <CompanyFormUI
        loading={loading}
        formik={formik}
        onButtonClick={onButtonClick}
        onChange={handleChange}
        isDisabledButton={!formik.isValid}
        onCompanyChange={handleCompanyChange}
        optionsCountries={optionsCountries}
        optionsCities={optionsCities}
        legalPerson={legalPersonOptions}
      />
    );
  },
);

CompanyForm.displayName = "CompanyForm";

export { CompanyForm };
export type { ICompanyForm };
