import { Outlet } from "react-router-dom";
import { Stack, Text, Grid } from "@inubekit/inubekit";

import { IAppData } from "@ptypes/context/authAndPortalDataProvider/IAppData";
import { tokens } from "@design/tokens";
import {
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledImage,
} from "./styles";

interface ISelectBusinessUnitsUI {
  appData: IAppData;
  screenTablet: boolean;
  screenDesktop: boolean;
  imageWidth: () => string;
}

const SelectBusinessUnitsUI = (props: ISelectBusinessUnitsUI) => {
  const { appData, screenTablet, imageWidth } = props;

  return (
    <Grid
      templateColumns={screenTablet ? "1fr" : "repeat(2, 1fr)"}
      templateRows={screenTablet ? "minmax(150px, 30vh) 1fr" : "100vh"}
    >
      <StyledWelcomeContainer>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={
            screenTablet ? `${tokens.spacing.s200}` : `${tokens.spacing.s400}`
          }
        >
          <Stack direction="column" alignItems="center">
            <Text
              as="h1"
              type="headline"
              size={screenTablet ? "medium" : "large"}
              textAlign="center"
            >
              Bienvenido a iSetting Credicar
            </Text>
          </Stack>
          <StyledImage
            src={appData.businessManager.urlLogo}
            alt="Sistemas Enlinea"
            width={imageWidth()}
          />
        </Stack>
      </StyledWelcomeContainer>
      <StyledOutletContainer>
        <Stack
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          padding={
            screenTablet
              ? `${tokens.spacing.s600} ${tokens.spacing.s100} ${tokens.spacing.s0}`
              : `${tokens.spacing.s0}`
          }
        >
          <Outlet />
        </Stack>
      </StyledOutletContainer>
    </Grid>
  );
};

export { SelectBusinessUnitsUI };
