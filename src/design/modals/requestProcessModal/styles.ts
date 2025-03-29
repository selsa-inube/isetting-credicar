import styled from "styled-components";
import { IIconAppearance, inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

interface IStyledContainerProgressBar {
  $appearance: IIconAppearance;
  $height: string;
}

interface IStyledBar {
  $progress: number;
  $statusError: boolean;
}

interface IStyledStepIndicator {
  $statusError: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "335px" : "550px")};
  height: ${(props) => (props.$smallScreen ? "226px" : "270px")};
  border-radius: ${tokens.spacing.s100};
  padding: ${(props) =>
    props.$smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`};
  box-sizing: border-box;
`;

const StyledContainerBar = styled.div`
  width: 100%;
  background-color: ${inube.palette.neutral.N30};
  border-radius: 4px;
  height: 8px;
`;

const StyledBar = styled.div<IStyledBar>`
  position: relative;
  width: ${({ $progress }) => `${$progress}%`};
  height: 8px;
  border-radius: 4px;
  transform-origin: left;
  animation-fill-mode: forwards;
  background-color: ${({ $statusError }) =>
    $statusError ? `${inube.palette.red.R300}` : `${inube.palette.green.G300}`};
  transition: width 0.5s ease-in-out;
`;

const StyledContainerFields = styled.div`
  display: flex;
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${tokens.spacing.s100};
  gap: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s150};
`;

const StyledContainerProgressBar = styled.div<IStyledContainerProgressBar>`
  width: 100%;
  background-color: ${inube.palette.neutral.N30};
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${tokens.spacing.s050};
  height: ${({ $height }) => $height};
`;

const StyledStepIndicator = styled.div<IStyledStepIndicator>`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ $statusError }) =>
    $statusError ? `${inube.palette.red.R400}` : `${inube.palette.green.G400}`};
`;

export {
  StyledModal,
  StyledBar,
  StyledContainerBar,
  StyledContainerFields,
  StyledContainerProgressBar,
  StyledStepIndicator,
};
