import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
interface IStyledBoxAttribute {
  $smallScreen?: boolean;
}

const StyledBoxAttribute = styled.div<IStyledBoxAttribute>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: ${({ $smallScreen }) =>
    $smallScreen
      ? tokens.spacing.s100
      : `${tokens.spacing.s075} ${tokens.spacing.s200}`};
  width: auto;
  height: auto;
  box-sizing: border-box;
  background-color: ${({ theme }) =>
    theme.color?.surface?.gray.clear ?? inube.palette.neutral.N10};
`;

export { StyledBoxAttribute };
