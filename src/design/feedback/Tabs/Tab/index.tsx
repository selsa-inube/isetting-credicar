import { Text, TextTokens } from "@inubekit/text";
import { StyledNotification, StyledTab } from "./styles";

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
  const selectedAppearance = "primary";

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
          selected ? (selectedAppearance as keyof typeof TextTokens) : "gray"
        }
        disabled={disabled}
        textAlign="start"
        weight="bold"
      >
        {label}
      </Text>
      {notificationIndicators && notificationIndicators > 0 && (
        <StyledNotification>
          <Text type="label" size="small" appearance="light" weight="bold">
            {notificationIndicators}
          </Text>
        </StyledNotification>
      )}
    </StyledTab>
  );
};

export { Tab };
export type { ITab };
