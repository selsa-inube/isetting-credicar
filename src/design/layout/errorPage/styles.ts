import styled from "styled-components";

interface IStyledCompanyLogo {
  $isTablet: boolean;
}

const StyledCompanyLogo = styled.img<IStyledCompanyLogo>`
  max-width: ${({ $isTablet }) => ($isTablet ? "250px" : "300px")};
  margin: ${({ $isTablet }) => $isTablet && "0 auto"};
`;

const StyledErrorImage = styled.img`
  justify-self: center;
  max-width: 100%;
`;

export { StyledCompanyLogo, StyledErrorImage };
