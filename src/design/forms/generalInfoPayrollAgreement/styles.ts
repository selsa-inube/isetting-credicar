import styled from "styled-components";
import { tokens } from "@design/tokens";

interface IStyledRow {
  $isMobile: boolean;
  $editOption: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.s250};
  min-height: 55vh;
`;

const StyledFormContent = styled.div`
  flex-grow: 1;
`;

const StyledRow = styled.div<IStyledRow>`
  grid-column: ${({ $editOption, $isMobile }) =>
    $editOption ? ($isMobile ? "span 1" : "span 2") : ""};
  width: 100%;
`;

export { StyledContainer, StyledFormContent, StyledRow };
