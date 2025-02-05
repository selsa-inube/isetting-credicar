import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import { IRuleDecision } from "@isettingkit/input";
import { Button } from "@inubekit/button";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Blanket } from "@inubekit/blanket";
import { Icon } from "@inubekit/icon";
import { Divider } from "@inubekit/divider";
import { Tabs } from "@inubekit/tabs";

import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { ComponentAppearance } from "@enum/appearances";
import { IEntry } from "@components/data/Table/types";
import { IDetailsTabsConfig } from "@components/modals/DetailsDestinationModal/types";
import { GeneralDataTab } from "@components/modals/DetailsDestinationModal/GeneralDataTab";
import { CreditLineTab } from "@components/modals/DetailsDestinationModal/CreditLineTab";
import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";
import { StyledContainerButton, StyledModal } from "./styles";

interface IDetailsDestinationModalUI {
  data: IEntry;
  decisionTemplate: IRuleDecision;
  detailsTabsConfig: IDetailsTabsConfig;
  isSelected: string;
  portalId: string;
  smallScreenTab: boolean;
  textValues: IRulesFormTextValues;
  decisions: IRuleDecision[];
  onCloseModal: () => void;
  onTabChange: (id: string) => void;
}

function DetailsDestinationModalUI(props: IDetailsDestinationModalUI) {
  const {
    isSelected,
    onTabChange,
    smallScreenTab,
    detailsTabsConfig,
    data,
    portalId,
    textValues,
    decisionTemplate,
    decisions,
    onCloseModal,
  } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={tokens.spacing.s200}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
              Detalles
            </Text>
            <StyledContainerButton>
              <Button
                spacing="compact"
                appearance={ComponentAppearance.DARK}
                variant="none"
                onClick={onCloseModal}
                iconAfter={
                  <Icon
                    appearance={ComponentAppearance.DARK}
                    icon={<MdClear />}
                  />
                }
              >
                Cerrar
              </Button>
            </StyledContainerButton>
          </Stack>
          <Divider />
        </Stack>
        <Stack gap={tokens.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(detailsTabsConfig)}
            selectedTab={isSelected}
            onChange={onTabChange}
            scroll={smallScreenTab ? true : false}
          />

          {isSelected === detailsTabsConfig.generalData.id && (
            <GeneralDataTab data={data} />
          )}
          {isSelected === detailsTabsConfig.creditLine.id && (
            <CreditLineTab
              data={decisions}
              textValues={textValues}
              decisionTemplate={decisionTemplate}
            />
          )}
        </Stack>

        <Stack gap={tokens.spacing.s250} justifyContent="flex-end">
          <Button
            spacing="wide"
            appearance={ComponentAppearance.PRIMARY}
            variant="filled"
            onClick={onCloseModal}
          >
            Cerrar
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node,
  );
}

export { DetailsDestinationModalUI };
export type { IDetailsDestinationModalUI };
