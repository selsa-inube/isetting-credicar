import { Stack } from "@inubekit/inubekit";

import { IEntry } from "@design/data/table/types";
import { ILabel } from "@ptypes/ILabel";
import { PaymentCycleCardGroup } from "@design/feedback/paymentCycleCardGroup";
import { StyledContainer } from "../styles";

interface IExtraordinaryPaymentCycles {
  data: IEntry[];
  labelsPaymentCard: ILabel[];
}

const ExtraordinaryPaymentCycles = (props: IExtraordinaryPaymentCycles) => {
  const { data, labelsPaymentCard } = props;

  return (
    <Stack height="310px" width="620px">
      <StyledContainer>
        <PaymentCycleCardGroup
          data={data}
          labelsPaymentCard={labelsPaymentCard}
        />
      </StyledContainer>
    </Stack>
  );
};

export { ExtraordinaryPaymentCycles };
