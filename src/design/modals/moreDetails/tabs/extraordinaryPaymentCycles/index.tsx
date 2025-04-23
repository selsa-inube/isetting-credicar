import { Stack } from "@inubekit/inubekit";
import { PaymentCycleCardGroup } from "@design/feedback/paymentCycleCardGroup";
import { IExtraordinaryPaymentCycles } from "@ptypes/design/IExtraordinaryPaymentCycles";
import { StyledContainer } from "../styles";

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
