import { Stack, Text, Toggle } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { IToggleGeneralDecision } from "@ptypes/generalCredPolicies/forms/IToggleGeneralDecision";
import { toggleDecisionsLabels } from "@config/generalCreditPolicies/assisted/toggleDecisionsLabels";

const ToggleGeneralDecision = (props: IToggleGeneralDecision) => {
  const { name, label, isChecked, onToggle } = props;

  const text = isChecked ? toggleDecisionsLabels.yes : toggleDecisionsLabels.no;
  const appearance = isChecked
    ? ComponentAppearance.SUCCESS
    : ComponentAppearance.DANGER;

  return (
    <Stack direction="column" gap={tokens.spacing.s200}>
      <Text size="medium">{label}</Text>
      <Stack
        gap={tokens.spacing.s050}
        margin={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s200}`}
      >
        <Toggle
          checked={isChecked}
          id={name}
          name={name}
          onChange={onToggle}
          value={name}
          size="large"
        />
        <Text size="medium" weight="bold" appearance={appearance}>
          {text}
        </Text>
      </Stack>
    </Stack>
  );
};

export { ToggleGeneralDecision };
