import { useState } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";
import { IEntry } from "@design/data/table/types";
import { deletedCycleMessage } from "@config/payrollAgreement/payrollAgreementTab/generic/deletedCycleMessage";

const useDeleteCyclePayment = (
  data: IEntry,
  setEntryDeleted: (id: string | number) => void,
) => {
  const [showModal, setShowModal] = useState(false);
  const { addFlag } = useFlag();

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = () => {
    setEntryDeleted(data.id);
    setShowModal(!showModal);
    addFlag({
      title: deletedCycleMessage.success.title,
      description: deletedCycleMessage.success.description,
      appearance: deletedCycleMessage.success.appearance as IFlagAppearance,
      duration: deletedCycleMessage.success.duration,
    });
  };

  return {
    showModal,
    handleToggleModal,
    handleClick,
    setShowModal,
  };
};

export { useDeleteCyclePayment };
