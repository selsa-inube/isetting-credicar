import { useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";
import { IRuleDecision } from "@isettingkit/input";

import { IGeneralInformationEntry } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IGeneralInformationDestination";

const useEditDestination = (data: {
  nameDestination: string;
  description: string;
  icon: string;
}) => {
  const normalizeData = {
    nameDestination: data.nameDestination,
    description: data.description,
    icon: data.icon,
  };

  const [formValues, setFormValues] =
    useState<IGeneralInformationEntry>(normalizeData);
  const [showModal, setShowModal] = useState(false);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const [creditLineDecisions, setCreditLineDecisions] = useState<
    IRuleDecision[]
  >([]);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const [nameDecision, setNameDecision] = useState(
    generalInformationRef.current?.values.nameDestination ?? "",
  );

  useEffect(() => {
    setNameDecision(formValues.nameDestination ?? "");
  }, [formValues.nameDestination]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const onSubmit = () => {
    setFormValues(
      generalInformationRef.current?.values as IGeneralInformationEntry,
    );
  };

  const handleReset = () => {
    setCreditLineDecisions([]);
  };

  return {
    creditLineDecisions,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    nameDecision,
    showModal,
    handleReset,
    onSubmit,
    handleToggleModal,
    setCreditLineDecisions,
    setIsCurrentFormValid,
  };
};

export { useEditDestination };
