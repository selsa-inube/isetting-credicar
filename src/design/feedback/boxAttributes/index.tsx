import { Stack, Text } from "@inubekit/inubekit";
import { useMediaQuery } from "@inubekit/hooks";
import { Grid } from "@inubekit/grid";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { IAttribute } from "./types";
import { ButtonAttribute } from "./ButtonAttribute";
import { StyledBoxAttribute } from "./styles";

interface IBoxAttribute {
  label: string;
  value?: number | string | IAttribute[];
  withButton?: boolean;
  buttonIcon?: React.JSX.Element;
  buttonValue?: string | number;
  direction?: "row" | "column";
  onClickButton?: () => void;
}

const BoxAttribute = (props: IBoxAttribute) => {
  const {
    label,
    value,
    withButton,
    buttonIcon,
    buttonValue,
    direction,
    onClickButton,
  } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <StyledBoxAttribute $smallScreen={isMobile}>
      <Grid
        templateColumns={direction === "column" ? "1fr" : "auto 1fr"}
        width="100%"
        gap={tokens.spacing.s100}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          type="label"
          size={isMobile ? "small" : "medium"}
          appearance={ComponentAppearance.DARK}
          weight="bold"
        >
          {label}
        </Text>

        <Stack
          alignItems="center"
          justifyContent={direction === "column" ? "flex-start" : "flex-end"}
        >
          {withButton ? (
            <ButtonAttribute
              icon={buttonIcon}
              value={buttonValue}
              onClick={onClickButton}
            />
          ) : (
            <Text
              size={isMobile ? "small" : "medium"}
              appearance={ComponentAppearance.GRAY}
              textAlign={direction === "column" ? "start" : "end"}
            >
              {typeof value === "object"
                ? JSON.stringify(value)
                : String(value)}
            </Text>
          )}
        </Stack>
      </Grid>
    </StyledBoxAttribute>
  );
};

export { BoxAttribute };
export type { IBoxAttribute };
