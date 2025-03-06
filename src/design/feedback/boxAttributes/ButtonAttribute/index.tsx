import { Stack, Text, Icon } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { tokens } from "@design/tokens";
import { StyledContainer } from "./styles";

interface IButtonAttribute {
  onClick?: () => void;
  icon?: React.JSX.Element;
  value?: string | number;
}

function ButtonAttribute(props: IButtonAttribute) {
  const { onClick, icon, value } = props;
  return (
    <StyledContainer onClick={onClick}>
      {icon && (
        <Stack
          justifyContent="center"
          alignItems="center"
          padding={tokens.spacing.s025}
        >
          <Icon icon={icon} appearance={ComponentAppearance.DARK} />
        </Stack>
      )}

      <Text size="small">{value}</Text>
    </StyledContainer>
  );
}

export { ButtonAttribute };
