import { useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { IEntry } from "@design/data/table/types";

const useOrdinaryCyclesForm = (
  initialValues: IOrdinaryCyclesEntry,
  ref: React.ForwardedRef<FormikProps<IOrdinaryCyclesEntry>>,
  editDataOption: boolean,
  loading: boolean | undefined,
  onSubmit: ((values: IOrdinaryCyclesEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined,
) => {
  const createValidationSchema = () =>
    object().shape({
      nameCycle: validationRules.string.required(validationMessages.required),
      periodicity: validationRules.string.required(validationMessages.required),
      payday: validationRules.string.required(validationMessages.required),
      numberDaysUntilCut: validationRules.number.required(
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

  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState<IEntry[]>([]);

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  const handleChange = (name: string, value: string) => {
    formik.setFieldValue(name, value);
  };

  const valuesEqual =
    JSON.stringify(initialValues) === JSON.stringify(formik.values);

  const valuesEmpty = Object.values(formik.values).every(
    (value) => value === "" || value === null || value === undefined,
  );

  useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton(!formik.isValid || valuesEmpty);
      } else {
        setIsDisabledButton(loading ?? !formik.isValid);
      }
    };
    updateButton();
  }, [formik.values, loading, formik.isValid, initialValues, editDataOption]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddCycle = () => {
    setEntries([]);
  };

  const handleReset = () => {
    formik.resetForm();
  };

  return {
    formik,
    isDisabledButton,
    valuesEqual,
    entries,
    showModal,
    handleChange,
    handleReset,
    handleAddCycle,
    handleToggleModal,
  };
};

export { useOrdinaryCyclesForm };
