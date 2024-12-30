import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { Icon } from "@inubekit/icon";
import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";

import { ComponentAppearance } from "@ptypes/aparences.types";
import { IEntry } from "@components/data/Table/types";
import { DetailsDestinationModal } from "@components/modals/DetailsDestinationModal";
import { StyledContainerIcon } from "./styles";
import { detailsTabsConfig } from "./tabs.config";
import {
  decisionTemplate,
  textValuesBusinessRules,
} from "../../config/businessRules.config";

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
        <DetailsDestinationModal
          data={data}
          detailsTabsConfig={detailsTabsConfig}
          portalId="portal"
          onCloseModal={handleToggleModal}
          textValues={textValuesBusinessRules}
          decisionTemplate={decisionTemplate}
        />
      )}
    </>
  );
};

export { Details };
