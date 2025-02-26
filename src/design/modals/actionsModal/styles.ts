import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

const StyledModal = styled.div`
  display: flex;
  position: absolute;
  top: 6px;
  right: 2px;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: 155px;
  box-sizing: border-box;
  padding: ${tokens.spacing.s100} ${tokens.spacing.s150};
  gap: ${tokens.spacing.s600};
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: ${tokens.spacing.s100};
  z-index: 1;
`;

const StyledContentActions = styled.div``;

export { StyledModal, StyledContentActions };
