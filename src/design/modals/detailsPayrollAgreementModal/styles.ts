import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

interface IStyledField {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "300px" : "700px")};
  min-height: ${(props) => (props.$smallScreen ? "auto" : "350px")};

  max-height: ${(props) => (props.$smallScreen ? "auto" : "750px")};
  border-radius: ${tokens.spacing.s100};
  padding: ${(props) =>
    props.$smallScreen ? `${tokens.spacing.s200}` : `${tokens.spacing.s300}`};
  gap: ${tokens.spacing.s200};
  box-sizing: border-box;
`;

const StyledContainerButton = styled.div`
  & button {
    display: flex;
    padding-right: ${tokens.spacing.s0};
    justify-content: flex-end;
  }
`;

const StyledField = styled.div<IStyledField>`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 52px;
  border-radius: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s075} ${tokens.spacing.s200};
  box-sizing: border-box;
  background-color: ${inube.palette.neutral.N10};
`;

const StyledBorder = styled.div<IStyledModal>`
  display: flex;
  gap: ${tokens.spacing.s100};
  flex-direction: column;
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${tokens.spacing.s100};
  width: auto;
  padding: ${({ $smallScreen }) =>
    $smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s200}`};
`;

export { StyledModal, StyledContainerButton, StyledField, StyledBorder };
