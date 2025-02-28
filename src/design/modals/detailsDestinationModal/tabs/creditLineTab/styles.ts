import styled from "styled-components";
interface IStyledContainer {
  $isMoreDetails: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  & > div > div > div > div > div > div {
    height: ${({ $isMoreDetails }) => $isMoreDetails && "340px"};
    max-height: ${({ $isMoreDetails }) => $isMoreDetails && "340px"};
  }

  & > div > div > div > div {
    height: ${({ $isMoreDetails }) => !$isMoreDetails && "340px"};
    max-height: ${({ $isMoreDetails }) => !$isMoreDetails && "340px"};
  }
`;

export { StyledContainer };
