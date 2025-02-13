import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IEntry } from "@design/data/table/types";

const useEditDestinationModal = (data: IEntry) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const destinationData = {
    id: data.id,
    nameDestination: data.name,
    description: data.descriptionUse,
    icon: data.iconReference,
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEdit = () => {
    navigate(`/money-destination/edit-destination`, {
      state: { data: destinationData },
    });
  };

  return {
    showModal,
    handleToggleModal,
    handleEdit,
  };
};

export { useEditDestinationModal };
