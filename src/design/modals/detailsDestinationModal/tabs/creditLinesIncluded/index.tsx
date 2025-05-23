import { IRuleDecision } from "@isettingkit/input";
import { BusinessRules } from "@isettingkit/business-rules";
import { Stack } from "@inubekit/inubekit";

import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";
import { tokens } from "@design/tokens";
import { StyledContainer } from "../styles";

interface ICreditLinesIncluded {
  data: IRuleDecision[];
  textValues: IRulesFormTextValues;
  decisionTemplate: IRuleDecision;
}

const CreditLinesIncluded = (props: ICreditLinesIncluded) => {
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
        />
      </StyledContainer>
    </Stack>
  );
};

export { CreditLinesIncluded };
