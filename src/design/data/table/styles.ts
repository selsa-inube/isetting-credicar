import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

interface IStyledContainer {
  $multipleTables?: boolean;
  $pageLength?: number;
  $entriesLength?: number;
  $isTablet?: boolean;
}

const StyledContainerTable = styled.div<IStyledContainer>`
  position: relative;
  border-radius: 8px;
  border: ${({ $pageLength, $entriesLength }) =>
    $pageLength &&
    $entriesLength &&
    $entriesLength > $pageLength &&
    `1px solid ${inube.palette.neutral.N40}`};

  & > td,
  & > div {
    justify-content: center;
  }

  ${({ $isTablet }) =>
    $isTablet &&
    `
    & > td {
      justify-content: flex-start;
    }
  `}
`;

export { StyledContainerTable };
