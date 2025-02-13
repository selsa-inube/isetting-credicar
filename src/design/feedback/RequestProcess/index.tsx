import { MdCancel, MdCheckCircle } from "react-icons/md";
import { Icon, IIconAppearance } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import { ComponentAppearance } from "@enum/appearances";
import { tokens } from "@design/tokens";
import { StyledBar, StyledContainerBar } from "./styles";
import { IRequestSteps } from "@design/feedback/RequestProcess/types";
import {
  countVerifiedRequests,
  verifiedErrorRequest,
} from "@design/feedback/RequestProcess/utils";

interface IRequestProcess {
  appearance: IIconAppearance;
  requestSteps: IRequestSteps[];
  isMobile: boolean;
  title: string;
  description: string;
  sizeIcon?: string;
}

const RequestProcess = (props: IRequestProcess) => {
  const {
    appearance,
    sizeIcon = "32px",
    requestSteps,
    isMobile,
    description,
    title,
  } = props;
  return (
    <Stack direction="column" gap={tokens.spacing.s200} width="100%">
      <Stack direction="column" gap={tokens.spacing.s300}>
        <Text type="title" size="small" weight="bold">
          {title}
        </Text>
      </Stack>
      <Stack
        gap={tokens.spacing.s100}
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={
          isMobile
            ? `${tokens.spacing.s100}`
            : `${tokens.spacing.s0} ${tokens.spacing.s150} ${tokens.spacing.s250} ${tokens.spacing.s450}`
        }
      >
        <Text size="medium">{description}</Text>
      </Stack>

      <Stack
        direction="column"
        gap={tokens.spacing.s100}
        padding={`${tokens.spacing.s0} ${tokens.spacing.s350}`}
      >
        <Stack
          justifyContent={
            requestSteps.length === 1 ? "center" : "space-between"
          }
          padding={`${tokens.spacing.s0} ${tokens.spacing.s100}`}
        >
          {requestSteps &&
            requestSteps.length > 0 &&
            requestSteps.map((item, index) =>
              item.status === "error" ? (
                <Icon
                  key={index}
                  icon={<MdCancel />}
                  size={sizeIcon}
                  appearance={ComponentAppearance.DANGER}
                />
              ) : (
                <Icon
                  key={index}
                  icon={<MdCheckCircle />}
                  size={sizeIcon}
                  appearance={
                    item.status === "pending"
                      ? ComponentAppearance.GRAY
                      : appearance
                  }
                />
              ),
            )}
        </Stack>

        <Stack
          padding={`${tokens.spacing.s0} ${tokens.spacing.s300}`}
          justifyContent="center"
        >
          {requestSteps && requestSteps.length > 1 && (
            <StyledContainerBar>
              <StyledBar
                $progress={countVerifiedRequests(requestSteps)}
                $statusError={verifiedErrorRequest(requestSteps)}
              />
            </StyledContainerBar>
          )}
        </Stack>
        <Stack
          justifyContent={
            requestSteps.length === 1 ? "center" : "space-between"
          }
        >
          {requestSteps &&
            requestSteps.length > 0 &&
            requestSteps.map((item, index) => (
              <Stack key={index} width="58px">
                <Text
                  type="label"
                  textAlign="center"
                  size={isMobile ? "medium" : "large"}
                  weight="bold"
                  appearance={
                    item.status === "completed"
                      ? ComponentAppearance.DARK
                      : ComponentAppearance.GRAY
                  }
                >
                  {item.name}
                </Text>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { RequestProcess };
export type { IRequestProcess };
