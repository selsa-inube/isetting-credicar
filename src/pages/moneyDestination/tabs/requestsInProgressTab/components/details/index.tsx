import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { Icon } from "@inubekit/icon";
import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";

import { ComponentAppearance } from "@ptypes/aparences.types";
import { DetailsRequestsInProgressModal } from "@components/modals/DetailsRequestsInProgressModal";
import { IEntry } from "@components/data/Table/types";
import { StyledContainerIcon } from "./styles";
import { labelsOfRequest } from "@config/moneyDestination/requestsInProgressTab/details/labelsOfRequest";
import { labelsOfTraceability } from "@config/moneyDestination/requestsInProgressTab/details/labelsOfTraceability";


interface IDetails {
  data: IEntry;
}

const Details = (props: IDetails) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", dateTraceability: data.date });

  const handleChange = (name: string, newValue: string) => {
    setForm({ ...form, [name]: newValue });
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={handleToggleModal} $isTablet={screenTablet}>
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
          labelsOfRequest={labelsOfRequest}
          labelsOfTraceability={labelsOfTraceability}
          dateSelected={form.dateTraceability}
          onCloseModal={handleToggleModal}
          onChange={handleChange}
          onMoreDetails={() => {
            console.log("");
          }}
        />
      )}
    </>
  );
};

export { Details };
