import { Stack, Tabs, useMediaQuery, Breadcrumbs } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { Title } from "@design/data/title";
import { ICardData } from "@ptypes/home/ICardData";
import { crumbsPayrollAgreement } from "@config/payrollAgreement/navigation";
import { payrollAgreementTabsConfig } from "@config/payrollAgreement/tabs";
import { PayrollAgreementTab } from "./tabs/payrollAgreementTab";

interface IPayrollAgreementUI {
  isSelected: string;
  descriptionOptions: ICardData;
  handleTabChange: (id: string) => void;
}

function PayrollAgreementUI(props: IPayrollAgreementUI) {
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
          <Breadcrumbs crumbs={crumbsPayrollAgreement} />
          <Title
            title={descriptionOptions?.publicCode ?? ""}
            description={descriptionOptions?.description ?? ""}
            sizeTitle="large"
          />
        </Stack>
        <Stack gap={tokens.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(payrollAgreementTabsConfig)}
            selectedTab={isSelected}
            onChange={handleTabChange}
            scroll={smallScreenTab ? true : false}
          />

          {isSelected === payrollAgreementTabsConfig.payrollAgreement.id && (
            <PayrollAgreementTab />
          )}
          {isSelected === payrollAgreementTabsConfig.requestsInProgress.id && (
            <></>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export { PayrollAgreementUI };
