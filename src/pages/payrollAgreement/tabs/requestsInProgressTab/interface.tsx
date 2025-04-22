import { Input, inube, Stack } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { IRequestsInProgressTabUI } from "@ptypes/payrollAgreement/requestInProgTab/IRequestsInProgressTabUI";
import {
  actionsConfig,
  titles,
  breakPoints,
} from "@config/payrollAgreement/requestsInProgressTab/table";
import { Table } from "@design/data/table";
import { BoxContainer } from "@design/layout/boxContainer";

const RequestsInProgressTabUI = (props: IRequestsInProgressTabUI) => {
  const {
    entries,
    searchrequestProgress,
    loading,
    widthFirstColumn,
    smallScreen,
    setEntryCanceled,
    onSearchrequestProgress,
  } = props;

  return (
    <BoxContainer
      backgroundColor={inube.palette.neutral.N0}
      boxSizing="initial"
      borderColor={inube.palette.neutral.N40}
      borderRadius={tokens.spacing.s100}
      width="auto"
      padding={smallScreen ? `${tokens.spacing.s150}` : `${tokens.spacing.s0}`}
    >
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
            columnWidths={
              smallScreen ? [10, 20, 23] : [widthFirstColumn, 55, 23]
            }
            pageLength={8}
          />
        </Stack>
      </Stack>
    </BoxContainer>
  );
};

export { RequestsInProgressTabUI };
