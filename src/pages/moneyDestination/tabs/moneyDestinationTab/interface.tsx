import { MdAdd } from "react-icons/md";
import { Stack } from "@inubekit/inubekit";
import { useMediaQuery } from "@inubekit/hooks";
import { Input } from "@inubekit/input";
import { Button } from "@inubekit/button";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { Table } from "@design/data/table";
import { IEntry } from "@design/data/table/types";
import {
  actionsConfig,
  breakPoints,
  titles,
} from "@config/moneyDestination/moneyDestinationTab/table";
import { StyledContainer } from "./styles";

interface IMoneyDestinationTabUI {
  entries: IEntry[];
  loading: boolean;
  searchMoneyDestination: string;
  onSearchMoneyDestination: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEntryDeleted: (value: string | number) => void;
}

function MoneyDestinationTabUI(props: IMoneyDestinationTabUI) {
  const {
    searchMoneyDestination,
    entries,
    loading,
    onSearchMoneyDestination,
    setEntryDeleted,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 690px)");
  const widthFirstColumn = smallScreen ? 64 : 25;

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
        <Stack gap={tokens.spacing.s400} direction="column">
          <Stack
            justifyContent={smallScreen ? "center" : "space-between"}
            direction={smallScreen ? "column" : "row"}
            gap={
              smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s0}`
            }
          >
            <Stack justifyContent="center">
              <Input
                name="searchMoneyDestination"
                id="searchMoneyDestination"
                placeholder="Palabra clave..."
                type="search"
                size="compact"
                value={searchMoneyDestination}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onSearchMoneyDestination(e)
                }
              />
            </Stack>
            <Button
              spacing="wide"
              appearance={ComponentAppearance.PRIMARY}
              variant="filled"
              iconBefore={<MdAdd />}
              type="link"
              path="/money-destination/add-destination"
            >
              Agregar destino
            </Button>
          </Stack>

          <Table
            id="portal"
            titles={titles}
            entries={entries}
            actions={actionsConfig(setEntryDeleted)}
            breakpoints={breakPoints}
            filter={searchMoneyDestination}
            isLoading={loading}
            columnWidths={[widthFirstColumn, 55]}
          />
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { MoneyDestinationTabUI };
