import { useContext, useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";
import { IRuleDecision } from "@isettingkit/input";

import { addDestinationStepsConfig } from "@config/moneyDestination/addDestination/assisted";
import { IGeneralInformationEntry } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IGeneralInformationDestination";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { formatDate } from "@utils/date/formatDate";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";

const useAddDestination = () => {
  const { appData } = useContext(AuthAndPortalData);
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<IGeneralInformationEntry>({
    nameDestination: "",
    description: "",
    icon: "",
  });
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [showModal, setShowModal] = useState(false);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [creditLineOriginalDecisions, setCreditLineOriginalDecisions] =
    useState<IRuleDecision[]>([]);

  const [creditLineDecisions, setCreditLineDecisions] = useState<
    IRuleDecision[]
  >([]);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const [nameDecision, setNameDecision] = useState(
    generalInformationRef.current?.values.nameDestination ?? "",
  );

  useEffect(() => {
    setNameDecision(formValues.nameDestination ?? "");
  }, [formValues.nameDestination]);

  const handleNextStep = () => {
    if (currentStep < addDestinationStepsConfig("").length) {
      if (generalInformationRef.current) {
        setFormValues(generalInformationRef.current.values);
        setIsCurrentFormValid(generalInformationRef.current.isValid);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const decisionsData = creditLineOriginalDecisions.map((decision) => {
    return {
      ruleName: "LineOfCredit",
      decisionByRule: [
        {
          conditionThatEstablishesTheDecision:
            decision.conditionThatEstablishesTheDecision?.map((condition) => {
              return {
                conditionName: condition.conditionName,
                conditionDataType: condition.conditionDataType,
                howToSetTheCondition: condition.howToSetTheCondition,
                labelName: condition.labelName,
                switchPlaces: condition.switchPlaces,
                value: condition.value,
              };
            }),
          effectiveFrom: decision.effectiveFrom,
          validUntil: decision.validUntil,
          value: decision.value,
        },
      ],
    };
  });

  const handleSubmitClick = () => {
    handleToggleModal();
    setShowRequestProcessModal(!showRequestProcessModal);
    setSaveData({
      applicationName: "ifac",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "solicitud de creación de un destino de dinero",
      entityName: "MoneyDestination",
      requestDate: formatDate(new Date()),
      useCaseName: "AddMoneyDestination",
      configurationRequestData: {
        abbreviatedName: formValues.nameDestination,
        descriptionUse: formValues.description,
        iconReference: formValues.icon ?? "",
        rules: decisionsData,
      },
    });
  };

  return {
    creditLineDecisions,
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    nameDecision,
    showModal,
    showRequestProcessModal,
    saveData,
    handleNextStep,
    handlePreviousStep,
    handleSubmitClick,
    handleToggleModal,
    setCreditLineDecisions,
    setCreditLineOriginalDecisions,
    setCurrentStep,
    setIsCurrentFormValid,
    setShowRequestProcessModal,
  };
};

export { useAddDestination };
