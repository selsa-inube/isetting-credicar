import { MdCheckCircle, MdClear } from "react-icons/md";
import {
  Button,
  Divider,
  Icon,
  IIconAppearance,
  Stack,
  Text,
  useMediaQuery,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { StyledContainerButton } from "./styles";
interface IRequestStatus {
  title: string;
  actionText: string;
  description: string;
  isLoading: boolean;
  requestNumber: string;
  onClick: () => void;
  onCloseModal: () => void;
  appearance?: IIconAppearance;
}

const RequestStatus = (props: IRequestStatus) => {
  const {
    actionText,
    title,
    appearance,
    description,
    isLoading,
    requestNumber,
    onClick,
    onCloseModal,
  } = props;

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Stack
      direction="column"
      gap={isMobile ? tokens.spacing.s050 : tokens.spacing.s100}
      width="100%"
    >
      <Stack alignItems="center" justifyContent="space-between">
        <Text type="headline" size="small" weight="bold" appearance="dark">
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
      <Divider />

      <Stack alignItems="center" justifyContent="center">
        <Icon
          icon={<MdCheckCircle />}
          appearance={ComponentAppearance.SUCCESS}
          size="60px"
        />
      </Stack>

      <Stack direction="column" gap={tokens.spacing.s200}>
        <Stack justifyContent="center">
          <Text
            textAlign="center"
            appearance={ComponentAppearance.DARK}
            size="large"
            weight="bold"
          >
            {`Solicitud # ${requestNumber}`}
          </Text>
        </Stack>

        <Text appearance={ComponentAppearance.GRAY} size="medium">
          {description}
        </Text>
      </Stack>

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
