import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { FormikProps, useFormik } from "formik";
import { object } from "yup";

import { validationMessages } from "@validations/validationMessages";
import { AppContext } from "@context/AppContext";
import { validationRules } from "@validations/validationRules";
import { useEnumMoneyDestination } from "@hooks/MoneyDestination/useEnumMoneyDestination";
import { IServerDomain } from "@ptypes/domain.types";
import {
  normalizeCodeDestination,
  normalizeDestination,
  normalizeNameDestination,
} from "@utils/destination";
import { GeneralInformationFormUI } from "./interface";
import { IGeneralInformationEntry } from "./types";

const createValidationSchema = () =>
  object().shape({
    nameDestination: validationRules.string.required(
      validationMessages.required,
    ),
    description: validationRules.string.required(validationMessages.required),
  });

const validationSchema = createValidationSchema();

interface IGeneralInformationForm {
  initialValues: IGeneralInformationEntry;
  loading?: boolean;
  handleNextStep: () => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
}

const GeneralInformationForm = forwardRef<
  FormikProps<IGeneralInformationEntry>,
  IGeneralInformationForm
>(({ initialValues, onFormValid, onSubmit, handleNextStep, loading }, ref) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit: onSubmit ?? (() => true),
  });

  const { appData } = useContext(AppContext);
  const [autosuggestValue, setAutosuggestValue] = useState(
    formik.values.nameDestination || "",
  );

  const { enumData } = useEnumMoneyDestination(
    "moneydestination",
    appData.businessUnit.publicCode,
  );

  const optionsDestination: IServerDomain[] = enumData.map((item) => ({
    id: item.code,
    label: normalizeNameDestination(item.code)?.name as unknown as string,
    value: normalizeNameDestination(item.code)?.name as unknown as string,
  }));

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
    setAutosuggestValue(formik.values.nameDestination || "");
  }, [formik.values.nameDestination]);

  const handleChange = (name: string, value: string) => {
    setAutosuggestValue(value);
    formik.setFieldValue(name, value);

    if (name === "nameDestination") {
      if (value === "") {
        formik.setFieldValue("description", "");
      } else {
        const nameEnum = normalizeCodeDestination(value)?.code || "";
        const description = normalizeDestination(
          enumData,
          nameEnum,
        )?.description;
        if (description !== undefined) {
          formik.setFieldValue("description", description);
        }
      }
    }
  };

  return (
    <GeneralInformationFormUI
      loading={loading}
      formik={formik}
      onNextStep={handleNextStep}
      optionsDestination={optionsDestination}
      onChange={handleChange}
      autosuggestValue={autosuggestValue}
      enumData={enumData}
    />
  );
});

GeneralInformationForm.displayName = "GeneralInformationForm";

export { GeneralInformationForm };
export type { IGeneralInformationForm };
