import { MdOutlineCreate } from "react-icons/md";
import { useState } from "react";
import { Icon } from "@inubekit/icon";
import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";

import { DecisionModal } from "@components/modals/DecisionModal";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IEntry } from "@components/data/Table/types";

import { StyledContainerIcon } from "./styles";
import { editMoneyDestinationModal } from "@config/moneyDestination/moneyDestinationTab/generics/editMoneyDestinationModal";

interface IEdit {
  data: IEntry;
}

const Edit = (props: IEdit) => {
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
          onClick={() => console.log(data)}
          onCloseModal={handleToggleModal}
        />
      )}
    </>
  );
};

export { Edit };
