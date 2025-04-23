import { Stack, Tabs, Breadcrumbs } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { Title } from "@design/data/title";
import { crumbsPayrollAgreement } from "@config/payrollAgreement/navigation";
import { IPayrollAgreementUI } from "@ptypes/payrollAgreement/requestInProgTab/IPayrollAgreementUI";
import { payrollAgreementTabsConfig } from "@config/payrollAgreement/tabs";
import { PayrollAgreementTab } from "./tabs/payrollAgreementTab";
import { RequestsInProgressTab } from "./tabs/requestsInProgressTab";

const PayrollAgreementUI = (props: IPayrollAgreementUI) => {
  const {
    isSelected,
    descriptionOptions,
    showPayrollAgreementTab,
    showRequestsInProgressTab,
    smallScreen,
    smallScreenTab,
    handleTabChange,
  } = props;

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

          {showPayrollAgreementTab && <PayrollAgreementTab />}
          {showRequestsInProgressTab && <RequestsInProgressTab />}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { PayrollAgreementUI };
