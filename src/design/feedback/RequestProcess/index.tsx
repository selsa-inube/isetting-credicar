import { MdCancel, MdCheckCircle } from "react-icons/md";
import { Icon, IIconAppearance } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import { ComponentAppearance } from "@ptypes/aparences.types";
import { tokens } from "@design/tokens";
import { StyledBar, StyledContainerBar } from "./styles";
import { IRequestSteps } from "./types";
import { countVerifiedRequests, verifiedErrorRequest } from "./utils";

interface IRequestProcess {
  appearance: IIconAppearance;
  requestSteps: IRequestSteps[];
  isMobile: boolean;
  sizeIcon?: string;
}

const RequestProcess = (props: IRequestProcess) => {
  const { appearance, sizeIcon = "32px", requestSteps, isMobile } = props;
  return (
    <Stack direction="column" gap={tokens.spacing.s100} width="100%">
      <Stack
        justifyContent={requestSteps.length === 1 ? "center" : "space-between"}
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
        justifyContent={requestSteps.length === 1 ? "center" : "space-between"}
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
  );
};

export { RequestProcess };
export type { IRequestProcess };
