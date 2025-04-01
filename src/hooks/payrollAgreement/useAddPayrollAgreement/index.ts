import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { FormikProps } from "formik";

import { addPayrollAgreementSteps } from "@config/payrollAgreement/payrollAgreementTab/assisted/steps";
import { IAddPayrollAgreementForms } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IAddPayrollAgreementForms";
import { ICompanyEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/ICompanyEntry";
import { IAddPayrollAgreementRef } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IAddPayrollAgreementRef";
import { IGeneralInformationEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IGeneralInformationPayroll";
import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { typePayrollForCyclesExtraord } from "@config/payrollAgreement/payrollAgreementTab/assisted/typePayrollForCyclesExtraord";
import { compareObjects } from "@utils/compareObjects";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { IAppData } from "@ptypes/context/authAndPortalDataProvider/IAppData";
import { formatDate } from "@utils/date/formatDate";
import { useEnumerators } from "@hooks/useEnumerators";
import { optionsFromEnumerators } from "@utils/optionsFromEnumerators";
import { IServerDomain } from "@ptypes/IServerDomain";

const useAddPayrollAgreement = (appData: IAppData) => {
  const initialValues = {
    company: {
      isValid: false,
      values: {
        companySelected: "",
        companyName: "",
        companyTypeIdent: "",
        companyNumberIdent: "",
        companyVerifDigit: "",
        companyDateIdent: "",
        companyNameCommercial: "",
        companyCode: "",
        companyCity: "",
        companyAddressRes: "",
        companyCountry: "",
        companyCountryIdent: "",
      },
    },
    generalInformation: {
      isValid: false,
      values: {
        namePayroll: "",
        typePayroll: "",
        sourcesOfIncome: "",
        applicationDaysPayroll: "",
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

  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] =
    useState<IAddPayrollAgreementForms>(initialValues);
  const [regularPaymentCycles, setRegularPaymentCycles] = useState<
    IOrdinaryCyclesEntry[]
  >([]);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [showGoBackModal, setShowGoBackModal] = useState(false);
  const [extraordinaryPayment, setExtraordinaryPayment] = useState<
    IExtraordinaryCyclesEntry[]
  >([]);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [typeRegularPayroll, setTypeRegularPayroll] = useState<boolean>(true);
  const [canRefresh, setCanRefresh] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [sourcesOfIncomeValues, setSourcesOfIncomeValues] = useState<
    IServerDomain[]
  >([]);

  const { enumData: incometype } = useEnumerators(
    "incometype",
    appData.businessUnit.publicCode,
  );

  const navigate = useNavigate();

  const smallScreen = useMediaQuery("(max-width: 990px)");

  const companyRef = useRef<FormikProps<ICompanyEntry>>(null);
  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const formReferences: IAddPayrollAgreementRef = {
    company: companyRef,
    generalInformation: generalInformationRef,
  };

  useEffect(() => {
    setSourcesOfIncomeValues(optionsFromEnumerators(incometype));
  }, [incometype]);

  useEffect(() => {
    setTypeRegularPayroll(
      typePayrollForCyclesExtraord.includes(
        formValues.generalInformation.values.typePayroll,
      )
        ? false
        : true,
    );
  }, [formValues.generalInformation.values.typePayroll]);

  const handleNextStep = () => {
    if (currentStep < addPayrollAgreementSteps.length) {
      if (companyRef.current) {
        setFormValues((prevValues) => ({
          ...prevValues,
          company: {
            ...prevValues.company,
            values: companyRef.current!.values,
          },
        }));
        setIsCurrentFormValid(companyRef.current.isValid);
        setCurrentStep(currentStep + 1);
      }

      if (generalInformationRef.current) {
        setFormValues((prevValues) => ({
          ...prevValues,
          generalInformation: {
            ...prevValues.generalInformation,
            values: generalInformationRef.current!.values,
          },
        }));
        setIsCurrentFormValid(generalInformationRef.current.isValid);
        const typePayroll =
          generalInformationRef.current.values.typePayroll &&
          typePayrollForCyclesExtraord.includes(
            generalInformationRef.current.values.typePayroll,
          );
        const stepOrdinaryCycles = typePayroll ? currentStep + 1 : 4;
        setCurrentStep(stepOrdinaryCycles);
      } else {
        setCurrentStep(currentStep + 1);
      }

      if (currentStep === 3) {
        setFormValues((prevValues) => ({
          ...prevValues,
          ordinaryCycles: {
            ...prevValues.ordinaryCycles,
            values: regularPaymentCycles ?? [],
          },
        }));
        setIsCurrentFormValid(true);
        setCurrentStep(currentStep + 1);
      }

      if (currentStep === 4) {
        setFormValues((prevValues) => ({
          ...prevValues,
          extraordinaryCycles: {
            ...prevValues.extraordinaryCycles,
            values: extraordinaryPayment ?? [],
          },
        }));
        setIsCurrentFormValid(true);
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }

    if (currentStep === 4) {
      const stepOrdinaryCycles = !typeRegularPayroll ? currentStep - 1 : 2;
      setCurrentStep(stepOrdinaryCycles);
    }
  };

  const handleOpenModal = () => {
    const compare = compareObjects(initialValues, formValues);
    const compareCompany = compareObjects(
      companyRef.current?.initialValues,
      companyRef.current?.values,
    );
    if (!compare || !compareCompany) {
      setShowGoBackModal(true);
    } else {
      navigate(-1);
    }
  };

  const handleCloseModal = () => {
    setShowGoBackModal(false);
  };

  const handleGoBack = () => {
    setCanRefresh(true);
    navigate(-1);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const hasUnsavedChanges =
        !compareObjects(initialValues, formValues) ||
        (companyRef.current &&
          !compareObjects(
            companyRef.current.initialValues,
            companyRef.current.values,
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
  }, [formValues, initialValues, companyRef, canRefresh]);

  const formValid =
    (regularPaymentCycles && regularPaymentCycles.length > 0) ||
    (extraordinaryPayment && extraordinaryPayment.length > 0)
      ? false
      : !isCurrentFormValid;

  const handleSubmitClick = () => {
    setSaveData({
      applicationName: "ifac",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "Solicitud de creación de una nómina de convenio",
      entityName: "PayrollAgreement",
      requestDate: formatDate(new Date()),
      useCaseName: "AddPayrollAgreement",
      configurationRequestData: {},
    });
    setShowRequestProcessModal(!showRequestProcessModal);
  };

  return {
    currentStep,
    formValues,
    formReferences,
    formValid,
    showGoBackModal,
    sourcesOfIncomeValues,
    smallScreen,
    regularPaymentCycles,
    isCurrentFormValid,
    extraordinaryPayment,
    typeRegularPayroll,
    showModal,
    showRequestProcessModal,
    saveData,
    handleToggleModal,
    setExtraordinaryPayment,
    setSourcesOfIncomeValues,
    setRegularPaymentCycles,
    handleNextStep,
    handlePreviousStep,
    setCurrentStep,
    setIsCurrentFormValid,
    handleGoBack,
    handleOpenModal,
    handleCloseModal,
    setShowModal,
    setShowRequestProcessModal,
    handleSubmitClick,
  };
};

export { useAddPayrollAgreement };
