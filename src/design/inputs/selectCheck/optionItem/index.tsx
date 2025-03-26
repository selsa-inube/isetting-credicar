import { Checkbox, Stack } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { StyledOptionItemChecked } from "./styles";

interface IOptionItem {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionItem = (props: IOptionItem) => {
  const { id, label, checked = false, onChange } = props;

  return (
    <StyledOptionItemChecked>
      <Stack direction="row" alignItems="center" gap={tokens.spacing.s050}>
        <Checkbox
          id={id}
          name={id}
          checked={checked}
          value=""
          onChange={onChange!}
          label={label}
        />
      </Stack>
    </StyledOptionItemChecked>
  );
};

export { OptionItem };
export type { IOptionItem };
