import { useContext, useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import { useMediaQuery } from "@inubekit/inubekit";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { IEntry } from "@design/data/table/types";
import { IServerDomain } from "@ptypes/IServerDomain";
import { payDayOrdinaryOptions } from "@utils/payDayOrdinary";
import { addLeadingZero } from "@utils/addLeadingZero";
import { courtDaysOrdinaryOptions } from "@utils/courtDaysOrdinary";
import { payDayValues } from "@utils/payDayValues";
import { useEnumerators } from "@hooks/useEnumerators";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { optionsFromEnumerators } from "@utils/optionsFromEnumerators";
import { normalizeEnumTranslation } from "@utils/normalizeEnumTranslation";
import { compareObjects } from "@utils/compareObjects";

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
  initialData?: IOrdinaryCyclesEntry[],
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

  const isMobile = useMediaQuery("(max-width: 990px)");

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
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");
  const [paydayOptions, setPaydayOptions] = useState<
    IServerDomain[] | undefined
  >([]);
  const [numberDaysUntilCutOptions, setNumberDaysUntilCutOptions] = useState<
    IServerDomain[] | undefined
  >([]);

  const { appData } = useContext(AuthAndPortalData);
  const { enumData: periodicity } = useEnumerators(
    "schedule",
    appData.businessUnit.publicCode,
  );

  const periodicityOptions = optionsFromEnumerators(periodicity);

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
    if (!formik.values.periodicity) {
      formik.setFieldValue("payday", "");
      setPaydayOptions([]);
      setNumberDaysUntilCutOptions([]);
    }

    if (formik.values.periodicity) {
      formik.setFieldValue("payday", "");
      const Payday = payDayOrdinaryOptions(formik.values.periodicity);
      setPaydayOptions(Payday);

      const numberDaysUntilCut = courtDaysOrdinaryOptions(
        formik.values.periodicity,
      );
      setNumberDaysUntilCutOptions(numberDaysUntilCut);
    }
  }, [formik.values.periodicity]);

  const valuesEqual =
    JSON.stringify(initialValues) === JSON.stringify(formik.values);

  const valuesEqualBoton = compareObjects(initialData, entries);

  useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton(entries.length === 0 || valuesEqualBoton);
      } else {
        setIsDisabledButton(loading ?? !formik.isValid);
      }
    };
    updateButton();
  }, [
    entries,
    loading,
    initialData,
    entries,
    formik.isValid,
    initialValues,
    editDataOption,
  ]);

  const handleToggleModal = () => {
    setPaydayOptions([]);
    setNumberDaysUntilCutOptions([]);
    formik.resetForm();
    setShowAddModal(!showAddModal);
  };

  const onToggleInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };

  const createNewCycle = (id: number) => ({
    id: `cycle-${addLeadingZero(id).toString()}`,
    cycleId: addLeadingZero(id).toString(),
    nameCycle: formik.values.nameCycle,
    periodicity:
      normalizeEnumTranslation(formik.values.periodicity)?.name ??
      formik.values.periodicity,
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

  useEffect(() => {
    if (entryDeleted) {
      setEntries((prev) => prev.filter((entry) => entry.id !== entryDeleted));

      setRegularPaymentCycles((prev) =>
        prev.filter((entry) => entry.id !== entryDeleted),
      );
    }
  }, [entryDeleted]);

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
    isMobile,
    onToggleInfoModal,
    handleChange,
    handleAddCycle,
    handleToggleModal,
    setEntryDeleted,
  };
};

export { useOrdinaryCyclesForm };
