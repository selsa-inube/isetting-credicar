import { useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { IGeneralInformationEntry } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IGeneralInformationDestination";
import { IServerDomain } from "@ptypes/IServerDomain";
import { IEnumeratorsMoneyDestination } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IEnumeratorsMoneyDestination";
import { normalizeNameDestination } from "@utils/destination/normalizeNameDestination";
import { normalizeCodeDestination } from "@utils/destination/normalizeCodeDestination";
import { normalizeDestination } from "@utils/destination/normalizeDestination";
import { normalizeEditDestination } from "@utils/destination/normalizeEditDestination";
import { normalizeIconDestination } from "@utils/destination/normalizeIconDestination";

const useGeneralInformationForm = (
  enumData: IEnumeratorsMoneyDestination[],
  initialValues: IGeneralInformationEntry,
  ref: React.ForwardedRef<FormikProps<IGeneralInformationEntry>>,
  editDataOption: boolean,
  loading: boolean | undefined,
  onSubmit: ((values: IGeneralInformationEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined,
) => {
  const createValidationSchema = () =>
    object().shape({
      nameDestination: validationRules.string.required(
        validationMessages.required,
      ),
      description: validationRules.string.required(validationMessages.required),
      icon: validationRules.string,
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

  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [icon, setIcon] = useState<JSX.Element | undefined>();

  const optionsDestination: IServerDomain[] = enumData.map((item) => {
    const name = normalizeNameDestination(item.code)?.name as unknown as string;
    return {
      id: item.code,
      label: name,
      value: name,
    };
  });

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
      const normalizeData = normalizeCodeDestination(value)?.code || "";
      const description =
        normalizeDestination(enumData, normalizeData)?.description || "";

      const currentDescription = formik.values.description || "";
      const newDescription = `${currentDescription} ${description}`.trim();
      formik.setFieldValue("description", newDescription);

      if (initialValues.nameDestination !== value) {
        formik.setFieldValue("icon", icon);
      } else {
        formik.setFieldValue("icon", initialValues.icon);
      }
    }
  };

  const nameEnum =
    normalizeCodeDestination(formik.values.nameDestination || "")?.code || "";
  const addData = normalizeDestination(enumData, nameEnum);

  const valuesEqual =
    JSON.stringify(initialValues) === JSON.stringify(formik.values);

  const valuesEmpty = Object.values(formik.values).every(
    (value) => value === "" || value === null || value === undefined,
  );

  useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton(
          (valuesEqual || valuesEmpty || loading) ?? !formik.isValid,
        );
      } else {
        setIsDisabledButton(loading ?? !formik.isValid);
      }
    };
    updateButton();
  }, [formik.values, loading, formik.isValid, initialValues, editDataOption]);

  useEffect(() => {
    const updateIcon = () => {
      let iconData;
      const editData = normalizeEditDestination(
        enumData,
        formik.values.icon ?? "",
      );
      const compare =
        JSON.stringify(initialValues.nameDestination) ===
        JSON.stringify(formik.values.nameDestination);

      if (editDataOption) {
        iconData =
          editData && compare
            ? normalizeIconDestination(editData?.value ?? "")
            : normalizeIconDestination(addData?.value ?? "");
      } else {
        iconData = normalizeIconDestination(addData?.value ?? "");
      }

      setIcon(iconData?.icon);
      formik.setFieldValue("icon", iconData?.value ?? "");
    };

    updateIcon();
  }, [
    editDataOption,
    formik.values,
    enumData,
    initialValues.nameDestination,
    addData,
  ]);

  return {
    autosuggestValue,
    optionsDestination,
    formik,
    isDisabledButton,
    icon,
    handleChange,
    valuesEqual,
  };
};

export { useGeneralInformationForm };
