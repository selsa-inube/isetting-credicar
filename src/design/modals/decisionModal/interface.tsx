import { Stack, Text, Icon, Divider } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { IDecisionModalUI } from "@ptypes/design/IDecisionModalUI";
import { ComponentAppearance } from "@enum/appearances";
import { ModalWrapper } from "../modalWrapper";

const DecisionModalUI = (props: IDecisionModalUI) => {
  const {
    actionText,
    appearance,
    description,
    isLoading,
    icon,
    sizeIcon,
    title,
    withIcon,
    withCancelButton,
    moreDetails,
    isMobile,
    appearanceButton,
    onCloseModal,
    onClick,
  } = props;

  return (
    <ModalWrapper
      portalId="portal"
      width={isMobile ? "335px" : "450px"}
      isMobile={isMobile}
      labelActionButton={actionText}
      labelCloseButton="Cancelar"
      labelCloseModal="Cerrar"
      title={title}
      withCancelButton={withCancelButton}
      onCloseModal={onCloseModal}
      onClick={onClick}
      isLoading={isLoading}
      appearanceButton={appearanceButton}
    >
      <Stack direction="column" gap={tokens.spacing.s200}>
        {withIcon && (
          <Stack width="100%" alignItems="center" justifyContent="center">
            <Icon icon={icon} appearance={appearance} size={sizeIcon} />
          </Stack>
        )}

        <Text appearance={ComponentAppearance.DARK} type="body" size="medium">
          {description}
        </Text>

        {moreDetails && (
          <Stack direction="column" gap={tokens.spacing.s200}>
            <Divider dashed />
            <Text size="medium" appearance={ComponentAppearance.DARK}>
              {moreDetails}
            </Text>
          </Stack>
        )}
      </Stack>
    </ModalWrapper>
  );
};

export { DecisionModalUI };
export type { IDecisionModalUI };
