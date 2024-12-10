import { useState } from "react";
import { Tabs, ITabs } from "..";

const TabsController = (props: ITabs) => {
  const { tabs, scroll } = props;
  const [currentTab, setCurrentTab] = useState(props.selectedTab);

  const onChange = (tabId: string) => {
    setCurrentTab(tabId);
  };

  return (
    <Tabs
      tabs={tabs}
      scroll={scroll}
      onChange={onChange}
      selectedTab={currentTab}
    />
  );
};

export { TabsController };
