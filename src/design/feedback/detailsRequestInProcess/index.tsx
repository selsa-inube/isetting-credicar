import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";

import { labelsOfRequest } from "@config/moneyDestination/requestsInProgressTab/details/labelsOfRequest";
import { labelsOfTraceability } from "@config/moneyDestination/requestsInProgressTab/details/labelsOfTraceability";
import { IServerDomain } from "@ptypes/IServerDomain";
import { IEntry } from "@design/data/table/types";
import { DetailsRequestsInProgressModal } from "@design/modals/detailsRequestsInProgressModal";
import { StyledContainerIcon } from "./styles";

interface IDetails {
  data: IEntry;
  showModal: boolean;
  form: { name: string; dateTraceability: string };
  dateOptions: IServerDomain[];
  onToggleModal: () => void;
  onChange: (name: string, newValue: string) => void;
}

const DetailsRequestInProcess = (props: IDetails) => {
  const { data, showModal, form, dateOptions, onToggleModal, onChange } = props;

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
        <DetailsRequestsInProgressModal
          data={data}
          portalId="portal"
          dateOptions={dateOptions}
          labelsOfRequest={labelsOfRequest}
          labelsOfTraceability={labelsOfTraceability}
          dateSelected={form.dateTraceability}
          onCloseModal={onToggleModal}
          onChange={onChange}
          onMoreDetails={() => {
            console.log("");
          }}
        />
      )}
    </>
  );
};

export { DetailsRequestInProcess };
