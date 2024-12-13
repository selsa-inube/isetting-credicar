import { IRuleDecision } from "@isettingkit/input";
import {
  BusinessRuleCard,
  BusinessRuleView,
} from "@isettingkit/business-rules";
import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { StyledContainerAppCard } from "./styles";

interface ICreditLineCard {
  data: IRuleDecision;
}

function CreditLineCard(props: ICreditLineCard) {
  const { data } = props;

  return (
    <Stack direction="column" gap={tokens.spacing.s050} width="315px">
      <Text
        type="title"
        size="medium"
        appearance={ComponentAppearance.GRAY}
        weight="bold"
      >
        {data.id}
      </Text>
      <StyledContainerAppCard>
        <BusinessRuleCard
          id={data.id!}
          controls={false}
          handleDelete={() => console.log("")}
          handleView={() => console.log("")}
        >
          <BusinessRuleView
            decision={data}
            textValues={{
              selectOptions: "Seleccione las opciones",
              selectOption: "Seleccione una opción",
              rangeMin: (label: string) => `${label} Minima`,
              rangeMax: (label: string) => `${label} Maxima`,
              reasonForChange: "",
              change: "",
              changePlaceholder: "",
              termStart: "",
              termEnd: "",
              cancel: "",
              confirm: "",
              none: "Ninguno",
              factsThatConditionIt: "Condiciones que lo determinan",
              criteria: "Criterios",
              terms: "Vigencia",
            }}
          />
        </BusinessRuleCard>
      </StyledContainerAppCard>
    </Stack>
  );
}

export { CreditLineCard };
export type { ICreditLineCard };
