import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { tokens } from "@design/tokens";

interface IStyledContainer {
  $isMobile: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${tokens.spacing.s100};
  width: auto;
  padding: ${({ $isMobile }) =>
    $isMobile ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`};
`;

export { StyledContainer };
