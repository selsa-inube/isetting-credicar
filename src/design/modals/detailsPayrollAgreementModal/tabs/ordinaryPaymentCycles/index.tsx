import { Stack } from "@inubekit/inubekit";

import { PaymentCycleCardGroup } from "@design/feedback/paymentCycleCardGroup";
import { ILabel } from "@design/modals/detailsRequestsInProgressModal/types";
import { IEntry } from "@design/data/table/types";

interface IOrdinaryPaymentCycles {
  data: IEntry[];
  labelsPaymentCard: ILabel[];
}

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
