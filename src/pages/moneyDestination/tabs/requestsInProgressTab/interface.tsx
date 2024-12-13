import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { Input } from "@inubekit/input";

import { tokens } from "@design/tokens";
import { Table } from "@components/data/Table";
import { dataRequestsInProgress } from "@mocks/moneydestination/requestsInProgress.mock";
import { StyledContainer } from "./styles";
import { actions, breakPoints, titles } from "./config/table.config";

interface IRequestsInProgressTabUI {
  loading: boolean;
  searchrequestProgress: string;
  onSearchrequestProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RequestsInProgressTabUI(props: IRequestsInProgressTabUI) {
  const { searchrequestProgress, loading, onSearchrequestProgress } = props;

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
            justifyContent={smallScreen ? "center" : "start"}
            direction={smallScreen ? "column" : "row"}
            gap={
              smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s0}`
            }
          >
            <Stack justifyContent="center">
              <Input
                name="searchrequestProgress"
                id="searchrequestProgress"
                placeholder="Palabra clave..."
                type="search"
                size="compact"
                value={searchrequestProgress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onSearchrequestProgress(e)
                }
              />
            </Stack>
          </Stack>

          <Table
            id="portal"
            titles={titles}
            entries={dataRequestsInProgress}
            actions={actions}
            breakpoints={breakPoints}
            filter={searchrequestProgress}
            isLoading={loading}
            columnWidths={[10, 64, 10]}
          />
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { RequestsInProgressTabUI };
