import { Input, Stack, useMediaQuery } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

import {
  actionsConfig,
  breakPoints,
  titles,
} from "@config/moneyDestination/requestsInProgressTab/table";

import { IEntry } from "@design/data/table/types";
import { Table } from "@design/data/table";
import { StyledContainer } from "./styles";

interface IRequestsInProgressTabUI {
  entries: IEntry[];
  loading: boolean;
  searchrequestProgress: string;
  setEntryCanceled: (value: string | number) => void;
  onSearchrequestProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RequestsInProgressTabUI(props: IRequestsInProgressTabUI) {
  const {
    entries,
    searchrequestProgress,
    loading,
    setEntryCanceled,
    onSearchrequestProgress,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 690px)");
  const widthFirstColumn = smallScreen ? 60 : 10;

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
            entries={entries}
            actions={actionsConfig(setEntryCanceled)}
            breakpoints={breakPoints}
            filter={searchrequestProgress}
            isLoading={loading}
            columnWidths={[widthFirstColumn, 55, 23]}
            pageLength={8}
          />
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { RequestsInProgressTabUI };
