import styled from "styled-components";
import { tokens } from "@design/tokens";
import { inube } from "@inubekit/inubekit";

interface IStyledContainerFields {
  $isMobile: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.s300};
  min-height: 55vh;
`;

const StyledFormContent = styled.div`
  flex-grow: 1;
`;

const StyledContainerFields = styled.div<IStyledContainerFields>`
  display: flex;
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${tokens.spacing.s100};

  gap: ${tokens.spacing.s300};
  padding: ${({ $isMobile }) =>
    $isMobile ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`};
`;

export { StyledContainer, StyledFormContent, StyledContainerFields };
