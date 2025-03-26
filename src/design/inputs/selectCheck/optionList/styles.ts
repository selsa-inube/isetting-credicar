import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

interface IStyledOptionList {
  $onClick?: React.ChangeEventHandler<HTMLInputElement>;
}

const StyledOptionList = styled.ul<IStyledOptionList>`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  padding: ${tokens.spacing.s050} ${tokens.spacing.s0};
  position: absolute;
  z-index: 1;
  border-radius: ${tokens.spacing.s050};
  background: ${({ theme }) => {
    return theme?.palette?.neutral?.N0 ?? inube.palette.neutral.N0;
  }};
  box-shadow:
    0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
`;

export { StyledOptionList };
