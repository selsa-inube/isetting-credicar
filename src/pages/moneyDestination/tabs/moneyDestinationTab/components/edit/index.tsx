import { useState } from "react";
import { MdOutlineCreate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";

import { IEntry } from "@design/data/table/types";
import { ComponentAppearance } from "@enum/appearances";
import { editMoneyDestinationModal } from "@config/moneyDestination/moneyDestinationTab/generics/editMoneyDestinationModal";
import { DecisionModal } from "@design/modals/decisionModal";
import { StyledContainerIcon } from "./styles";

interface IEdit {
  data: IEntry;
}

const Edit = (props: IEdit) => {
  const { data } = props;
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

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  const handleEdit = () => {
    navigate(`/money-destination/edit-destination`, {
      state: { data: destinationData },
    });
  };

  return (
    <>
      <StyledContainerIcon onClick={handleToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={ComponentAppearance.PRIMARY}
          icon={<MdOutlineCreate />}
          size={screenTablet ? "20px" : "16px"}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Editar
          </Text>
        )}
      </StyledContainerIcon>

      {showModal && (
        <DecisionModal
          portalId="portal"
          title={editMoneyDestinationModal.title}
          actionText={editMoneyDestinationModal.actionText}
          description={editMoneyDestinationModal.description}
          onClick={handleEdit}
          onCloseModal={handleToggleModal}
        />
      )}
    </>
  );
};

export { Edit };
