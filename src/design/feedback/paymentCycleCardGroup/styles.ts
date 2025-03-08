import styled from "styled-components";
import { tokens } from "@design/tokens";

interface IStyledContainer {
  $smallScreen: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ $smallScreen }) =>
    $smallScreen ? `${tokens.spacing.s075}` : `${tokens.spacing.s150}`};
  padding: ${tokens.spacing.s075};
  box-sizing: border-box;
  overflow-y: auto;
`;

export { StyledContainer };
