import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { tokens } from "@design/tokens";

interface IStyledContainerFields {
  $isMobile: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.s300};
  min-height: 55vh;
`;

const StyledContainerFields = styled.div<IStyledContainerFields>`
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${tokens.spacing.s100};
  width: auto;
  gap: ${tokens.spacing.s300};
  padding: ${({ $isMobile }) =>
    $isMobile ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`};
`;

export { StyledContainer, StyledContainerFields };
