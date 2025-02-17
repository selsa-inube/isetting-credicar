import { MdOutlineCreate } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { DecisionModal } from "@design/modals/decisionModal";
import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import { StyledContainerIcon } from "./styles";

interface IEditRecord {
  portalId: string;
  showModal: boolean;
  editRecordMessage: IMessageModal;
  onEdit: () => void;
  onToggleModal: () => void;
}

const EditRecord = (props: IEditRecord) => {
  const { showModal, portalId, editRecordMessage, onToggleModal, onEdit } =
    props;

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
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
          portalId={portalId}
          title={editRecordMessage.title}
          actionText={editRecordMessage.actionText}
          description={editRecordMessage.description}
          onClick={onEdit}
          onCloseModal={onToggleModal}
        />
      )}
    </>
  );
};

export { EditRecord };
