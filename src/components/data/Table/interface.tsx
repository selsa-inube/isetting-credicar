import { useMemo } from "react";
import { useMediaQueries, useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";
import {
  Colgroup,
  Pagination,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@inubekit/table";
import { dataLoading } from "./utils/dataLoading";
import { IAction, IBreakpoint, IEntry, ITitle } from "./types";
import { showActionTitle } from "./utils/showActionTitle";
import { showAction } from "./utils/showAction";
import { widthColmnsData } from "./utils/widthColumns";

interface ITableUI {
  actions: IAction[];
  breakpoints: IBreakpoint[];
  entries: IEntry[];
  filteredEntries: IEntry[];
  firstEntryInPage: number;
  isLoading: boolean;
  lastEntryInPage: number;
  pageLength: number;
  titles: ITitle[];
  mobileTitle?: string;
  widthPercentageTotalColumns?: number;
  columnWidths?: number[];
  goToEndPage: () => void;
  goToFirstPage: () => void;
  nextPage: () => void;
  prevPage: () => void;
}

const TableUI = (props: ITableUI) => {
  const {
    actions,
    breakpoints,
    entries,
    filteredEntries,
    firstEntryInPage,
    isLoading,
    lastEntryInPage,
    pageLength,
    titles,
    widthPercentageTotalColumns,
    columnWidths,
    goToEndPage,
    goToFirstPage,
    nextPage,
    prevPage,
  } = props;

  const mediaActionOpen = useMediaQuery("(max-width: 1200px)");

  const queriesArray = useMemo(
    () => breakpoints?.map((breakpoint) => breakpoint.breakpoint),
    [breakpoints],
  );

  const media = useMediaQueries(queriesArray || []);

  function findCurrentMediaQuery(currentMediaQuery: Record<string, boolean>) {
    const lastIndexMedia = Object.values(currentMediaQuery).lastIndexOf(true);
    return lastIndexMedia !== -1 ? lastIndexMedia : 0;
  }

  function priorityColumns(titles: ITitle[], numColumns: number) {
    const maxPriorityToDisplay = numColumns - 1;
    return titles.filter((title) => title.priority <= maxPriorityToDisplay);
  }

  function totalTitleColumns(
    titles: ITitle[],
    breakpoints: IBreakpoint[],
    media: Record<string, boolean>,
  ) {
    const numColumns = breakpoints[findCurrentMediaQuery(media)].totalColumns;

    if (numColumns >= titles.length) return titles;

    return priorityColumns(titles, numColumns);
  }

  const TitleColumns = useMemo(
    () => totalTitleColumns(titles, breakpoints, media),
    [titles, breakpoints, media],
  );

  const numberActions = actions ? actions.length : 1;

  return (
    <Table>
      <Colgroup>
        {widthColmnsData(
          TitleColumns,
          widthPercentageTotalColumns,
          columnWidths,
        )}
      </Colgroup>

      <Thead>
        <Tr border="bottom">
          {TitleColumns.map((title, index) => (
            <Th key={index} align="center">
              {title.titleName}
            </Th>
          ))}
          {showActionTitle(numberActions, mediaActionOpen)}
        </Tr>
      </Thead>
      <Tbody>
        {isLoading ? (
          dataLoading(TitleColumns, numberActions)
        ) : (
          <>
            {entries.length > 0 ? (
              entries.map((entry, index) => (
                <Tr key={index} zebra={index % 2 === 1}>
                  {TitleColumns.map((title) => (
                    <Td
                      key={`e-${entry[title.id]}`}
                      align={entry.action ? "center" : "left"}
                      type="custom"
                    >
                      {typeof entry[title.id] !== "string" ? (
                        entry[title.id]
                      ) : (
                        <Text type="body" size="small" ellipsis>
                          {entry[title.id]}
                        </Text>
                      )}
                    </Td>
                  ))}
                  {showAction(actions, entry, mediaActionOpen)}
                </Tr>
              ))
            ) : (
              <Tr>
                <Td type="custom" colSpan={titles.length + actions.length}>
                  <Text type="body" size="small" appearance="dark" ellipsis>
                    No se encontró información
                  </Text>
                </Td>
              </Tr>
            )}
          </>
        )}
      </Tbody>

      {filteredEntries.length > pageLength && (
        <Tfoot>
          <Tr border="bottom">
            <Td
              colSpan={
                mediaActionOpen ? titles.length : titles.length + actions.length
              }
              type="custom"
              align="left"
            >
              <Pagination
                firstEntryInPage={firstEntryInPage}
                lastEntryInPage={lastEntryInPage}
                totalRecords={filteredEntries.length}
                handleStartPage={goToFirstPage}
                handlePrevPage={prevPage}
                handleNextPage={nextPage}
                handleEndPage={goToEndPage}
              />
            </Td>
          </Tr>
        </Tfoot>
      )}
    </Table>
  );
};

export { TableUI };
