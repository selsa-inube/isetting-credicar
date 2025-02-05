import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IRuleDecision } from "@isettingkit/input";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { IEntry } from "@components/data/Table/types";
import { DetailsDestinationModal } from "@components/modals/DetailsDestinationModal";
import {
  decisionTemplate,
  textValuesBusinessRules,
} from "@config/moneyDestination/moneyDestinationTab/businessRules";
import { detailsTabsConfig } from "@config/moneyDestination/moneyDestinationTab/generics/detailsTabsConfig";
import { StyledContainerIcon } from "./styles";

interface IDetailsMoneyDestination {
  data: IEntry;
  showModal: boolean;
  evaluateRuleData: IRuleDecision[] | undefined;
  handleToggleModal: () => void;
}

const DetailsMoneyDestination = (props: IDetailsMoneyDestination) => {
  const { data, showModal, evaluateRuleData, handleToggleModal } = props;

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
          decisions={evaluateRuleData ?? []}
        />
      )}
    </>
  );
};

export { DetailsMoneyDestination };
