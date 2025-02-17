import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { Icon, Text } from "@inubekit/inubekit";
import { useMediaQuery } from "@inubekit/hooks";

import { ComponentAppearance } from "@enum/appearances";
import { IEntry } from "@design/data/table/types";
import { detailsTabsConfig } from "@config/creditLines/details/tabs";
import { DetailsCreditLinesModal } from "@design/modals/detailsCreditLinesModal";
import { StyledContainerIcon } from "./styles";

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
