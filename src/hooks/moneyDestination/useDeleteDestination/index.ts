import { useState } from "react";
import { IEntry } from "@design/data/table/types";

const useDeleteDestination = (
  data: IEntry,
  setEntryDeleted: (value: string | number) => void,
) => {
  const [showModal, setShowModal] = useState(false);
  const [justificationDelete, setJustificationDelete] = useState("");

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = () => {
    setShowModal(!showModal);
    console.log("Delete", data, justificationDelete);
    setEntryDeleted(data.id);
  };

  return { showModal, handleToggleModal, handleClick, setJustificationDelete };
};
export { useDeleteDestination };
