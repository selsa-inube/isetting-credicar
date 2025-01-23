import { useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import { object } from "yup";

import { IEnumeratorsMoneyDestination } from "@pages/moneyDestination/tabs/moneyDestinationTab/types";
import { IServerDomain } from "@ptypes/domain.types";
import {
  normalizeCodeDestination,
  normalizeDestination,
  normalizeNameDestination,
} from "@utils/destination";
import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { IGeneralInformationEntry } from "@src/pages/moneyDestination/tabs/moneyDestinationTab/forms/generalInformation/types";

const useGeneralInformationForm = (
  enumData: IEnumeratorsMoneyDestination[],
  initialValues: IGeneralInformationEntry,
  ref: React.ForwardedRef<FormikProps<IGeneralInformationEntry>>,
  onSubmit: ((values: IGeneralInformationEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined,
) => {
  const createValidationSchema = () =>
    object().shape({
      nameDestination: validationRules.string.required(
        validationMessages.required,
      ),
      description: validationRules.string.required(validationMessages.required),
    });

  const validationSchema = createValidationSchema();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit: onSubmit ?? (() => true),
  });

  const [autosuggestValue, setAutosuggestValue] = useState(
    formik.values.nameDestination || "",
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

  return {
    autosuggestValue,
    optionsDestination,
    formik,
    handleChange,
  };
};

export { useGeneralInformationForm };
