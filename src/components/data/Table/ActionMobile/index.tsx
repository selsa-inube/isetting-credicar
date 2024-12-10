import { useEffect, useState } from "react";
import { MdOutlinePending } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { ActionsModal } from "@src/components/modals/ActionsModal";
import { IAction, IEntry } from "../types";
import { StyledContainer, StyledContainerIcon } from "./styles";

interface ActionMobileProps {
  actions: IAction[];
  entry: IEntry;
}

let isModalOpen = false;

const ActionMobile = (props: ActionMobileProps) => {
  const { actions, entry } = props;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    isModalOpen = false;
  }, []);

  const handleToggleModal = () => {
    if (!isModalOpen) {
      setShowModal(true);
      isModalOpen = true;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    isModalOpen = false;
  };

  return (
    <StyledContainer>
      <StyledContainerIcon>
        <Icon
          appearance="primary"
          icon={<MdOutlinePending />}
          size="20px"
          onClick={handleToggleModal}
          cursorHover
        />
      </StyledContainerIcon>
      {showModal && (
        <div id="actionModal">
          <ActionsModal
            actions={actions}
            entry={entry}
            onClose={handleCloseModal}
          />
        </div>
      )}
    </StyledContainer>
  );
};

export { ActionMobile };
export type { ActionMobileProps };
