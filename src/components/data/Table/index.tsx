import { useMemo, useState } from "react";
import { Stack } from "@inubekit/stack";

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
  widthFirstColumn?: number;
  widthPercentageOtherColumns?: number;
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
    widthFirstColumn,
    widthPercentageOtherColumns,
  } = props;

  const filteredEntries = useMemo(() => {
    const titlesId = titles.map((title) => title.id.toString().toLowerCase());

    return entries.filter((entry) => {
      for (const attribute in entry) {
        const attributeValue = entry[attribute]?.toString().toLowerCase();
        const statusValue = entry?.[attribute]?.props?.status
          ?.toString()
          .toLowerCase();

        if (
          titlesId.includes(attribute.toLowerCase()) &&
          (attributeValue?.includes(filter.toLowerCase()) ||
            statusValue?.includes(filter.toLowerCase()))
        ) {
          return true;
        }
      }
      return false;
    });
  }, [entries, filter, titles]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredEntries.length / pageLength);

  const firstEntryInPage = (currentPage - 1) * pageLength;

  const lastEntryInPage = Math.min(
    firstEntryInPage + pageLength,
    filteredEntries.length,
  );

  function getPageEntries() {
    return filteredEntries.slice(firstEntryInPage, lastEntryInPage);
  }

  function goToFirstPage() {
    setCurrentPage(1);
  }

  function goToEndPage() {
    setCurrentPage(totalPages);
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <StyledContainerTable
      id={id}
      $pageLength={pageLength}
      $entriesLength={entries.length}
    >
      <Stack direction="column">
        <TableUI
          titles={titles}
          actions={actions}
          entries={getPageEntries()}
          isLoading={isLoading}
          breakpoints={breakpoints}
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
          widthFirstColumn={widthFirstColumn}
          widthPercentageOtherColumns={widthPercentageOtherColumns}
        />
      </Stack>
    </StyledContainerTable>
  );
};

export { Table };
export type { ITable };
