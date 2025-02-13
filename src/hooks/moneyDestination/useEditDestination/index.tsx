import { useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";
import { ICondition, IRuleDecision } from "@isettingkit/input";

import { editDestinationTabsConfig } from "@config/moneyDestination/editDestination/tabs";
import { useEvaluateRuleByBusinessUnit } from "@hooks/rules/useEvaluateRuleByBusinessUnit";
import { IGeneralInformationEntry } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IGeneralInformationDestination";
import { IAppData } from "@ptypes/context/authAndPortalDataProvider/IAppData";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { formatDate } from "@utils/date/formatDate";
import { formatDateDecision } from "@utils/date/formatDateDecision";
import { arraysEqual } from "@utils/destination/arraysEqual";
import { findDecision } from "@utils/destination/findDecision";

const useEditDestination = (
  data: {
    nameDestination: string;
    description: string;
    icon: string;
    id: string;
  },
  appData: IAppData,
) => {
  const normalizeData = {
    nameDestination: data.nameDestination,
    description: data.description,
    icon: data.icon,
    id: data.id,
  };

  const [isSelected, setIsSelected] = useState<string>(
    editDestinationTabsConfig.generalInformation.id,
  );
  const [formValues, setFormValues] =
    useState<IGeneralInformationEntry>(normalizeData);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [errorFetchSaveData, setErrorFetchSaveData] = useState(true);

  const [creditLineDecisions, setCreditLineDecisions] = useState<
    IRuleDecision[]
  >([]);
  const [newDecisions, setNewDecisions] = useState<IRuleDecision[]>();
  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const [nameDecision, setNameDecision] = useState(
    generalInformationRef.current?.values.nameDestination ?? "",
  );

  const ruleName = "LineOfCredit";
  const conditionRule = "MoneyDestination";

  const { evaluateRuleData } = useEvaluateRuleByBusinessUnit(
    appData.businessUnit.publicCode,
    {
      ruleName: ruleName,
      conditions: [
        {
          condition: conditionRule,
          value: data.nameDestination,
        },
      ],
    },
  );

  useEffect(() => {
    setNameDecision(formValues.nameDestination ?? "");
  }, [formValues.nameDestination]);

  const normalizeEvaluateRuleData = evaluateRuleData?.map((item) => {
    return {
      ...item,
      conditionThatEstablishesTheDecision:
        item.conditionThatEstablishesTheDecision?.map((condition) => {
          return {
            ...condition,
            hidden: condition.conditionName === conditionRule,
          };
        }),
    };
  });

  useEffect(() => {
    if (evaluateRuleData && normalizeEvaluateRuleData) {
      setCreditLineDecisions(normalizeEvaluateRuleData);
    }
  }, [evaluateRuleData]);

  const prevCreditLineDecisionsRef = useRef<IRuleDecision[]>([]);
  prevCreditLineDecisionsRef.current = normalizeEvaluateRuleData ?? [];

  const newInsertValues = () => {
    if (!arraysEqual(prevCreditLineDecisionsRef.current, creditLineDecisions)) {
      return creditLineDecisions
        .filter(
          (decision) =>
            !findDecision(prevCreditLineDecisionsRef.current, decision),
        )
        .map((decision) => {
          const decisionByRule: IRuleDecision = {
            conditionThatEstablishesTheDecision:
              decision.conditionThatEstablishesTheDecision?.map((condition) => {
                return {
                  conditionName: condition.conditionName,
                  value: condition.value,
                };
              }) as ICondition[],
            effectiveFrom: formatDateDecision(decision.effectiveFrom as string),
            value: decision.value,
            transactionOperation: "Insert",
          };

          if (decision.validUntil) {
            decisionByRule.validUntil = formatDateDecision(
              decision.validUntil as string,
            );
          }

          return {
            ruleName: decision.ruleName,
            decisionByRule: [decisionByRule],
          };
        });
    }
  };

  const newDeletedValues = () => {
    if (!arraysEqual(prevCreditLineDecisionsRef.current, creditLineDecisions)) {
      return prevCreditLineDecisionsRef.current
        .filter((decision) => !findDecision(creditLineDecisions, decision))
        .map((decision: IRuleDecision) => {
          const decisionByRule: IRuleDecision = {
            conditionThatEstablishesTheDecision:
              decision.conditionThatEstablishesTheDecision?.map((condition) => {
                return {
                  conditionName: condition.conditionName,
                  value: condition.value,
                };
              }) as ICondition[],
            effectiveFrom: formatDateDecision(decision.effectiveFrom as string),
            value: decision.value,
            transactionOperation: "Delete",
          };

          if (decision.validUntil) {
            decisionByRule.validUntil = formatDateDecision(
              decision.validUntil as string,
            );
          }

          return {
            ruleName: decision.ruleName,
            decisionByRule: [decisionByRule],
          };
        });
    }
  };

  useEffect(() => {
    const insertValues = newInsertValues();
    const deleteValues = newDeletedValues();

    setNewDecisions([...(insertValues ?? []), ...(deleteValues ?? [])]);
  }, [creditLineDecisions]);

  const onSubmit = () => {
    const configurationRequestData: {
      moneyDestinationId: string;
      abbreviatedName?: string;
      descriptionUse?: string;
      iconReference?: string;
      rules?: IRuleDecision[];
    } = {
      moneyDestinationId: data.id,
    };
    if (
      generalInformationRef.current?.values.nameDestination !== undefined &&
      (generalInformationRef.current?.values.nameDestination !==
        data.nameDestination ||
        generalInformationRef.current?.values.description !== data.description)
    ) {
      configurationRequestData.abbreviatedName =
        generalInformationRef.current?.values.nameDestination ?? "";
      configurationRequestData.descriptionUse =
        generalInformationRef.current?.values.description ?? "";
      configurationRequestData.iconReference =
        generalInformationRef.current?.values.icon ?? "";
    }

    if (newDecisions && newDecisions.length > 0) {
      configurationRequestData.rules = newDecisions;
    }

    setSaveData({
      applicationName: "ifac",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "Solicitud de modificación de un destino de dinero",
      entityName: conditionRule,
      requestDate: formatDate(new Date()),
      useCaseName: "ModifyMoneyDestination",
      configurationRequestData,
    });
    setShowRequestProcessModal(true);
  };

  useEffect(() => {
    if (!errorFetchSaveData) {
      setFormValues(
        generalInformationRef.current?.values as IGeneralInformationEntry,
      );
    }
  }, [errorFetchSaveData]);

  const handleReset = () => {
    setCreditLineDecisions(evaluateRuleData ?? []);
  };

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  return {
    creditLineDecisions,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    nameDecision,
    isSelected,
    saveData,
    showRequestProcessModal,
    handleReset,
    onSubmit,
    setCreditLineDecisions,
    setIsCurrentFormValid,
    handleTabChange,
    setShowRequestProcessModal,
    setErrorFetchSaveData,
  };
};

export { useEditDestination };
