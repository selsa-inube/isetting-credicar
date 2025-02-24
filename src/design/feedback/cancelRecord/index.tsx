import { MdOutlineCancel } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import { DecisionModal } from "@design/modals/decisionModal";
import { StyledContainerIcon } from "./styles";

interface ICancelRecord {
  showModal: boolean;
  messageCancel: IMessageModal;
  loading: boolean;
  onToggleModal: () => void;
  onClick: () => void;
}

const CancelRecord = (props: ICancelRecord) => {
  const { showModal, messageCancel, loading, onToggleModal, onClick } = props;

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={ComponentAppearance.DANGER}
          icon={<MdOutlineCancel />}
          size="16px"
          onClick={onToggleModal}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Cancelar
          </Text>
        )}
      </StyledContainerIcon>
      {showModal && (
        <DecisionModal
          portalId="portal"
          title={messageCancel.title}
          actionText={messageCancel.actionText}
          description={messageCancel.description}
          onClick={onClick}
          onCloseModal={onToggleModal}
          appearance={ComponentAppearance.DANGER}
          isLoading={loading}
        />
      )}
    </>
  );
};

export { CancelRecord };
