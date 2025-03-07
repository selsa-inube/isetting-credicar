import { Stack } from "@inubekit/inubekit";

import { useTable } from "@hooks/generic/useTable";
import { TableUI } from "./interface";
import { StyledContainerTable } from "./styles";
import { IAction, IBreakpoint, IEntry, ITitle } from "./types";

interface ITable {
  entries: IEntry[];
  id: string;
  isLoading: boolean;
  titles: ITitle[];
  actions: IAction[];
  breakpoints: IBreakpoint[];
  filter?: string;
  infoTitle?: string;
  mobileTitle?: string;
  pageLength?: number;
  widthPercentageTotalColumns?: number;
  columnWidths?: number[];
  emptyDataMessage?: string;
}

const Table = (props: ITable) => {
  const {
    id,
    titles,
    actions,
    entries,
    filter = "",
    isLoading,
    mobileTitle,
    pageLength = 4,
    breakpoints,
    widthPercentageTotalColumns,
    columnWidths,
    emptyDataMessage,
  } = props;

  const {
    mediaActionOpen,
    numberActions,
    TitleColumns,
    lastEntryInPage,
    filteredEntries,
    firstEntryInPage,
    screenTablet,
    getPageEntries,
    goToFirstPage,
    goToEndPage,
    nextPage,
    prevPage,
  } = useTable(entries, pageLength, titles, breakpoints, actions, filter);

  return (
    <StyledContainerTable
      id={id}
      $pageLength={pageLength}
      $entriesLength={entries.length}
      $isTablet={screenTablet}
    >
      <Stack direction="column">
        <TableUI
          titles={titles}
          actions={actions}
          entriesLength={entries.length}
          entries={getPageEntries()}
          isLoading={isLoading}
          mediaActionOpen={mediaActionOpen}
          numberActions={numberActions}
          TitleColumns={TitleColumns}
          mobileTitle={mobileTitle}
          pageLength={pageLength}
          firstEntryInPage={firstEntryInPage}
          lastEntryInPage={lastEntryInPage}
          goToFirstPage={goToFirstPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToEndPage={goToEndPage}
          filteredEntries={filteredEntries}
          widthPercentageTotalColumns={widthPercentageTotalColumns}
          columnWidths={columnWidths}
          emptyDataMessage={emptyDataMessage}
        />
      </Stack>
    </StyledContainerTable>
  );
};

export { Table };
export type { ITable };
