import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { tokens } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "300px" : "450px")};
  height: 626px;
  border-radius: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s300};
  gap: ${tokens.spacing.s300};
  box-sizing: border-box;
`;

const StyledContainerFields = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: 402px;
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
