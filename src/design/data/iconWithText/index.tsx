import { Stack, Text } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
interface IIconWithText {
  icon: JSX.Element;
  text: string;
}

const IconWithText = (props: IIconWithText) => {
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
