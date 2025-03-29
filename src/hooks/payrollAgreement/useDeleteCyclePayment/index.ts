import { useState } from "react";
import { IEntry } from "@design/data/table/types";

const useDeleteCyclePayment = (
  data: IEntry,
  setEntryDeleted: (id: string | number) => void,
) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = () => {
    setEntryDeleted(data.id);
    setShowModal(!showModal);
  };

  return {
    showModal,
    handleToggleModal,
    handleClick,
    setShowModal,
  };
};

export { useDeleteCyclePayment };
