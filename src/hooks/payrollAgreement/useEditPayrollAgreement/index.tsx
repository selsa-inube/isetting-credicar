import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { FormikProps } from "formik";

import { mediaQueryMobile } from "@config/environment";
import { editPayrollAgTabsConfig } from "@config/payrollAgreement/payrollAgreementTab/edit/tab";
import { IGeneralInformationEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IGeneralInformationPayroll";
import { IPayrollAgreementData } from "@ptypes/payrollAgreement/payrollAgreementTab/IPayrollAgreementData";
import { IEditPayrollAgreementForms } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IEditPayrollAgreementForms";
import { IServerDomain } from "@ptypes/IServerDomain";
import { optionsFromEnumerators } from "@utils/optionsFromEnumerators";
import { useEnumerators } from "@hooks/useEnumerators";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { compareObjects } from "@utils/compareObjects";
import { formatDate } from "@utils/date/formatDate";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { addLeadingZero } from "@utils/addLeadingZero";
import { typePayrollForCyclesExtraord } from "@config/payrollAgreement/payrollAgreementTab/assisted/typePayrollForCyclesExtraord";
import { IEditPayrollTabsConfig } from "@ptypes/payrollAgreement/payrollAgreementTab/IEditPayrollTabsConfig";
import { normalizeEnumTranslationCode } from "@utils/normalizeEnumTranslationCode";
import { IPayrollSpecialBenefit } from "@ptypes/payrollAgreement/payrollAgreementTab/IPayrollSpecialBenefit";
import { ISeverancePaymentCycles } from "@ptypes/payrollAgreement/payrollAgreementTab/ISeverancePaymentCycles";
import { IRegularPaymentCycles } from "@ptypes/payrollAgreement/payrollAgreementTab/IRegularPaymentCycles";
import { severancePay } from "@config/payrollAgreement/payrollAgreementTab/assisted/severancePaymentCycles";
import { specialBenefitPayment } from "@config/payrollAgreement/payrollAgreementTab/assisted/specialBenefitPaymentCycles";

const useEditPayrollAgreement = (data: IPayrollAgreementData) => {
  const regularPaymentValues = () => {
    if (data.regularPaymentCycles) {
      return data.regularPaymentCycles.map((entry, index) => ({
        id: String(index + 1),
        cycleId: `cycle-${addLeadingZero(index + 1).toString()}`,
        nameCycle: entry.regularPaymentCycleName,
        periodicity: entry.schedule,
        payday: entry.paymentDay,
        numberDaysUntilCut: String(entry.numberOfDaysBeforePaymentToBill),
      }));
    } else {
      return [];
    }
  };

  const extraordinaryPaymentValues = () => {
    let extraordinary: IExtraordinaryCyclesEntry[] = [];
    if (data.payrollSpecialBenefitPaymentCycles) {
      extraordinary = extraordinary.concat(
        Object.entries(data.payrollSpecialBenefitPaymentCycles).length > 0
          ? data.payrollSpecialBenefitPaymentCycles.map((entry, index) => {
              return {
                id: `cycle-special-benefit-${addLeadingZero(index + 1).toString()}`,
                nameCycle: entry.abbreviatedName,
                typePayment: "Prima",
                payday: entry.paymentDay,
                numberDaysUntilCut: String(
                  entry.numberOfDaysBeforePaymentToBill,
                ),
              };
            })
          : [],
      );
    }
    if (data.severancePaymentCycles) {
      extraordinary = extraordinary.concat(
        Object.entries(data.severancePaymentCycles).length > 0
          ? data.severancePaymentCycles.map((entry, index) => {
              return {
                id: `cycle-severance-${addLeadingZero(index + 1).toString()}`,
                nameCycle: entry.abbreviatedName,
                typePayment: "Cesantias",
                payday: entry.paymentDay,
                numberDaysUntilCut: String(
                  entry.numberOfDaysBeforePaymentToBill,
                ),
              };
            })
          : [],
      );
    }
    return extraordinary;
  };

  const initialData = {
    generalInformation: {
      isValid: false,
      values: {
        namePayroll: data.abbreviatedName ?? "",
        typePayroll: data.payrollForDeductionAgreementType ?? "",
        sourcesOfIncome: "Independiente", ///cambiar por el valor correcto
        applicationDaysPayroll: String(
          data.numberOfDaysForReceivingTheDiscounts ?? 0,
        ),
      },
    },
    ordinaryCycles: {
      isValid: false,
      values: regularPaymentValues(),
    },
    extraordinaryCycles: {
      isValid: false,
      values: extraordinaryPaymentValues(),
    },
  };

  const companyAgreement = data.legalPersonName ?? "";
  const { appData } = useContext(AuthAndPortalData);
  const [isSelected, setIsSelected] = useState<string>(
    editPayrollAgTabsConfig.generalInformation.id,
  );
  const [formValues, setFormValues] =
    useState<IEditPayrollAgreementForms>(initialData);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [typeRegularPayroll, setTypeRegularPayroll] = useState<boolean>(false);
  const [regularPaymentCycles, setRegularPaymentCycles] = useState<
    IOrdinaryCyclesEntry[]
  >(initialData.ordinaryCycles.values);
  const [extraordinaryPayment, setExtraordinaryPayment] = useState<
    IExtraordinaryCyclesEntry[]
  >(extraordinaryPaymentValues());
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [canRefresh, setCanRefresh] = useState(false);
  const [sourcesOfIncomeValues, setSourcesOfIncomeValues] = useState<
    IServerDomain[]
  >([]);
  const [showGoBackModal, setShowGoBackModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const conditionRule = "PayrollAgreement";
  const smallScreen = useMediaQuery(mediaQueryMobile);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const { enumData: incometype } = useEnumerators(
    "incometype",
    appData.businessUnit.publicCode,
  );

  useEffect(() => {
    setTypeRegularPayroll(
      typePayrollForCyclesExtraord.includes(
        formValues.generalInformation.values.typePayroll,
      )
        ? true
        : false,
    );
  }, [formValues.generalInformation.values.typePayroll]);

  const filteredTabsConfig = Object.keys(editPayrollAgTabsConfig).reduce(
    (acc, key) => {
      const tab =
        editPayrollAgTabsConfig[key as keyof typeof editPayrollAgTabsConfig];

      const ordinaryData = regularPaymentValues();

      if (key === "regularPaymentCycles" && ordinaryData.length === 0) {
        return acc;
      }

      if (tab !== undefined) {
        acc[key as keyof IEditPayrollTabsConfig] = tab;
      }
      return acc;
    },
    {} as IEditPayrollTabsConfig,
  );

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const hasUnsavedChanges =
        !compareObjects(initialData, formValues) ||
        (generalInformationRef.current &&
          !compareObjects(
            generalInformationRef.current.initialValues,
            generalInformationRef.current.values,
          ));

      if (hasUnsavedChanges) {
        event.preventDefault();
        setShowGoBackModal(!showGoBackModal);

        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [formValues, initialData, generalInformationRef, canRefresh]);

  useEffect(() => {
    const options = optionsFromEnumerators(incometype);
    const updatedData = options.map((entry) =>
      initialData.generalInformation.values.sourcesOfIncome?.includes(
        entry.label,
      )
        ? { ...entry, checked: true }
        : { ...entry, checked: false },
    );
    setSourcesOfIncomeValues(updatedData);
  }, [incometype]);

  useEffect(() => {
    if (generalInformationRef.current?.values) {
      setFormValues((prev) => ({
        ...prev,
        generalInformation: {
          ...prev.generalInformation,
          values: {
            ...prev.generalInformation.values,
            ...generalInformationRef.current?.values,
          },
        },
      }));
    }
  }, [generalInformationRef.current?.values]);

  const handleTabChange = (tabId: string) => {
    if (generalInformationRef.current?.values) {
      setFormValues((prev) => ({
        ...prev,
        generalInformation: {
          ...prev.generalInformation,
          values: {
            ...prev.generalInformation.values,
            ...generalInformationRef.current?.values,
          },
        },
      }));
    }
    setIsSelected(tabId);
  };

  const handleToggleEditedModal = () => {
    setShowModal(!showModal);
  };

  const handleReset = () => {
    setShowGoBackModal(true);
  };

  const handleEditedModal = () => {
    setShowModal(false);
    onSubmit();
  };

  const handleOpenModal = () => {
    const compare = compareObjects(initialData, formValues);
    const compareCompany = compareObjects(
      generalInformationRef.current?.initialValues,
      generalInformationRef.current?.values,
    );
    if (!compare || !compareCompany) {
      setShowGoBackModal(true);
    } else {
      navigate(-1);
    }
  };

  const handleCloseGoBackModal = () => {
    setShowGoBackModal(false);
  };

  const handleGoBack = () => {
    setCanRefresh(true);
    navigate(-1);
  };

  const newObjRegularPayment = (
    newValues: IOrdinaryCyclesEntry[],
    transactionOperation: string,
  ): IRegularPaymentCycles[] =>
    newValues.map((item) => ({
      payrollForDeductionAgreementId: item.cycleId,
      regularPaymentCycleNumber: item.cycleId,
      regularPaymentCycleName: item.nameCycle,
      schedule:
        normalizeEnumTranslationCode(item.periodicity)?.code ??
        item.periodicity,
      paymentDay: item.payday,
      numberOfDaysBeforePaymentToBill: Number(item.numberDaysUntilCut),
      transactionOperation: transactionOperation,
    }));

  const newObjExtraordinaryPayment = (
    newValues: IExtraordinaryCyclesEntry[],
    transactionOperation: string,
  ) =>
    newValues.map((item) => ({
      abbreviatedName: item.nameCycle,
      numberOfDaysBeforePaymentToBill: Number(item.numberDaysUntilCut),
      paymentDay: item.payday ?? "",
      payrollForDeductionAgreementId: item.id ?? "",
      transactionOperation: transactionOperation,
    }));

  const newRegularPayment = () => {
    const newValues = regularPaymentCycles.filter(
      (formValue) =>
        !initialData.ordinaryCycles.values.some(
          (initialValue) =>
            JSON.stringify(initialValue) === JSON.stringify(formValue),
        ),
    );

    const deleteValues = initialData.ordinaryCycles.values.filter(
      (formValue) =>
        !regularPaymentCycles.some(
          (initialValue) =>
            JSON.stringify(initialValue) === JSON.stringify(formValue),
        ),
    );

    const regularPayment = [
      ...newObjRegularPayment(newValues, "Insert"),
      ...newObjRegularPayment(deleteValues, "Delete"),
    ];
    return regularPayment;
  };

  const newExtraordinaryPayment = () => {
    const newValues = extraordinaryPayment.filter(
      (formValue) =>
        !initialData.extraordinaryCycles.values.some(
          (initialValue) =>
            JSON.stringify(initialValue) === JSON.stringify(formValue),
        ),
    );

    const deleteValues = initialData.extraordinaryCycles.values.filter(
      (formValue) =>
        !extraordinaryPayment.some(
          (initialValue) =>
            JSON.stringify(initialValue) === JSON.stringify(formValue),
        ),
    );

    const newValSeverance = newValues.filter((item) =>
      severancePay.includes(item.typePayment),
    );

    const newDelSeverance = deleteValues.filter((item) =>
      severancePay.includes(item.typePayment),
    );

    const newValSpecialBenefit = newValues.filter((item) =>
      specialBenefitPayment.includes(item.typePayment),
    );

    const newDelSpecialBenefit = deleteValues.filter((item) =>
      specialBenefitPayment.includes(item.typePayment),
    );

    return {
      severancePayment: [
        ...newObjExtraordinaryPayment(newValSeverance, "Insert"),
        ...newObjExtraordinaryPayment(newDelSeverance, "Delete"),
      ],
      payrollSpeBenPayment: [
        ...newObjExtraordinaryPayment(newValSpecialBenefit, "Insert"),
        ...newObjExtraordinaryPayment(newDelSpecialBenefit, "Delete"),
      ],
    };
  };

  const onSubmit = () => {
    const currentValues = generalInformationRef.current?.values;
    const formValuesGenInf = formValues.generalInformation.values;
    const initialDataValues = initialData.generalInformation.values;
    const compare =
      JSON.stringify(initialData.generalInformation) ===
      JSON.stringify(formValues.generalInformation);

    const valueUpdatedName =
      initialDataValues.namePayroll !== currentValues?.namePayroll;

    const valueUpdourcesOfIncome =
      initialDataValues.sourcesOfIncome !== currentValues?.sourcesOfIncome;

    const valueUpdatedApplDays =
      initialDataValues.applicationDaysPayroll !==
      currentValues?.applicationDaysPayroll;

    const configurationRequestData: {
      namePayroll?: string;
      sourcesOfIncome?: string;
      applicationDaysPayroll?: string;
      regularPaymentCycles?: IRegularPaymentCycles[];
      payrollSpecialBenefitPaymentCycles?: IPayrollSpecialBenefit[];
      severancePaymentCycles?: ISeverancePaymentCycles[];
    } = {};

    if (currentValues?.namePayroll !== undefined && valueUpdatedName) {
      configurationRequestData.namePayroll = currentValues?.namePayroll;
    }

    if (
      currentValues?.sourcesOfIncome !== undefined &&
      valueUpdourcesOfIncome
    ) {
      configurationRequestData.sourcesOfIncome = currentValues?.sourcesOfIncome;
    }

    if (
      currentValues?.applicationDaysPayroll !== undefined &&
      valueUpdatedApplDays
    ) {
      configurationRequestData.applicationDaysPayroll =
        currentValues?.applicationDaysPayroll;
    }

    if (
      !compare &&
      isSelected !== editPayrollAgTabsConfig.generalInformation.id
    ) {
      if (initialDataValues.namePayroll !== formValuesGenInf.namePayroll) {
        configurationRequestData.namePayroll = formValuesGenInf.namePayroll;
      }
      if (
        initialDataValues.sourcesOfIncome !== formValuesGenInf.sourcesOfIncome
      ) {
        configurationRequestData.sourcesOfIncome =
          formValuesGenInf.sourcesOfIncome;
      }

      if (
        initialDataValues.applicationDaysPayroll !==
        formValuesGenInf.applicationDaysPayroll
      ) {
        configurationRequestData.applicationDaysPayroll =
          formValuesGenInf.applicationDaysPayroll;
      }
    }

    if (newRegularPayment().length > 0) {
      configurationRequestData.regularPaymentCycles = newRegularPayment();
    }

    if (newExtraordinaryPayment().severancePayment.length > 0) {
      configurationRequestData.severancePaymentCycles =
        newExtraordinaryPayment().severancePayment;
    }
    if (newExtraordinaryPayment().payrollSpeBenPayment.length > 0) {
      configurationRequestData.payrollSpecialBenefitPaymentCycles =
        newExtraordinaryPayment().payrollSpeBenPayment;
    }

    setSaveData({
      applicationName: "ifac",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "Solicitud de modificación de una nómina de convenio",
      entityName: conditionRule,
      requestDate: formatDate(new Date()),
      useCaseName: "ModifyPayrollAgreement",
      configurationRequestData,
    });
    setShowRequestProcessModal(true);
  };

  return {
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    isSelected,
    smallScreen,
    sourcesOfIncomeValues,
    companyAgreement,
    showRequestProcessModal,
    saveData,
    showGoBackModal,
    showModal,
    initialData,
    typeRegularPayroll,
    regularPaymentCycles,
    extraordinaryPayment,
    filteredTabsConfig,
    setExtraordinaryPayment,
    setRegularPaymentCycles,
    setShowModal,
    handleCloseGoBackModal,
    setShowGoBackModal,
    handleGoBack,
    setShowRequestProcessModal,
    setSourcesOfIncomeValues,
    handleReset,
    onSubmit,
    setIsCurrentFormValid,
    handleTabChange,
    handleOpenModal,
    handleEditedModal,
    handleToggleEditedModal,
  };
};

export { useEditPayrollAgreement };
