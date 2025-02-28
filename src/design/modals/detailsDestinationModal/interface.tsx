import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import {
  Stack,
  Text,
  Icon,
  Divider,
  useMediaQuery,
  Blanket,
  Tabs,
} from "@inubekit/inubekit";
import { IRuleDecision } from "@isettingkit/input";
import { Button } from "@inubekit/button";

import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { ComponentAppearance } from "@enum/appearances";
import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";
import { IEntry } from "@design/data/table/types";
import { StyledContainerButton, StyledModal } from "./styles";
import { GeneralDataTab } from "./tabs/GeneralDataTab";
import { CreditLineTab } from "./tabs/creditLineTab";
import { IDetailsTabsConfig, IMoreDetailsTabsConfig } from "./types";

interface IDetailsDestinationModalUI {
  data: IEntry;
  decisionTemplate: IRuleDecision;
  filteredTabsConfig: IDetailsTabsConfig;
  detailsTabsConfig: IDetailsTabsConfig;
  isSelected: string;
  portalId: string;
  smallScreenTab: boolean;
  textValues: IRulesFormTextValues;
  decisions: IRuleDecision[];
  isMoreDetails: boolean;
  onCloseModal: () => void;
  onTabChange: (id: string) => void;
  onTabChangeMoreDetails?: (id: string) => void;
  moreDetailsTabsConfig?: IMoreDetailsTabsConfig;
  isSelectedMoreDetails?: string;
  filteredTabsMoreDetConfig?: IMoreDetailsTabsConfig;
}

const DetailsDestinationModalUI = (props: IDetailsDestinationModalUI) => {
  const {
    isSelected,
    isSelectedMoreDetails,
    filteredTabsMoreDetConfig,
    filteredTabsConfig,
    smallScreenTab,
    detailsTabsConfig,
    moreDetailsTabsConfig,
    isMoreDetails,
    data,
    portalId,
    textValues,
    decisionTemplate,
    decisions,
    onCloseModal,
    onTabChangeMoreDetails,
    onTabChange,
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
        <Stack gap={tokens.spacing.s150} direction="column" height="100%">
          <Tabs
            tabs={Object.values(filteredTabsConfig)}
            selectedTab={isSelected}
            onChange={onTabChange}
            scroll={smallScreenTab ? true : false}
          />
          {isSelected === detailsTabsConfig.generalData.id && (
            <GeneralDataTab data={data} />
          )}
          {isSelected === detailsTabsConfig.creditLine.id &&
            decisions.length > 0 && (
              <CreditLineTab
                data={decisions}
                textValues={textValues}
                decisionTemplate={decisionTemplate}
                filteredTabsMoreDetConfig={filteredTabsMoreDetConfig}
                isSelectedMoreDetails={isSelectedMoreDetails}
                moreDetailsTabsConfig={moreDetailsTabsConfig}
                isMoreDetails={isMoreDetails}
                smallScreenTab={smallScreenTab}
                onTabChangeMoreDetails={onTabChangeMoreDetails}
              />
            )}
          <Divider />
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
};

export { DetailsDestinationModalUI };
export type { IDetailsDestinationModalUI };
