import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { tokens } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "350px" : "536px")};
  height: ${(props) => (props.$smallScreen ? "280px" : "300px")};
  border-radius: ${tokens.spacing.s100};
  padding: ${(props) =>
    props.$smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`};
  box-sizing: border-box;
`;

export { StyledModal };
