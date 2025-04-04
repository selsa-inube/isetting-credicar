import { useMediaQuery, Stack } from "@inubekit/inubekit";
import { IEntry } from "@design/data/table/types";
import { ILabel } from "@ptypes/ILabel";
import { mediaQueryMobile } from "@config/environment";
import { StyledContainer } from "./styles";
import { PaymentCycleCard } from "../paymentCycleCard";

interface IPaymentCycleCardGroup {
  data: IEntry[];
  labelsPaymentCard: ILabel[];
}

const PaymentCycleCardGroup = (props: IPaymentCycleCardGroup) => {
  const { data, labelsPaymentCard } = props;
  const smallScreen = useMediaQuery(mediaQueryMobile);

  return (
    <StyledContainer $smallScreen={smallScreen}>
      {data.map((entry: IEntry, index) => (
        <Stack key={index}>
          <PaymentCycleCard
            data={entry}
            numberCard={index + 1}
            labels={labelsPaymentCard}
          />
        </Stack>
      ))}
    </StyledContainer>
  );
};

export { PaymentCycleCardGroup };
export type { IPaymentCycleCardGroup };
