import { IRuleDecision } from "@isettingkit/input";
import { BusinessRules } from "@isettingkit/business-rules";
import { Stack } from "@inubekit/inubekit";

import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";
import { tokens } from "@design/tokens";
import { StyledContainer } from "../styles";
interface ICreditLineTab {
  data: IRuleDecision[];
  textValues: IRulesFormTextValues;
  decisionTemplate: IRuleDecision;
}

const CreditLineTab = (props: ICreditLineTab) => {
  const { data, textValues, decisionTemplate } = props;

  return (
    <Stack
      direction="column"
      gap={tokens.spacing.s300}
      justifyContent="space-between"
      height="85%"
    >
      <StyledContainer>
        <BusinessRules
          controls={false}
          decisions={data}
          textValues={textValues}
          decisionTemplate={decisionTemplate}
          isModalOpen={false}
          selectedDecision={null}
          loading={false}
          handleOpenModal={() => console.log("")}
          handleCloseModal={() => console.log("")}
          handleSubmitForm={() => console.log("")}
          handleDelete={() => console.log("")}
          customMessageEmptyDecisions="Aún NO tienes definidas líneas de crédito, ve a editar"
        />
      </StyledContainer>
    </Stack>
  );
};

export { CreditLineTab };
