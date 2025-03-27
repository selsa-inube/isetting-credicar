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
  Button,
  Grid,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { ComponentAppearance } from "@enum/appearances";
import { IEntry } from "@design/data/table/types";
import {
  StyledBorder,
  StyledContainerButton,
  StyledField,
  StyledModal,
} from "./styles";
import { IDetailsTabsConfig } from "./types";
import { ILabel } from "../detailsRequestsInProgressModal/types";
import { OrdinaryPaymentCycles } from "./tabs/ordinaryPaymentCycles";
import { ExtraordinaryPaymentCycles } from "./tabs/extraordinaryPaymentCycles";

interface IDetailsPayrollAgreementModal {
  data: IEntry;
  namePayroll: string;
  ordinaryPaymentData: IEntry[];
  extraordinaryPaymentData: IEntry[];
  filteredTabsConfig: IDetailsTabsConfig;
  detailsTabsConfig: IDetailsTabsConfig;
  isSelected: string;
  defaultSelectedTab: string;
  portalId: string;
  smallScreenTab: boolean;
  labelsDetails: ILabel[];
  labelsPaymentCard: ILabel[];
  onCloseModal: () => void;
  onTabChange: (id: string) => void;
}

const DetailsPayrollAgreementModal = (props: IDetailsPayrollAgreementModal) => {
  const {
    isSelected,
    namePayroll,
    defaultSelectedTab,
    filteredTabsConfig,
    smallScreenTab,
    detailsTabsConfig,
    data,
    portalId,
    labelsDetails,
    labelsPaymentCard,
    ordinaryPaymentData,
    extraordinaryPaymentData,
    onCloseModal,
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

        <StyledBorder $smallScreen={isMobile}>
          <Stack gap={tokens.spacing.s100} direction="column">
            <Text
              type="title"
              size="medium"
              appearance={ComponentAppearance.GRAY}
              weight="bold"
            >
              {`Detalles de la nómina ${namePayroll}`}
            </Text>
            <Divider dashed />
          </Stack>
          <Grid
            templateColumns="auto auto"
            gap={tokens.spacing.s150}
            padding={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s600}`}
          >
            {labelsDetails.map(
              (field, id) =>
                data[field.id] && (
                  <StyledField $smallScreen={isMobile} key={id}>
                    <Text size="medium" type="label" weight="bold">
                      {field.titleName}
                    </Text>
                    <Text
                      size="medium"
                      appearance={ComponentAppearance.GRAY}
                      ellipsis
                    >
                      {data[field.id]}
                    </Text>
                  </StyledField>
                ),
            )}
          </Grid>
          <Stack
            direction="column"
            gap={tokens.spacing.s150}
            padding={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s150}`}
          >
            {((ordinaryPaymentData && ordinaryPaymentData.length > 0) ||
              (extraordinaryPaymentData &&
                extraordinaryPaymentData.length > 0)) && (
              <>
                <Tabs
                  tabs={Object.values(filteredTabsConfig)}
                  selectedTab={isSelected ?? defaultSelectedTab}
                  onChange={onTabChange}
                  scroll={smallScreenTab ? true : false}
                />
                {ordinaryPaymentData &&
                  isSelected === detailsTabsConfig.ordinaryPayment?.id && (
                    <OrdinaryPaymentCycles
                      data={ordinaryPaymentData}
                      labelsPaymentCard={labelsPaymentCard}
                    />
                  )}
                {extraordinaryPaymentData &&
                  extraordinaryPaymentData.length > 0 &&
                  isSelected === detailsTabsConfig.extraordinaryPayment?.id && (
                    <ExtraordinaryPaymentCycles
                      data={extraordinaryPaymentData}
                      labelsPaymentCard={labelsPaymentCard}
                    />
                  )}
              </>
            )}
          </Stack>
        </StyledBorder>
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

export { DetailsPayrollAgreementModal };
export type { IDetailsPayrollAgreementModal };
