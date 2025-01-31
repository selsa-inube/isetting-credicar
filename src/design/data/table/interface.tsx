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

import { IAction, IEntry, ITitle } from "./types";
import { WidthColmnsData } from "./widthColumns";
import { ShowActionTitle } from "./showActionTitle";
import { ShowAction } from "./showAction";
import { DataLoading } from "./dataLoading";

interface ITableUI {
  actions: IAction[];
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
  mediaActionOpen: boolean;
  numberActions: number;
  TitleColumns: ITitle[];
}

const TableUI = (props: ITableUI) => {
  const {
    actions,
    entries,
    filteredEntries,
    firstEntryInPage,
    isLoading,
    lastEntryInPage,
    pageLength,
    titles,
    widthPercentageTotalColumns,
    columnWidths,
    mediaActionOpen,
    numberActions,
    TitleColumns,
    goToEndPage,
    goToFirstPage,
    nextPage,
    prevPage,
  } = props;

  return (
    <Table tableLayout={mediaActionOpen ? "auto" : "fixed"}>
      <Colgroup>
        {WidthColmnsData(
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
          {ShowActionTitle(numberActions, mediaActionOpen)}
        </Tr>
      </Thead>
      <Tbody>
        {isLoading ? (
          DataLoading(TitleColumns, numberActions)
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
                  {ShowAction(actions, entry, mediaActionOpen)}
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
