import styled from "styled-components";
import { tokens } from "@design/tokens";

const StyledContainerButton = styled.div`
  & button {
    display: flex;
    padding-right: ${tokens.spacing.s0};
    justify-content: flex-end;
  }
`;

export { StyledContainerButton };
