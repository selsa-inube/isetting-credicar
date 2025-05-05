import {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { FormikProps, useFormik } from "formik";
import { useMediaQuery } from "@inubekit/inubekit";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { IGeneralInformationEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IGeneralInformationPayroll";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { IServerDomain } from "@ptypes/IServerDomain";
import { useEnumerators } from "@hooks/useEnumerators";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { optionsFromEnumerators } from "@utils/optionsFromEnumerators";

const useGeneralInformationForm = (
  initialValues: IGeneralInformationEntry,
  ref: React.ForwardedRef<FormikProps<IGeneralInformationEntry>>,
  editDataOption: boolean,
  loading: boolean | undefined,
  sourcesOfIncomeValues: IServerDomain[],
  onSubmit: ((values: IGeneralInformationEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined,
  setSourcesOfIncomeValues: React.Dispatch<
    React.SetStateAction<IServerDomain[]>
  >,
  initialGeneralInfData?: IGeneralInformationEntry,
) => {
  const createValidationSchema = () =>
    object().shape({
      abbreviatedName: validationRules.string.required(
        validationMessages.required,
      ),
      typePayroll: validationRules.string.required(validationMessages.required),
      sourcesOfIncome: validationRules.string.required(
        validationMessages.required,
      ),
      applicationDaysPayroll: validationRules.string.required(
        validationMessages.required,
      ),
    });

  const validationSchema = createValidationSchema();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit: onSubmit ?? (() => true),
  });

  const [autosuggestValue, setAutosuggestValue] = useState(
    formik.values.applicationDaysPayroll ?? "",
  );
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [focused, setFocused] = useState(false);
  const [displayList, setDisplayList] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const { appData } = useContext(AuthAndPortalData);
  const { enumData: typePayroll } = useEnumerators(
    "deductionagreementtype",
    appData.businessUnit.publicCode,
  );

  const typePayrollOptions = optionsFromEnumerators(typePayroll);

  const isMobile = useMediaQuery("(max-width: 990px)");

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  useEffect(() => {
    setAutosuggestValue(formik.values.applicationDaysPayroll ?? "");
  }, [formik.values.applicationDaysPayroll]);

  const handleChangeAutosuggest = (name: string, value: string) => {
    setAutosuggestValue(value);
    formik.setFieldValue(name, value);
  };

  const handleChangeSelect = (name: string, value: string) => {
    formik.setFieldValue(name, value);
  };

  const handleChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const updatedData = sourcesOfIncomeValues.map((entry) =>
      entry.id === name ? { ...entry, checked } : entry,
    );

    const newValues = updatedData
      ?.filter((item) => item.checked)
      .map((option) => option.label)
      .join(",");

    formik.setFieldValue("sourcesOfIncome", newValues);
    setSourcesOfIncomeValues(updatedData);
  };

  const valuesEqual =
    JSON.stringify(initialValues) === JSON.stringify(formik.values);

  const valuesEmpty = Object.values(formik.values).every(
    (value) => value === "" || value === null || value === undefined,
  );

  const valuesEqualBoton =
    JSON.stringify(initialGeneralInfData) === JSON.stringify(formik.values);

  useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton(!formik.isValid || valuesEmpty || valuesEqualBoton);
      } else {
        setIsDisabledButton(!formik.isValid);
      }
    };
    updateButton();
  }, [formik.values, loading, formik.isValid, initialValues, editDataOption]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleReset = () => {
    formik.resetForm();
    setSourcesOfIncomeValues(getDomainById("sourcesOfIncome"));
  };

  return {
    autosuggestValue,
    formik,
    isDisabledButton,
    showModal,
    sourcesOfIncomeValues,
    valuesEqual,
    isMobile,
    focused,
    displayList,
    selectRef,
    typePayrollOptions,
    setFocused,
    setDisplayList,
    handleChangeSelect,
    handleChangeAutosuggest,
    handleChangeCheck,
    handleReset,
    handleToggleModal,
  };
};

export { useGeneralInformationForm };
