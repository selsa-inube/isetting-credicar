import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { Breadcrumbs } from "@inubekit/breadcrumbs";

import { tokens } from "@design/tokens";
import { Tabs } from "@design/feedback/Tabs";
import { Title } from "@components/data/Title";
import { crumbsMoneyDestination } from "./config/navigation";
import { MoneyDestinationTabsConfig } from "./config/tabs.config";
import { MoneyDestinationTab } from "./tabs/moneyDestinationTab";

interface MoneyDestinationUIProps {
  isSelected: string;
  handleTabChange: (id: string) => void;
}

function MoneyDestinationUI(props: MoneyDestinationUIProps) {
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
            tabs={Object.values(MoneyDestinationTabsConfig)}
            selectedTab={isSelected}
            onChange={handleTabChange}
            scroll={smallScreenTab ? true : false}
          />

          {isSelected === MoneyDestinationTabsConfig.moneyDestination.id && (
            <MoneyDestinationTab />
          )}
          {isSelected === MoneyDestinationTabsConfig.requestsInProgress.id && (
            <></>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export { MoneyDestinationUI };
