import { MdAdd } from "react-icons/md";
import { Input } from "@inubekit/input";
import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Button } from "@inubekit/button";

import { Table } from "@components/data/Table";
import { tokens } from "@design/tokens";
import { Title } from "@components/data/Title";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { dataCreditLines } from "@mocks/creditLines/creditLines.mock";
import { StyledContent } from "./styles";
import { crumbsCreditLines } from "./config/navigation";
import { actions, breakPoints, titles } from "./config/table.config";

interface ICreditLinesUI {
  loading: boolean;
  searchCreditLines: string;
  onSearchCreditLines: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CreditLinesUI(props: ICreditLinesUI) {
  const { loading, searchCreditLines, onSearchCreditLines } = props;

  const smallScreen = useMediaQuery("(max-width: 990px)");
  const widthFirstColumn = smallScreen ? 64 : 25;

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${tokens.spacing.s200}`
          : `${tokens.spacing.s400} ${tokens.spacing.s800}`
      }
    >
      <Stack gap={tokens.spacing.s600} direction="column">
        <Stack gap={tokens.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsCreditLines} />
          <Title
            title="Líneas de crédito"
            description="Registra los medios de pago"
            sizeTitle="large"
          />
        </Stack>

        <StyledContent $smallScreen={smallScreen}>
          <Stack
            width="-webkit-fill-available"
            direction="column"
            gap={tokens.spacing.s250}
            padding={
              smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`
            }
            justifyContent={smallScreen ? "center" : "normal"}
          >
            <Stack gap={tokens.spacing.s400} direction="column">
              <Stack
                justifyContent={smallScreen ? "center" : "space-between"}
                direction={smallScreen ? "column" : "row"}
                gap={
                  smallScreen
                    ? `${tokens.spacing.s150}`
                    : `${tokens.spacing.s0}`
                }
              >
                <Stack justifyContent="center">
                  <Input
                    name="searchCreditLines"
                    id="searchCreditLines"
                    placeholder="Palabra clave..."
                    type="search"
                    size="compact"
                    value={searchCreditLines}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onSearchCreditLines(e)
                    }
                  />
                </Stack>
                <Button
                  spacing="wide"
                  appearance={ComponentAppearance.PRIMARY}
                  variant="filled"
                  iconBefore={<MdAdd />}
                  type="link"
                  path="/credit-lines/add-credit-line"
                >
                  Agregar línea de crédito
                </Button>
              </Stack>

              <Table
                id="portal"
                titles={titles}
                entries={dataCreditLines}
                actions={actions}
                breakpoints={breakPoints}
                filter={searchCreditLines}
                isLoading={loading}
                columnWidths={[widthFirstColumn, 55]}
              />
            </Stack>
          </Stack>
        </StyledContent>
      </Stack>
    </Stack>
  );
}

export { CreditLinesUI };
