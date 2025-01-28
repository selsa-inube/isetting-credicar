import { Text, TextTokens } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import {
  StyledNotificationContainer,
  StyledNotificationElement,
  StyledTab,
} from "./styles";
import { ComponentAppearance } from "@src/enum/appearances";
interface ITab {
  label: string;
  id: string;
  disabled?: boolean;
  selected?: boolean;
  notificationIndicators?: number;
}
const Tab = (props: ITab) => {
  const {
    disabled = false,
    selected = false,
    id,
    label,
    notificationIndicators,
  } = props;
  const selectedAppearance = ComponentAppearance.PRIMARY;
  return (
    <StyledTab
      disabled={disabled}
      selected={selected}
      id={id}
      appearance={selectedAppearance}
    >
      <Text
        type="label"
        size="medium"
        appearance={
          selected
            ? (selectedAppearance as keyof typeof TextTokens)
            : ComponentAppearance.GRAY
        }
        disabled={disabled}
        textAlign="start"
        weight="bold"
      >
        {label}
      </Text>
      {notificationIndicators && notificationIndicators > 0 && (
        <Icon
          icon={
            <StyledNotificationContainer>
              <StyledNotificationElement>
                {notificationIndicators}
              </StyledNotificationElement>
            </StyledNotificationContainer>
          }
          appearance="danger"
          cursorHover={true}
          disabled={false}
          spacing="narrow"
          variant="filled"
          shape="circle"
          size="15px"
        />
      )}
    </StyledTab>
  );
};
export { Tab };
export type { ITab };
