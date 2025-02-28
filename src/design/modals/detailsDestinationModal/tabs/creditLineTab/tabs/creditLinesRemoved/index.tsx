import { IRuleDecision } from "@isettingkit/input";
import { BusinessRules } from "@isettingkit/business-rules";
import { Stack } from "@inubekit/inubekit";

import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";

interface ICreditLinesRemoved {
  data: IRuleDecision[];
  textValues: IRulesFormTextValues;
  decisionTemplate: IRuleDecision;
}

const CreditLinesRemoved = (props: ICreditLinesRemoved) => {
  const { data, textValues, decisionTemplate } = props;

  return (
    <Stack direction="column" justifyContent="space-between" height="85%">
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
    </Stack>
  );
};

export { CreditLinesRemoved };
