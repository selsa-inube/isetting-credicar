import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { Icon } from "@inubekit/icon";
import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";

import { ComponentAppearance } from "@src/enum/appearances";
import { IEntry } from "@components/data/Table/types";
import { DetailsCreditLinesModal } from "@components/modals/DetailsCreditLinesModal";
import { StyledContainerIcon } from "./styles";
import { detailsTabsConfig } from "@config/creditLines/details/tabs";


interface IDetails {
  data: IEntry;
}

const Details = (props: IDetails) => {
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
          appearance={ComponentAppearance.DARK}
          icon={<MdOutlineRemoveRedEye />}
          size={screenTablet ? "20px" : "16px"}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Detalles
          </Text>
        )}
      </StyledContainerIcon>

      {showModal && (
        <DetailsCreditLinesModal
          data={data}
          detailsTabsConfig={detailsTabsConfig}
          portalId="portal"
          onCloseModal={handleToggleModal}
        />
      )}
    </>
  );
};

export { Details };
