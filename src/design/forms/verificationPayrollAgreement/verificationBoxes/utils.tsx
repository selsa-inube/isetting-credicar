import { Grid, Stack } from "@inubekit/inubekit";

import { BoxAttribute } from "@design/feedback/boxAttributes";
import { tokens } from "@design/tokens";
import { ICompanyEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/ICompanyEntry";
import { IGeneralInformationEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IGeneralInformationPayroll";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { columnsAttribute } from "@utils/columnsAttribute";
import { IEntry } from "@design/data/table/types";
import { rowsAttribute } from "@utils/rowsAttribute";
import { normalizeEnumTranslation } from "@utils/normalizeEnumTranslation";
import { StyledConatinerAttribute } from "./styles";

const renderCompanyVerification = (values: ICompanyEntry) => (
  <>
    <Stack width="100%" direction="column" gap={tokens.spacing.s200}>
      <BoxAttribute
        direction="column"
        label="Razón social:"
        value={values.companyName}
      />
    </Stack>
    <Grid
      width="100%"
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap={tokens.spacing.s200}
    >
      <BoxAttribute
        direction="column"
        label="Nombre comercial o alias:"
        value={values.companyNameCommercial}
      />
      <BoxAttribute
        direction="column"
        label="País de residencia fiscal:"
        value={values.companyCountry}
      />
      <BoxAttribute
        direction="column"
        label="Identificación:"
        value={values.companyNumberIdent}
      />
      <BoxAttribute
        direction="column"
        label="Dirección de la sede:"
        value={values.companyAddressRes}
      />
    </Grid>
  </>
);

const renderGeneralinfoVerification = (values: IGeneralInformationEntry) => (
  <>
    <Grid
      width="100%"
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap={tokens.spacing.s200}
    >
      <BoxAttribute
        direction="column"
        label="Nombre de nómina:"
        value={values.namePayroll}
      />
      <BoxAttribute
        direction="column"
        label="Tipo de nómina de convenio:"
        value={normalizeEnumTranslation(values.typePayroll)?.name}
      />
      <BoxAttribute
        direction="column"
        label="Fuentes de ingreso:"
        value={values.sourcesOfIncome}
      />
      <BoxAttribute
        direction="column"
        label="Días para determinar la fecha de aplicación:"
        value={values.applicationDaysPayroll}
      />
    </Grid>
  </>
);

const renderRegularVerification = (values: IOrdinaryCyclesEntry[]) => (
  <StyledConatinerAttribute>
    {values && values.length > 0 && (
      <Grid
        key={values[0].cycleId}
        width="100%"
        templateColumns={columnsAttribute(values as IEntry[])}
        templateRows={rowsAttribute(values as IEntry[])}
        gap={tokens.spacing.s200}
      >
        {values.map((item) => (
          <>
            <BoxAttribute
              key={item.cycleId}
              direction="column"
              label={`${item.cycleId} ${item.nameCycle}`}
              value={item.periodicity}
            />
          </>
        ))}
      </Grid>
    )}
  </StyledConatinerAttribute>
);

const renderExtraordinaryVerification = (
  values: IExtraordinaryCyclesEntry[],
) => (
  <StyledConatinerAttribute>
    {values && values.length > 0 && (
      <Grid
        key={values[0].id}
        width="100%"
        templateColumns={columnsAttribute(values as IEntry[])}
        templateRows={rowsAttribute(values as IEntry[])}
        gap={tokens.spacing.s200}
      >
        {values.map((item) => (
          <BoxAttribute
            key={item.id}
            direction="column"
            label={item.nameCycle}
            value={item.typePayment}
          />
        ))}
      </Grid>
    )}
  </StyledConatinerAttribute>
);

export {
  renderCompanyVerification,
  renderGeneralinfoVerification,
  renderRegularVerification,
  renderExtraordinaryVerification,
};
