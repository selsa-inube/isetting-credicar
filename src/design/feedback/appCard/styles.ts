import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

interface IStyledAppCard {
  $isMobile: boolean;
}

const StyledAppCard = styled(Link)<IStyledAppCard>`
  box-sizing: border-box;
  padding: ${({ $isMobile }) =>
    $isMobile ? `${tokens.spacing.s200}` : `${tokens.spacing.s300}`};
  height: 170px;
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "250px")};
  min-height: ${({ $isMobile }) => $isMobile && "100px"};
  gap: ${({ $isMobile }) => $isMobile && `${tokens.spacing.s100}`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${tokens.spacing.s050};
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.stroke.dark.regular ?? inube.palette.neutral.N900};
  border: 1px solid
    ${({ theme }) =>
      theme?.color?.stroke.dark.regular ?? inube.palette.neutral.N30};
  box-shadow: 3px 3px 5px 1px
    ${({ theme }) =>
      theme?.color?.surface?.gray?.regular ?? inube.palette.neutral.N30};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) =>
      theme?.color?.surface?.gray?.regular ?? inube.palette.neutral.N30};
    background-color: ${({ theme }) =>
      theme?.color?.surface?.gray?.regular ?? inube.palette.neutral.N30};
    box-shadow: none;
  }
  ${({ $isMobile }) =>
    $isMobile &&
    `
     div {
      gap: ${tokens.spacing.s050};
    }
  `}
`;

export { StyledAppCard };
