import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "300px" : "450px")};
  height: auto;
  border-radius: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s300};
  gap: ${(props) =>
    props.$smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`};
  box-sizing: border-box;
`;

const StyledContainerFields = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "280px" : "402px")};
  height: auto;
  border-radius: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s075} ${tokens.spacing.s200};
  gap: ${tokens.spacing.s050};
  box-sizing: border-box;
  background-color: ${inube.palette.neutral.N10};
`;

const StyledContainerButton = styled.div`
  & button {
    display: flex;
    padding-right: ${tokens.spacing.s0};
    justify-content: flex-end;
  }
`;

export { StyledModal, StyledContainerFields, StyledContainerButton };
