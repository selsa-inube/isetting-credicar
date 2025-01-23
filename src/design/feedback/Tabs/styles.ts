import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { tokens } from "@design/tokens";

const StyledTabs = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
  align-content: flex-end;
  & > div {
    width: fit-content;
  }
  & > div > ul {
    position: absolute;
    z-index: 1;
  }
`;

const StyledContainer = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
  border-bottom: 2px solid
    ${({ theme }) => theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  padding: ${tokens.spacing.s0} ${tokens.spacing.s200};
  & > div > figure {
    padding-top: ${tokens.spacing.s050};
  }
`;

export { StyledTabs, StyledContainer };
