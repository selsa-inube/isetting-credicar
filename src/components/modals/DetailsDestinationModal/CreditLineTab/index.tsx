import {
  IRuleDecision,
  ValueDataType,
  ValueHowToSetUp,
} from "@isettingkit/input";
import { BusinessRules } from "@isettingkit/business-rules";
import { Stack } from "@inubekit/stack";
import { Divider } from "@inubekit/divider";
import { tokens } from "@design/tokens";
import { StyledContainer } from "./styles";

interface ICreditLineTab {
  data: IRuleDecision[];
}

const decisionTemplate: IRuleDecision = {
  name: "TasaEfectivaAnual",
  dataType: ValueDataType.PERCENTAGE,
  value: { from: -1, to: -1 },
  valueUse: ValueHowToSetUp.RANGE,
  startDate: "",
  endDate: "",
  conditions: [
    {
      name: "AntigüedadDelCliente(Días)",
      dataType: ValueDataType.ALPHABETICAL,
      value: "",
      valueUse: ValueHowToSetUp.EQUAL,
    },
  ],
};

function CreditLineTab(props: ICreditLineTab) {
  const { data } = props;

  return (
    <Stack direction="column" gap={tokens.spacing.s300}>
      <StyledContainer>
        <BusinessRules
          controls={false}
          decisions={data}
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
          decisionTemplate={decisionTemplate}
          isModalOpen={false}
          selectedDecision={null}
          loading={false}
          handleOpenModal={() => console.log("")}
          handleCloseModal={() => console.log("")}
          handleSubmitForm={() => console.log("")}
          handleDelete={() => console.log("")}
        />
      </StyledContainer>
      <Divider />
    </Stack>
  );
}

export { CreditLineTab };
