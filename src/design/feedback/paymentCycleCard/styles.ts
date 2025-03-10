import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

interface IStyledCard {
  $smallScreen: boolean;
}

const StyledCard = styled.div<IStyledCard>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "200px" : "290px")};
  height: 282px;
  border-radius: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s200};
  gap: ${(props) =>
    props.$smallScreen ? `${tokens.spacing.s050}` : `${tokens.spacing.s150}`};
  box-sizing: border-box;
  box-shadow: 2px 1px 6px 2px rgba(0, 0, 0, 0.15);
`;

export { StyledCard };
