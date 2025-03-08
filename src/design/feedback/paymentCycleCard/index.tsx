import { MdCurrencyExchange } from "react-icons/md";
import { Divider, Icon, Stack, Text, useMediaQuery } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { ComponentAppearance } from "@enum/appearances";
import { IEntry } from "@design/data/table/types";
import { ILabel } from "@design/modals/detailsRequestsInProgressModal/types";
import { StyledCard } from "./styles";

interface IPaymentCycleCard {
  data: IEntry;
  numberCard: number;
  labels: ILabel[];
}

const PaymentCycleCard = (props: IPaymentCycleCard) => {
  const { data, numberCard, labels } = props;
  const isMobile = useMediaQuery(mediaQueryMobile);

  return (
    <StyledCard $smallScreen={isMobile}>
      <Stack gap={isMobile ? tokens.spacing.s050 : tokens.spacing.s150}>
        <Icon
          icon={<MdCurrencyExchange />}
          appearance={ComponentAppearance.GRAY}
          size="24px"
        />
        <Text
          type="title"
          size="medium"
          appearance={ComponentAppearance.GRAY}
          weight="bold"
        >
          {`Ciclo de pago -${numberCard}`}
        </Text>
      </Stack>
      <Divider dashed />

      <Stack
        gap={tokens.spacing.s100}
        direction="column"
        justifyContent="center"
      >
        {labels.map(
          (field, id) =>
            data[field.id] && (
              <Stack key={id} direction="column" gap={tokens.spacing.s050}>
                <Text size="medium" type="label" weight="bold">
                  {field.titleName}
                </Text>
                <Text
                  size="large"
                  appearance={ComponentAppearance.GRAY}
                  ellipsis
                >
                  {data[field.id]}
                </Text>
              </Stack>
            ),
        )}
      </Stack>
    </StyledCard>
  );
};

export { PaymentCycleCard };
export type { IPaymentCycleCard };
