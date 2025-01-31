import { MdDeleteOutline } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";

import { DecisionModal } from "@components/modals/DecisionModal";
import { ComponentAppearance } from "@enum/appearances";
import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import { StyledContainerIcon } from "./styles";

interface IDelete {
  showModal: boolean;
  messageDelete: IMessageModal;
  onToggleModal: () => void;
  onClick: () => void;
  setJustificationDelete: (value: string) => void;
}

const DeleteRecord = (props: IDelete) => {
  const {
    showModal,
    messageDelete,
    onToggleModal,
    onClick,
    setJustificationDelete,
  } = props;

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={ComponentAppearance.DANGER}
          icon={<MdDeleteOutline />}
          size="16px"
          onClick={onToggleModal}
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
          title={messageDelete.title}
          actionText={messageDelete.actionText}
          description={messageDelete.description}
          justificationOfDecision={true}
          onClick={onClick}
          onCloseModal={onToggleModal}
          setFieldEntered={setJustificationDelete}
        />
      )}
    </>
  );
};

export { DeleteRecord };
