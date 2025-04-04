import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import {
  Blanket,
  Button,
  Divider,
  Icon,
  inube,
  Stack,
  Text,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { BoxContainer } from "@design/layout/boxContainer";

interface IModalWrapper {
  children: React.ReactNode;
  isMobile: boolean;
  nameButtonOnClick: string;
  portalId: string;
  title: string;
  onClick: () => void;
  appearanceButton?: ComponentAppearance;
  iconBeforeButton?: React.ReactElement;
  height?: string;
  width?: string;
  withCancelButton?: boolean;
  onCloseModal?: () => void;
}

function ModalWrapper(props: IModalWrapper) {
  const {
    appearanceButton,
    children,
    height = "auto",
    iconBeforeButton,
    isMobile,
    nameButtonOnClick,
    portalId,
    title,
    width = "auto",
    withCancelButton,
    onClick,
    onCloseModal,
  } = props;

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <BoxContainer
        width={width}
        height={height}
        direction="column"
        backgroundColor={inube.palette.neutral.N0}
        borderRadius={tokens.spacing.s100}
        padding={tokens.spacing.s300}
        gap={isMobile ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`}
        boxSizing="border-box"
      >
        <Stack
          direction="column"
          gap={isMobile ? tokens.spacing.s200 : tokens.spacing.s200}
        >
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
              {title}
            </Text>

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
          </Stack>
          <Divider />
        </Stack>

        <Stack height="100%" width="100%">
          {children}
        </Stack>

        <Stack gap={tokens.spacing.s250} justifyContent="flex-end">
          {withCancelButton && (
            <Button
              spacing="wide"
              appearance={ComponentAppearance.LIGHT}
              variant="filled"
              onClick={onCloseModal}
            >
              Cerrar
            </Button>
          )}

          <Button
            spacing="wide"
            appearance={appearanceButton ?? ComponentAppearance.PRIMARY}
            variant="filled"
            onClick={onClick}
            iconBefore={iconBeforeButton ?? <></>}
          >
            {nameButtonOnClick}
          </Button>
        </Stack>
      </BoxContainer>
    </Blanket>,
    node,
  );
}

export { ModalWrapper };
export type { IModalWrapper };
