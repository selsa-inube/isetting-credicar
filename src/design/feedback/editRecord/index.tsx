import { MdOutlineCreate } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { StyledContainerIcon } from "./styles";

interface IEditRecord {
  onEdit: () => void;
}

const EditRecord = (props: IEditRecord) => {
  const { onEdit } = props;

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={onEdit} $isTablet={screenTablet}>
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
    </>
  );
};

export { EditRecord };
