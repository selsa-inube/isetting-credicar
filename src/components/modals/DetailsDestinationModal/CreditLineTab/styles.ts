import styled from "styled-components";
import { inube } from "@inubekit/foundations";

import { tokens } from "@design/tokens";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 682px;
  height: 364px;
  border-radius: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s075};
  gap: ${tokens.spacing.s250};
  box-sizing: border-box;
  overflow: auto;
  border: 1px solid
    ${({ theme }) =>
      theme?.color?.stroke.gray.regular || inube.palette.neutral.N30};
`;

export { StyledContainer };
