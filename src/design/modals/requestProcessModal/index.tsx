import { MdCancel, MdCheckCircle } from "react-icons/md";
import {
  Stack,
  Text,
  Icon,
  IIconAppearance,
  Blanket,
} from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { tokens } from "@design/tokens";
import { StyledBar, StyledContainerBar, StyledModal } from "./styles";
import { IRequestSteps } from "@src/design/modals/requestProcessModal/types";
import {
  countVerifiedRequests,
  verifiedErrorRequest,
} from "@src/design/modals/requestProcessModal/utils";
import { createPortal } from "react-dom";

interface IRequestProcessModal {
  portalId: string;
  appearance: IIconAppearance;
  requestSteps: IRequestSteps[];
  isMobile: boolean;
  title: string;
  description: string;
  sizeIcon?: string;
}

const RequestProcessModal = (props: IRequestProcessModal) => {
  const {
    portalId,
    appearance,
    sizeIcon = "32px",
    requestSteps,
    isMobile,
    description,
    title,
  } = props;

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
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
      </StyledModal>
    </Blanket>,
    node,
  );
};

export { RequestProcessModal };
export type { IRequestProcessModal };
