import { useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { IEntry } from "@design/data/table/types";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { IServerDomain } from "@ptypes/IServerDomain";
import { payDayOrdinaryOptions } from "@utils/payDayOrdinary";
import { addLeadingZero } from "@utils/addLeadingZero";
import { courtDaysOrdinaryOptions } from "@utils/courtDaysOrdinary";
import { payDayValues } from "@utils/payDayValues";

const useOrdinaryCyclesForm = (
  ref: React.ForwardedRef<FormikProps<IOrdinaryCyclesEntry>>,
  editDataOption: boolean,
  loading: boolean | undefined,
  onSubmit: ((values: IOrdinaryCyclesEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined,
  regularPaymentCycles: IOrdinaryCyclesEntry[],
  setRegularPaymentCycles: React.Dispatch<
    React.SetStateAction<IOrdinaryCyclesEntry[]>
  >,
) => {
  const createValidationSchema = () =>
    object().shape({
      nameCycle: validationRules.string.required(validationMessages.required),
      periodicity: validationRules.string.required(validationMessages.required),
      payday: validationRules.string.required(validationMessages.required),
      numberDaysUntilCut: validationRules.string.required(
        validationMessages.required,
      ),
    });

  const validationSchema = createValidationSchema();

  const initialValues: IOrdinaryCyclesEntry = {
    cycleId: "",
    nameCycle: "",
    periodicity: "",
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
  const [showAddModal, setShowAddModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [entries, setEntries] = useState<IEntry[]>(
    regularPaymentCycles as IEntry[],
  );
  const [paydayOptions, setPaydayOptions] = useState<
    IServerDomain[] | undefined
  >([]);
  const [numberDaysUntilCutOptions, setNumberDaysUntilCutOptions] = useState<
    IServerDomain[] | undefined
  >([]);

  const periodicityOptions = getDomainById("periodicity");

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

  useEffect(() => {
    if (formik.values.periodicity) {
      const Payday = payDayOrdinaryOptions(formik.values.periodicity);
      setPaydayOptions(Payday);

      const numberDaysUntilCut = courtDaysOrdinaryOptions(
        formik.values.periodicity,
      );
      setNumberDaysUntilCutOptions(numberDaysUntilCut);
    } else {
      setPaydayOptions([]);
      setNumberDaysUntilCutOptions([]);
    }
  }, [formik.values.periodicity]);

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

  const resetFormFields = () => {
    formik.setFieldValue("nameCycle", "");
    formik.setFieldValue("periodicity", "");
    formik.setFieldValue("payday", "");
    formik.setFieldValue("numberDaysUntilCut", "");
  };
  const handleToggleModal = () => {
    setPaydayOptions([]);
    setNumberDaysUntilCutOptions([]);
    resetFormFields();
    setShowAddModal(!showAddModal);
  };

  const onToggleInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };

  const createNewCycle = (id: number) => ({
    id: `cycle-${addLeadingZero(id).toString()}`,
    cycleId: addLeadingZero(id).toString(),
    nameCycle: formik.values.nameCycle,
    periodicity: formik.values.periodicity,
    payday: payDayValues(formik.values.periodicity, formik.values.payday),
    numberDaysUntilCut: formik.values.numberDaysUntilCut,
  });

  const handleAddCycle = () => {
    setEntries((prev) => {
      if (!Array.isArray(prev)) return [];
      return [...prev, createNewCycle(prev.length + 1)];
    });

    setRegularPaymentCycles((prev) => {
      if (!Array.isArray(prev)) return [];
      return [...prev, createNewCycle(prev.length + 1)];
    });

    formik.resetForm();
    setShowAddModal(false);
  };

  const handleReset = () => {
    formik.resetForm();
  };

  return {
    formik,
    isDisabledButton,
    valuesEqual,
    entries,
    showAddModal,
    showInfoModal,
    numberDaysUntilCutOptions,
    paydayOptions,
    periodicityOptions,
    onToggleInfoModal,
    handleChange,
    handleReset,
    handleAddCycle,
    handleToggleModal,
  };
};

export { useOrdinaryCyclesForm };
