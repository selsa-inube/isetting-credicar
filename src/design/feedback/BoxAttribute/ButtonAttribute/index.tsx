import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";

import { ComponentAppearance } from "@ptypes/aparences.types";
import { StyledContainer, StyledIcon } from "./styles";

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
        <StyledIcon>
          <Icon icon={icon} appearance={ComponentAppearance.DARK} />
        </StyledIcon>
      )}

      <Text type="body" size="small" appearance="dark">
        {value}
      </Text>
    </StyledContainer>
  );
}

export { ButtonAttribute };
