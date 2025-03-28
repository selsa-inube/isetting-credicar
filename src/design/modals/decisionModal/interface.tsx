import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import {
  Stack,
  Text,
  Icon,
  IIconAppearance,
  Divider,
  Blanket,
  Button,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { StyledContainerButton, StyledModal } from "./styles";

interface IDecisionModalUI {
  actionText: string;
  appearance: IIconAppearance;
  description: string;
  icon: React.JSX.Element;
  isLoading: boolean;
  node: HTMLElement;
  title: string;
  withIcon: boolean;
  withCancelButton: boolean;
  isMobile: boolean;
  onClick: () => void;
  onCloseModal: () => void;
  moreDetails?: string;
}

const DecisionModalUI = (props: IDecisionModalUI) => {
  const {
    actionText,
    appearance,
    description,
    isLoading,
    icon,
    node,
    title,
    withIcon,
    withCancelButton,
    moreDetails,
    isMobile,
    onCloseModal,
    onClick,
  } = props;

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={tokens.spacing.s200}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
              {title}
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

        {withIcon && (
          <Stack width="100%" alignItems="center" justifyContent="center">
            <Icon icon={icon} appearance={appearance} size="60px" />
          </Stack>
        )}

        <Text appearance={ComponentAppearance.GRAY} type="body" size="medium">
          {description}
        </Text>

        {moreDetails && (
          <Stack direction="column" gap={tokens.spacing.s200}>
            <Divider dashed />
            <Text size="medium" appearance="dark">
              {moreDetails}
            </Text>
          </Stack>
        )}

        <Stack gap={tokens.spacing.s250} justifyContent="flex-end">
          {withCancelButton && (
            <Button
              spacing="wide"
              appearance={ComponentAppearance.GRAY}
              variant="filled"
              onClick={onCloseModal}
            >
              Cancelar
            </Button>
          )}
          <Button
            spacing="wide"
            appearance={appearance}
            variant="filled"
            loading={isLoading}
            onClick={onClick}
          >
            {actionText}
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node,
  );
};

export { DecisionModalUI };
export type { IDecisionModalUI };
