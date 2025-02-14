import { useEffect, useState, useRef } from "react";
import { MdOutlinePending } from "react-icons/md";
import { Icon } from "@inubekit/inubekit";

import { ActionsModal } from "@design/modals/actionsModal";
import { IAction, IEntry } from "../types";
import { StyledContainer, StyledContainerIcon } from "./styles";

interface IActionMobile {
  actions: IAction[];
  entry: IEntry;
}

let isModalOpen = false;

const ActionMobile = (props: IActionMobile) => {
  const { actions, entry } = props;
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div id="actionModal" ref={modalRef}>
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
export type { IActionMobile };
