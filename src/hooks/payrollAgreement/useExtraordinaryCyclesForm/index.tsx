import { useMediaQuery } from "@inubekit/inubekit";
import { useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { IEntry } from "@design/data/table/types";
import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { addLeadingZero } from "@utils/addLeadingZero";
import { IServerDomain } from "@ptypes/IServerDomain";
import { extraordinaryDaysOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/extraordinaryDay";
import { monthExtraordinaryOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/monthExtraordinary";
import { typePaymentExtraordinaryOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/typePaymentExtraordinary";
import { daysOfMonth } from "@utils/daysOfMonth";
import { convertToOptions } from "@utils/convertToOptions";
import { monthsInNumber } from "@config/payrollAgreement/payrollAgreementTab/generic/monthsInNumber";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { generateExtraOrdPayDays } from "@utils/generateExtraOrdPayDays";

const useExtraordinaryCyclesForm = (
  ref: React.ForwardedRef<FormikProps<IExtraordinaryCyclesEntry>>,
  editDataOption: boolean,
  typeRegularPayroll: boolean,
  loading: boolean | undefined,
  onSubmit: ((values: IExtraordinaryCyclesEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined,
  extraordinaryPayment: IExtraordinaryCyclesEntry[],
  setExtraordinaryPayment: React.Dispatch<
    React.SetStateAction<IExtraordinaryCyclesEntry[]>
  >,
  regularPaymentCycles?: IOrdinaryCyclesEntry[],
) => {
  const createValidationSchema = () =>
    object().shape({
      nameCycle: validationRules.string.required(validationMessages.required),
      typePayment: validationRules.string.required(validationMessages.required),
      day: validationRules.number.required(validationMessages.required),
      month: validationRules.string.required(validationMessages.required),
      numberDaysUntilCut: validationRules.string.required(
        validationMessages.required,
      ),
    });

  const validationSchema = createValidationSchema();

  const initialValues: IExtraordinaryCyclesEntry = {
    nameCycle: "",
    typePayment: "",
    day: "",
    month: "",
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
  const [dayOptions, setDayOptions] = useState<IServerDomain[] | undefined>([]);
  const typePaymentOptions = typePaymentExtraordinaryOptions;
  const monthOptions = monthExtraordinaryOptions;
  const numberDaysUntilCutOptions = extraordinaryDaysOptions;

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
    if (!formik.values.month) {
      setDayOptions([]);
      formik.setFieldValue("day", "");
    }

    if (formik.values.month && typeRegularPayroll) {
      formik.setFieldValue("day", "");
      const options: IServerDomain[] = convertToOptions(
        daysOfMonth(
          monthsInNumber[formik.values.month as keyof typeof monthsInNumber],
        ),
      );
      setDayOptions(options);
    }

    if (formik.values.month && !typeRegularPayroll && regularPaymentCycles) {
      formik.setFieldValue("day", "");

      const options: IServerDomain[] = convertToOptions(
        generateExtraOrdPayDays(
          regularPaymentCycles,
          monthsInNumber[formik.values.month as keyof typeof monthsInNumber],
        ),
      );
      setDayOptions(options);
    }
  }, [formik.values.month]);

  useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton((!formik.isValid || valuesEmpty) && !loading);
      } else {
        setIsDisabledButton(!typeRegularPayroll ? false : entries.length === 0);
      }
    };
    updateButton();
  }, [formik.values, loading, formik.isValid, initialValues, editDataOption]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    formik.resetForm();
  };

  const createNewCycle = (id: number) => ({
    id: `cycle-${addLeadingZero(id).toString()}`,
    nameCycle: formik.values.nameCycle,
    typePayment: formik.values.typePayment,
    payday: `${formik.values.month}-${formik.values.day}`,
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

    setShowModal(false);
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
    typePaymentOptions,
    numberDaysUntilCutOptions,
    monthOptions,
    dayOptions,
    handleChange,
    handleReset,
    handleAddCycle,
    handleToggleModal,
  };
};

export { useExtraordinaryCyclesForm };
