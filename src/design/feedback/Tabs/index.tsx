import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Stack, Icon } from "@inubekit/inubekit";

import { Tab, ITab } from "./Tab";
import { StyledContainer, StyledTabs } from "./styles";
import { handleChevronClick, handleTabClick } from "./utils";

interface ITabs {
  tabs: ITab[];
  scroll?: boolean;
  onChange: (id: string) => void;
  selectedTab: string;
}

const Tabs = ({ tabs, onChange, scroll = false, selectedTab }: ITabs) => {
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  const helperHandleChevron = (direction: "left" | "right") => {
    handleChevronClick(direction, tabsContainerRef);
  };

  return (
    <StyledContainer>
      <Stack justifyContent="space-between" gap="12px" height="32px">
        {scroll && (
          <Icon
            variant="filled"
            icon={<MdChevronLeft />}
            appearance="light"
            cursorHover
            onClick={() => helperHandleChevron("left")}
          />
        )}
        <StyledTabs ref={tabsContainerRef} onClick={handleTabClick(onChange)}>
          <Stack gap="24px">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                disabled={tab.disabled}
                selected={tab.id === selectedTab}
                id={tab.id}
                label={tab.label}
                notificationIndicators={tab.notificationIndicators}
              />
            ))}
          </Stack>
        </StyledTabs>
        {scroll && (
          <Icon
            variant="filled"
            icon={<MdChevronRight />}
            appearance="light"
            cursorHover
            onClick={() => helperHandleChevron("right")}
          />
        )}
      </Stack>
    </StyledContainer>
  );
};

export { Tabs };
export type { ITabs };
