import { IRuleDecision } from "@isettingkit/input";
import { Stack } from "@inubekit/stack";
import { Divider } from "@inubekit/divider";

import { CreditLineCard } from "@components/feedback/CreditLineCard";
import { tokens } from "@design/tokens";
import { StyledContainer } from "./styles";

interface ICreditLineTab {
  data: IRuleDecision[];
}

function CreditLineTab(props: ICreditLineTab) {
  const { data } = props;

  return (
    <Stack direction="column" gap={tokens.spacing.s300}>
      <StyledContainer>
        {data.map((decision, index) => (
          <CreditLineCard data={decision} key={index} />
        ))}
      </StyledContainer>
      <Divider />
    </Stack>
  );
}

export { CreditLineTab };
