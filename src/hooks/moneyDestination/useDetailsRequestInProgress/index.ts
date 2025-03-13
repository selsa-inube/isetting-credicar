import { useEffect, useState } from "react";
import { IServerDomain } from "@ptypes/IServerDomain";
import { IConfigurationRequestsTraceability } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/requestsInProgress/IConfigRequestsTraceability";
import { formatDateTable } from "@utils/date/formatDateTable";
import { IEntry } from "@design/data/table/types";
import { eventBus } from "@events/eventBus";

const useDetailsRequestInProgress = (data: IEntry) => {
  const [showModal, setShowModal] = useState(false);

  const dateOptions = data.configurationRequestsTraceability.map(
    (traceability: IConfigurationRequestsTraceability) => {
      return {
        id: traceability.traceabilityId,
        label: formatDateTable(new Date(traceability.executionDate)),
        value: traceability.traceabilityId,
        observation: traceability.description,
      };
    },
  );

  const [form, setForm] = useState({
    name: "",
    dateTraceability: dateOptions[0].value,
  });

  const handleChange = (name: string, newValue: string) => {
    setForm({ ...form, [name]: newValue });
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const normalizeData = {
    ...data,
    request: data.useCaseName,
    responsable:
      data.configurationRequestsTraceability[0].userWhoExecutedAction,
    status: data.requestStatus,
    observation:
      dateOptions.find(
        (option: IServerDomain) => option.value === form.dateTraceability,
      )?.observation ?? "",
  };

  useEffect(() => {
    eventBus.emit("secondModalState", showModal);
  }, [showModal]);

  return {
    dateOptions,
    form,
    showModal,
    handleChange,
    handleToggleModal,
    normalizeData,
  };
};

export { useDetailsRequestInProgress };
