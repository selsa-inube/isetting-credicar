import { MdAdd } from "react-icons/md";
import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { Input } from "@inubekit/input";
import { Button } from "@inubekit/button";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { Table } from "@components/data/Table";
import { dataMoneyDestination } from "@mocks/moneydestination/destination.mock";
import { StyledContainer } from "./styles";
import { actions, breakPoints, titles } from "./config/table.config";

interface IMoneyDestinationTabUI {
  loading: boolean;
  searchMoneyDestination: string;
  onSearchMoneyDestination: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MoneyDestinationTabUI(props: IMoneyDestinationTabUI) {
  const { searchMoneyDestination, loading, onSearchMoneyDestination } = props;

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
            entries={dataMoneyDestination}
            actions={actions}
            breakpoints={breakPoints}
            filter={searchMoneyDestination}
            isLoading={loading}
            widthFirstColumn={smallScreen ? 64 : 25}
            widthPercentageOtherColumns={56}
          />
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { MoneyDestinationTabUI };
