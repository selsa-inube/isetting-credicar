import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { tokens } from "@design/tokens";

interface IStyledContent {
  $smallScreen: boolean;
}

const StyledContent = styled.div<IStyledContent>`
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${tokens.spacing.s100};
  width: auto;
  padding: ${({ $smallScreen }) =>
    $smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s0}`};
`;

export { StyledContent };
