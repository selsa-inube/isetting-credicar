import { Icon, Stack, Text } from "@inubekit/inubekit";
import { MdCheckCircle, MdOutlineError } from "react-icons/md";
import { tokens } from "@design/tokens";
import { ISelectCheckUI } from "../interface";

const Message = (
  props: Pick<ISelectCheckUI, "disabled" | "status"> & { message?: string },
) => {
  const { disabled, status, message } = props;

  return (
    status !== "pending" && (
      <Stack
        alignItems="center"
        gap={tokens.spacing.s050}
        margin={`${tokens.spacing.s050} ${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s200}`}
      >
        <Icon
          appearance={status === "invalid" ? "danger" : "success"}
          disabled={disabled}
          icon={status === "invalid" ? <MdOutlineError /> : <MdCheckCircle />}
          size="14px"
        />
        <Text
          type="body"
          size="small"
          appearance={status === "invalid" ? "danger" : "success"}
          disabled={disabled}
        >
          {message && `${message}`}
        </Text>
      </Stack>
    )
  );
};

export { Message };
