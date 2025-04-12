import { MdAdd } from "react-icons/md";
import { Stack, useMediaQuery, Input, Button, Text } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { Table } from "@design/data/table";
import { IEntry } from "@design/data/table/types";
import {
  actionsConfig,
  breakPoints,
  titles,
} from "@config/payrollAgreement/payrollAgreementTab/table";
import { StyledContainer } from "./styles";

interface IpayrollAgreementTabUI {
  entries: IEntry[];
  loading: boolean;
  searchPayrollAgreement: string;
  setEntryDeleted: (id: string | number) => void;
  onSearchPayrollAgreement: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PayrollAgreementTabUI = (props: IpayrollAgreementTabUI) => {
  const {
    searchPayrollAgreement,
    entries,
    loading,
    setEntryDeleted,
    onSearchPayrollAgreement,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 690px)");

  return (
    <StyledContainer $smallScreen={smallScreen}>
      <Stack
        width="-webkit-fill-available"
        direction="column"
        gap={tokens.spacing.s250}
        padding={
          smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`
        }
        justifyContent={smallScreen ? "center" : "normal"}
      >
        <Stack gap={tokens.spacing.s200} direction="column">
          <Stack
            justifyContent={smallScreen ? "center" : "space-between"}
            direction={smallScreen ? "column-reverse" : "row"}
            gap={
              smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s0}`
            }
          >
            <Stack justifyContent="center">
              <Input
                name="searchPayrollAgreement"
                label="Buscar"
                id="searchPayrollAgreement"
                placeholder="Palabra clave..."
                type="search"
                size="compact"
                value={searchPayrollAgreement}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onSearchPayrollAgreement(e)
                }
              />
            </Stack>
            <Button
              spacing="wide"
              appearance={ComponentAppearance.PRIMARY}
              variant="filled"
              iconBefore={<MdAdd />}
              type="link"
              path="/payroll-agreement/add-payroll-agreement"
              fullwidth={smallScreen}
            >
              Agregar nómina
            </Button>
          </Stack>

          <Stack>
            <Text type="title" size="medium" appearance="dark">
              Consulta de las nóminas de convenio disponibles
            </Text>
          </Stack>

          <Table
            id="portal"
            titles={titles}
            entries={entries}
            actions={actionsConfig(setEntryDeleted)}
            breakpoints={breakPoints}
            filter={searchPayrollAgreement}
            isLoading={loading}
            columnWidths={[80]}
            pageLength={8}
            emptyDataMessage="Aún no hay nóminas de convenio registradas, presiona “+ Agregar nómina” para empezar."
          />
        </Stack>
      </Stack>
    </StyledContainer>
  );
};

export { PayrollAgreementTabUI };
