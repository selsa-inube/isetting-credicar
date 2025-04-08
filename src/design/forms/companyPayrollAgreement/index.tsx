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
      isMobile,
      showModal,
      title,
      description,
      actionText,
      moreDetails,
      handleToggleAlertModal,
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
        isMobile={isMobile}
        showModal={showModal}
        onToggleAlertModal={handleToggleAlertModal}
        titleAlertModal={title}
        descriptionModal={description}
        actionTextModal={actionText}
        moreDetailsModal={moreDetails}
      />
    );
  },
);

CompanyForm.displayName = "CompanyForm";

export { CompanyForm };
export type { ICompanyForm };
