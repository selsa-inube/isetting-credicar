import { Stack, Tabs, useMediaQuery, Breadcrumbs } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { Title } from "@design/data/title";
import { crumbsMoneyDestination } from "@config/moneyDestination/navigation";
import { moneyDestinationTabsConfig } from "@config/moneyDestination/tabs";
import { MoneyDestinationTab } from "@pages/moneyDestination/tabs/moneyDestinationTab";
import { RequestsInProgressTab } from "@pages/moneyDestination/tabs/requestsInProgressTab";
import { ICardData } from "@ptypes/home/ICardData";

interface IMoneyDestinationUI {
  isSelected: string;
  descriptionOptions: ICardData;
  handleTabChange: (id: string) => void;
}

function MoneyDestinationUI(props: IMoneyDestinationUI) {
  const { isSelected, descriptionOptions, handleTabChange } = props;

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
            title={descriptionOptions?.publicCode ?? ""}
            description={descriptionOptions?.description ?? ""}
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
            <RequestsInProgressTab />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export { MoneyDestinationUI };
