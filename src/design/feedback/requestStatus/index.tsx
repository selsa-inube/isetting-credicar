import { MdClear } from "react-icons/md";
import { Button, Icon, IIconAppearance, Stack, Text } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { StyledContainerButton, StyledText } from "./styles";

interface IRequestStatus {
  title: string;
  actionText: string;
  appearance: IIconAppearance;
  description: string;
  isLoading: boolean;
  onClick: () => void;
  onCloseModal: () => void;
}

const RequestStatus = (props: IRequestStatus) => {
  const {
    actionText,
    title,
    appearance,
    description,
    isLoading,
    onClick,
    onCloseModal,
  } = props;

  return (
    <Stack direction="column" gap={tokens.spacing.s300}>
      <Stack alignItems="center" justifyContent="space-between">
        <Text type="body" size="medium" weight="bold" appearance="dark">
          {title}
        </Text>
        <StyledContainerButton>
          <Button
            spacing="compact"
            appearance={ComponentAppearance.DARK}
            variant="none"
            onClick={onCloseModal}
            iconAfter={
              <Icon appearance={ComponentAppearance.DARK} icon={<MdClear />} />
            }
          >
            Cerrar
          </Button>
        </StyledContainerButton>
      </Stack>
      <StyledText>
        <Text appearance={ComponentAppearance.GRAY} type="body" size="medium">
          {description}
        </Text>
      </StyledText>
      <Stack gap={tokens.spacing.s250} justifyContent="flex-end">
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
    </Stack>
  );
};

export { RequestStatus };
export type { IRequestStatus };
