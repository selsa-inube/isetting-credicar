import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { IEntry } from "@design/data/table/types";
import { DetailsPayrollAgreementModal } from "@design/modals/detailsPayrollAgreementModal";
import { IDetailsTabsConfig } from "@design/modals/detailsPayrollAgreementModal/types";
import { ILabel } from "@design/modals/detailsRequestsInProgressModal/types";
import { StyledContainerIcon } from "./styles";

interface IDetailsPayrollAgreement {
  data: IEntry;
  namePayroll: string;
  showModal: boolean;
  onToggleModal: () => void;
  detailsTabsConfig: IDetailsTabsConfig;
  defaultSelectedTab: string;
  filteredTabsConfig: IDetailsTabsConfig;
  isMobile: boolean;
  isSelected: string;
  labelsDetails: ILabel[];
  labelsPaymentCard: ILabel[];
  ordinaryPaymentData: IEntry[];
  extraordinaryPaymentData: IEntry[];
  onTabChange: (id: string) => void;
}

const DetailsPayrollAgreement = (props: IDetailsPayrollAgreement) => {
  const {
    data,
    namePayroll,
    showModal,
    defaultSelectedTab,
    filteredTabsConfig,
    isMobile,
    isSelected,
    detailsTabsConfig,
    labelsDetails,
    labelsPaymentCard,
    ordinaryPaymentData,
    extraordinaryPaymentData,
    onToggleModal,
    onTabChange,
  } = props;

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={ComponentAppearance.DARK}
          icon={<MdOutlineRemoveRedEye />}
          size={screenTablet ? "20px" : "16px"}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Detalles
          </Text>
        )}
      </StyledContainerIcon>

      {showModal && (
        <DetailsPayrollAgreementModal
          namePayroll={namePayroll}
          isSelected={isSelected}
          defaultSelectedTab={defaultSelectedTab}
          filteredTabsConfig={filteredTabsConfig}
          smallScreenTab={isMobile}
          detailsTabsConfig={detailsTabsConfig}
          data={data}
          portalId="portal"
          labelsDetails={labelsDetails}
          labelsPaymentCard={labelsPaymentCard}
          ordinaryPaymentData={ordinaryPaymentData}
          extraordinaryPaymentData={extraordinaryPaymentData}
          onCloseModal={onToggleModal}
          onTabChange={onTabChange}
        />
      )}
    </>
  );
};

export { DetailsPayrollAgreement };
