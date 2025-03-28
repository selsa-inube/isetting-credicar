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
  width: ${(props) => (props.$smallScreen ? "335px" : "450px")};
  min-height: ${(props) => (props.$smallScreen ? "auto" : "480px")};
  border-radius: ${tokens.spacing.s100};
  padding: ${tokens.spacing.s300};
  gap: ${tokens.spacing.s300};
  box-sizing: border-box;
`;

const StyledSelectConatiner = styled.div`
  & > div > div > input {
    width: 100%;
  }
`;

export { StyledModal, StyledSelectConatiner };
