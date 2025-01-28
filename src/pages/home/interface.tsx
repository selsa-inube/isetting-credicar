import { MdOutlineChevronRight, MdOutlineDoorFront } from "react-icons/md";
import { Header } from "@inubekit/header";
import { Icon } from "@inubekit/icon";
import { useMediaQueries } from "@inubekit/hooks";

import { AppCard } from "@components/feedback/AppCard";
import { Title } from "@components/data/Title";
import { BusinessUnitChange } from "@design/inputs/BusinessUnitChange";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

import {
  StyledCollapse,
  StyledCollapseIcon,
  StyledContainer,
  StyledContainerCards,
  StyledContainerSection,
  StyledContentImg,
  StyledFooter,
  StyledHeaderContainer,
  StyledLogo,
  StyledTitle,
} from "./styles";

import { mainNavigation } from "@config/mainNavigation";
import { userMenu } from "@config/menuMainConfiguration";
import { ICardData } from "@ptypes/home/ICardData";
import { IAppData } from "@ptypes/context/authAndPortalDataProvider/IAppData";

interface IHomeUI {
  appData: IAppData;
  businessUnitChangeRef: React.RefObject<HTMLDivElement>;
  businessUnitsToTheStaff: IBusinessUnitsPortalStaff[];
  collapse: boolean;
  collapseMenuRef: React.RefObject<HTMLDivElement>;
  selectedClient: string;
  handleLogoClick: (businessUnit: IBusinessUnitsPortalStaff) => void;
  setCollapse: (value: boolean) => void;
  data?: ICardData[];
}

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function HomeUI(props: IHomeUI) {
  const {
    data,
    appData,
    businessUnitChangeRef,
    businessUnitsToTheStaff,
    collapse,
    collapseMenuRef,
    selectedClient,
    setCollapse,
    handleLogoClick,
  } = props;
  const username = appData.user.userName.split(" ")[0];

  const {
    "(max-width: 532px)": screenMobile,
    "(max-width: 805px)": screenTablet,
    "(max-width: 944px)": screenTabletHeader,
  }: Record<string, boolean> = useMediaQueries([
    "(max-width: 532px)",
    "(max-width: 805px)",
    "(max-width: 944px)",
  ]);

  return (
    <>
      <StyledContainer>
        <StyledHeaderContainer>
          <Header
            portalId="portal"
            navigation={mainNavigation}
            logoURL={renderLogo(appData.businessUnit.urlLogo)}
            user={{
              username: appData.user.userName,
              breakpoint: "848px",
            }}
            menu={userMenu}
          />
          {businessUnitsToTheStaff.length > 1 && (
            <>
              <StyledCollapseIcon
                $collapse={collapse}
                onClick={() => setCollapse(!collapse)}
                $isTablet={screenTabletHeader}
                ref={collapseMenuRef}
              >
                <Icon
                  icon={<MdOutlineChevronRight />}
                  appearance="primary"
                  size="24px"
                  cursorHover
                />
              </StyledCollapseIcon>
              {collapse && (
                <StyledCollapse ref={businessUnitChangeRef}>
                  <BusinessUnitChange
                    businessUnits={businessUnitsToTheStaff}
                    onLogoClick={handleLogoClick}
                    selectedClient={selectedClient}
                  />
                </StyledCollapse>
              )}
            </>
          )}
        </StyledHeaderContainer>
        <StyledContainerSection $isMobile={screenMobile}>
          <StyledTitle $isTablet={screenTablet}>
            <Title
              title={`Bienvenid@, ${username}`}
              description="Selecciona una opción para empezar a ajustar la configuración."
              icon={<MdOutlineDoorFront />}
              sizeTitle="large"
            />
          </StyledTitle>
          <StyledContainerCards $isTablet={screenTablet}>
            {data?.map((card) => (
              <AppCard
                key={card.id}
                label={card.label}
                description={card.description}
                icon={card.icon}
                url={card.url}
              />
            ))}
          </StyledContainerCards>
        </StyledContainerSection>
        <StyledFooter $isMobile={screenMobile}>
          <StyledLogo src={appData.businessManager.urlBrand} />
        </StyledFooter>
      </StyledContainer>
    </>
  );
}

export { HomeUI };
