import { useState } from "react";
import { useMediaQuery } from "@inubekit/hooks";

import { mediaQueryMobile } from "@config/environment";
import { IEntry } from "@design/data/table/types";
import { DetailsCreditLinesModalUI } from "./interface";
import { IDetailsTabsConfig } from "./types";

interface IDetailsCreditLinesModal {
  detailsTabsConfig: IDetailsTabsConfig;
  portalId: string;
  data: IEntry;
  onCloseModal: () => void;
}

const DetailsCreditLinesModal = (props: IDetailsCreditLinesModal) => {
  const { detailsTabsConfig, portalId, data, onCloseModal } = props;

  const [isSelected, setIsSelected] = useState<string>();

  const isMobile = useMediaQuery(mediaQueryMobile);

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  return (
    <DetailsCreditLinesModalUI
      data={data}
      detailsTabsConfig={detailsTabsConfig}
      isSelected={isSelected ?? detailsTabsConfig.generalData.id}
      onCloseModal={onCloseModal}
      onTabChange={handleTabChange}
      portalId={portalId}
      smallScreenTab={isMobile}
    />
  );
};

export { DetailsCreditLinesModal };
export type { IDetailsCreditLinesModal };
