import { Stack } from "@inubekit/inubekit";

import { PaymentCycleCardGroup } from "@design/feedback/paymentCycleCardGroup";
import { IOrdinaryPaymentCycles } from "@ptypes/payrollAgreement/payrollAgreementTab/IOrdinaryPaymentCycles";

const OrdinaryPaymentCycles = (props: IOrdinaryPaymentCycles) => {
  const { data, labelsPaymentCard } = props;

  return (
    <Stack height="310px" width="620px">
      <PaymentCycleCardGroup
        data={data}
        labelsPaymentCard={labelsPaymentCard}
      />
    </Stack>
  );
};

export { OrdinaryPaymentCycles };
