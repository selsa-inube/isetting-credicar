import { IRuleDecision } from "@isettingkit/input";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Tag } from "@inubekit/tag";

import { BoxAttribute } from "@src/design/feedback/boxAttributes";
import { tokens } from "@design/tokens";
import { IGeneralInformationEntry } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IGeneralInformationDestination";
import { ComponentAppearance } from "@enum/appearances";
import { StyledAttribute, StyledConatinerAttribute } from "./styles";

const renderPersonalInfoVerification = (
  values: IGeneralInformationEntry,
  isMobile: boolean,
) => (
  <>
    <Grid
      templateColumns={isMobile ? "1fr" : "1fr 1fr"}
      autoRows="1fr"
      gap={tokens.spacing.s100}
      width="100%"
    >
      <BoxAttribute
        label="Nombre del destino:"
        value={values.nameDestination}
      />
    </Grid>
    <Stack width="100%" direction="column" gap={tokens.spacing.s100}>
      <BoxAttribute
        direction="column"
        label="Descripción:"
        value={values.description}
      />
    </Stack>
  </>
);

const renderCreditlineVerification = (values: IRuleDecision[]) => (
  <StyledConatinerAttribute>
    <StyledAttribute>
      {values && values.length > 0 ? (
        <>
          {values.map((decision, index) => (
            <Tag
              key={index}
              appearance={ComponentAppearance.GRAY}
              label={
                typeof decision.value === "object"
                  ? JSON.stringify(decision.value)
                  : String(decision.value)
              }
              weight="strong"
            />
          ))}
        </>
      ) : (
        <Tag
          appearance={ComponentAppearance.DANGER}
          label="Ninguna línea de crédito configurada"
        />
      )}
    </StyledAttribute>
  </StyledConatinerAttribute>
);

export { renderPersonalInfoVerification, renderCreditlineVerification };
