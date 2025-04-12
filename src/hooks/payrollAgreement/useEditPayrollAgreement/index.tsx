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

const useEditPayrollAgreement = (data: IPayrollAgreementData) => {
  const initialData = {
    generalInformation: {
      isValid: false,
      values: {
        namePayroll: data.abbreviatedName ?? "",
        typePayroll: data.payrollForDeductionAgreementType ?? "",
        sourcesOfIncome: "Independiente",
        applicationDaysPayroll: String(
          data.numberOfDaysForReceivingTheDiscounts ?? 0,
        ),
      },
    },
    ordinaryCycles: {
      isValid: false,
      values: [
        {
          cycleId: "",
          nameCycle: "",
          periodicity: "",
          payday: "",
          numberDaysUntilCut: "",
        },
      ],
    },
    extraordinaryCycles: {
      isValid: false,
      values: [
        {
          nameCycle: "",
          typePayment: "",
          payday: "",
          numberDaysUntilCut: "",
        },
      ],
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
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [canRefresh, setCanRefresh] = useState(false);
  const [sourcesOfIncomeValues, setSourcesOfIncomeValues] = useState<
    IServerDomain[]
  >([]);
  const [showGoBackModal, setShowGoBackModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const conditionRule = "PayrollAgreement";

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const smallScreen = useMediaQuery(mediaQueryMobile);

  const { enumData: incometype } = useEnumerators(
    "incometype",
    appData.businessUnit.publicCode,
  );

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

  const handleEditedModal = () => {
    setShowModal(true);
  };

  const handleToggleEditedModal = () => {
    setShowModal(!showModal);
    onSubmit();
  };

  const onSubmit = () => {
    const currentValues = generalInformationRef.current?.values;

    if (!currentValues) return;

    const changedFields: {
      namePayroll?: string;
      sourcesOfIncome?: string;
      applicationDaysPayroll?: string;
    } = {};

    const initialValues = initialData.generalInformation.values;

    (
      ["namePayroll", "sourcesOfIncome", "applicationDaysPayroll"] as const
    ).forEach((key) => {
      if (currentValues[key] !== initialValues[key]) {
        changedFields[key] = currentValues[key];
      }
    });

    const hasChanges = Object.keys(changedFields).length > 0;

    if (
      hasChanges &&
      isSelected === editPayrollAgTabsConfig.generalInformation.id
    ) {
      setSaveData({
        applicationName: "ifac",
        businessManagerCode: appData.businessManager.publicCode,
        businessUnitCode: appData.businessUnit.publicCode,
        description: "Solicitud de modificación de una nómina de convenio",
        entityName: conditionRule,
        requestDate: formatDate(new Date()),
        useCaseName: "ModifyPayrollAgreement",
        configurationRequestData: changedFields,
      });
      setShowRequestProcessModal(true);
    }
  };

  const handleReset = () => {
    setShowGoBackModal(true);
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
