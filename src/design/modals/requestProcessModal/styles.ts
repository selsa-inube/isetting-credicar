import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

interface IStyledBar {
  $progress: number;
  $statusError: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "350px" : "536px")};
  height: 271px;
  border-radius: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s300};
  box-sizing: border-box;
`;

const StyledContainerBar = styled.div`
  width: 100%;
  background-color: ${inube.palette.neutral.N30};
  border-radius: 4px;
  height: 10px;
`;

const StyledBar = styled.div<IStyledBar>`
  position: relative;
  width: ${({ $progress }) => `${$progress}%`};
  height: 10px;
  border-radius: 4px;
  transform-origin: left;
  animation-fill-mode: forwards;
  background-color: ${({ $statusError }) =>
    $statusError ? `${inube.palette.red.R300}` : `${inube.palette.green.G300}`};
  transition: width 0.5s ease-in-out; /* Añade esta línea para la animación */
`;

export { StyledModal, StyledBar, StyledContainerBar };
