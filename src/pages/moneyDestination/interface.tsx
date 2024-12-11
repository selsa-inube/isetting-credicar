import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { Breadcrumbs } from "@inubekit/breadcrumbs";

import { tokens } from "@design/tokens";
import { Tabs } from "@design/feedback/Tabs";
import { Title } from "@components/data/Title";
import { crumbsMoneyDestination } from "./config/navigation";
import { moneyDestinationTabsConfig } from "./config/tabs.config";
import { MoneyDestinationTab } from "./tabs/moneyDestinationTab";

interface IMoneyDestinationUI {
  isSelected: string;
  handleTabChange: (id: string) => void;
}

function MoneyDestinationUI(props: IMoneyDestinationUI) {
  const { isSelected, handleTabChange } = props;

  const smallScreen = useMediaQuery("(max-width: 990px)");
  const smallScreenTab = useMediaQuery("(max-width: 450px)");

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${tokens.spacing.s200}`
          : `${tokens.spacing.s400} ${tokens.spacing.s800}`
      }
    >
      <Stack gap={tokens.spacing.s600} direction="column">
        <Stack gap={tokens.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsMoneyDestination} />
          <Title
            title="Destinos de dinero"
            description=" Destino del dinero para crédito."
            sizeTitle="large"
          />
        </Stack>
        <Stack gap={tokens.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(moneyDestinationTabsConfig)}
            selectedTab={isSelected}
            onChange={handleTabChange}
            scroll={smallScreenTab ? true : false}
          />

          {isSelected === moneyDestinationTabsConfig.moneyDestination.id && (
            <MoneyDestinationTab />
          )}
          {isSelected === moneyDestinationTabsConfig.requestsInProgress.id && (
            <></>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export { MoneyDestinationUI };
