import styled from "styled-components";
import { tokens } from "@design/tokens";
import { inube } from "@inubekit/inubekit";
interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "320px" : "450px")};
  height: ${(props) => (props.$smallScreen ? "280px" : "374px")};
  border-radius: ${tokens.spacing.s100};
  padding: ${(props) =>
    props.$smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`};
  box-sizing: border-box;
  gap: ${(props) =>
    props.$smallScreen ? `${tokens.spacing.s050}` : `${tokens.spacing.s300}`};
`;

const StyledContainerButton = styled.div`
  & button {
    display: flex;
    padding-right: ${tokens.spacing.s0};
    justify-content: flex-end;
  }
`;

export { StyledModal, StyledContainerButton };
