import { useMediaQuery } from "@inubekit/inubekit";
import { useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { IEntry } from "@design/data/table/types";
import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { addLeadingZero } from "@utils/addLeadingZero";

const useExtraordinaryCyclesForm = (
  ref: React.ForwardedRef<FormikProps<IExtraordinaryCyclesEntry>>,
  editDataOption: boolean,
  loading: boolean | undefined,
  onSubmit: ((values: IExtraordinaryCyclesEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined,
  extraordinaryPayment: IExtraordinaryCyclesEntry[],
  setExtraordinaryPayment: React.Dispatch<
    React.SetStateAction<IExtraordinaryCyclesEntry[]>
  >,
) => {
  const createValidationSchema = () =>
    object().shape({
      nameCycle: validationRules.string.required(validationMessages.required),
      typePayment: validationRules.string.required(validationMessages.required),
      payday: validationRules.string.required(validationMessages.required),
      numberDaysUntilCut: validationRules.string.required(
        validationMessages.required,
      ),
    });

  const validationSchema = createValidationSchema();

  const initialValues: IExtraordinaryCyclesEntry = {
    nameCycle: "",
    typePayment: "",
    payday: "",
    numberDaysUntilCut: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit: onSubmit ?? (() => true),
  });

  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState<IEntry[]>(
    extraordinaryPayment as IEntry[],
  );

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

  const createNewCycle = (id: number) => ({
    id: `cycle-${addLeadingZero(id).toString()}`,
    nameCycle: formik.values.nameCycle,
    typePayment: formik.values.typePayment,
    payday: formik.values.payday,
    numberDaysUntilCut: formik.values.numberDaysUntilCut,
  });

  const handleAddCycle = () => {
    setEntries((prev) => {
      if (!Array.isArray(prev)) return [];
      return [...prev, createNewCycle(prev.length + 1)];
    });

    setExtraordinaryPayment((prev) => {
      if (!Array.isArray(prev)) return [];
      return [...prev, createNewCycle(prev.length + 1)];
    });

    formik.resetForm();
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
    isMobile,
    handleChange,
    handleReset,
    handleAddCycle,
    handleToggleModal,
  };
};

export { useExtraordinaryCyclesForm };
