import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { Status } from "./types";

interface IStyledContainer {
  $fullwidth?: boolean;
  disabled?: boolean;
}

interface IStyledInputContainer {
  $readonly?: boolean;
  $status?: string;
  $focused?: boolean;
  $disabled?: boolean;
  $size?: string;
  $invalid?: boolean;
  $onClick?: React.ChangeEventHandler<HTMLInputElement>;
}

interface IStyledChevron {
  $displayList: boolean;
}

interface IStyledInput {
  $size?: keyof typeof sizeOptions;
  $disabled?: boolean;
  $status: Status;
  $fullwidth?: boolean;
  $focused?: boolean;
  onBlur?: (event: FocusEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const sizeOptions = {
  compact: {
    height: "24px",
  },
  wide: {
    height: "34px",
  },
};

const StyledContainer = styled.div<IStyledContainer>`
  position: relative;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "300px")};
`;

const StyledInputContainer = styled.div<IStyledInputContainer>`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s100} ${tokens.spacing.s200};
  user-select: none;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme, $readonly }) =>
    $readonly && (theme?.palette?.neutral?.N0 ?? inube.palette.neutral.N0)};
  border-color: ${({
    theme,
    $disabled,
    $readonly,
    $status,
    $focused,
    $invalid,
  }) => {
    if ($disabled) {
      return (
        (theme?.palette?.neutral?.N20 ?? inube.palette.neutral.N20) +
        "; pointer-events: none; opacity: 0.5;"
      );
    }
    if ($focused && !$readonly) {
      return theme?.palette?.blue?.B300 ?? inube.palette.blue.B300;
    }
    if ($status === "invalid" || $invalid) {
      return theme?.palette?.red?.R400 ?? inube.palette.red.R400;
    }
    return theme?.palette?.neutral?.N40 ?? inube.palette.neutral.N40;
  }};
  opacity: ${({ $disabled }) => ($disabled ? "0.5" : "none")};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;

const StyledInput = styled.input<IStyledInput>`
  outline: none;
  border-radius: ${tokens.spacing.s100};
  border-style: none;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font ?? inube.typography.body.large.font};
  font-size: ${({ theme }) =>
    theme?.typography?.body?.large?.font ?? inube.typography.body.large.size};
  line-height: ${({ theme }) =>
    theme?.typography?.body?.large?.font ??
    inube.typography.body.large.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme?.typography?.body?.large?.font ??
    inube.typography.body.large.tracking};
  color: ${({ theme, $disabled }) => {
    if ($disabled) {
      return theme?.palette?.neutral?.N20 ?? inube.palette.neutral.N20;
    }
    return theme?.palette?.neutral?.N900 ?? inube.palette.neutral.N900;
  }};
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 ?? inube.palette.neutral.N0};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  ${({ $size = "compact" }) => sizeOptions[$size]};

  ::placeholder {
    color: ${({ theme }) =>
      theme?.palette?.neutral?.N20 ?? inube.palette.neutral.N20};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;

const StyledChevron = styled.div<IStyledChevron>`
  display: flex;
  transition: ease;
  transition-duration: 500ms;
  transform: ${({ $displayList }) =>
    $displayList ? "rotate(-90deg)" : "rotate(90deg)"};
`;

export { StyledContainer, StyledInputContainer, StyledInput, StyledChevron };
