import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { tokens } from "@design/tokens";

interface IconWithTextProps {
  icon: JSX.Element;
  text: string;
}

const IconWithText = (props: IconWithTextProps) => {
  const { icon, text } = props;
  return (
    <Stack gap={tokens.spacing.s075}>
      {icon}
      <Text type="body" size="small">
        {text}
      </Text>
    </Stack>
  );
};

export { IconWithText };
