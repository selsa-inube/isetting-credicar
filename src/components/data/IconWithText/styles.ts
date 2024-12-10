import styled from "styled-components";

const StyledText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 560px) {
    max-width: 100px;
  }
`;

export { StyledText };
