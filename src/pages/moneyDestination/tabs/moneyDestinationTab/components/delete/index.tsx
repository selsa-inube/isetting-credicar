import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { Icon } from "@inubekit/icon";

import { DecisionModal } from "@components/modals/DecisionModal";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IEntry } from "@components/data/Table/types";

import { useMediaQuery } from "@inubekit/hooks";
import { StyledContainerIcon } from "./styles";
import { Text } from "@inubekit/text";
import { deleteMoneyDestinationModal } from "@config/moneyDestination/moneyDestinationTab/generics/deleteMoneyDestinationModal";

interface IDelete {
  data: IEntry;
}

const Delete = (props: IDelete) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={handleToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={ComponentAppearance.DANGER}
          icon={<MdDeleteOutline />}
          size="16px"
          onClick={handleToggleModal}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Eliminar
          </Text>
        )}
      </StyledContainerIcon>
      {showModal && (
        <DecisionModal
          portalId="portal"
          title={deleteMoneyDestinationModal.title}
          actionText={deleteMoneyDestinationModal.actionText}
          description={deleteMoneyDestinationModal.description}
          justificationOfDecision={true}
          onClick={() => console.log(data)}
          onCloseModal={handleToggleModal}
        />
      )}
    </>
  );
};

export { Delete };
