import { useMemo, useState } from "react";
import { useMediaQueries, useMediaQuery } from "@inubekit/inubekit";
import { IAction, IBreakpoint, IEntry, ITitle } from "@design/data/table/types";

const useTable = (
  entries: IEntry[],
  pageLength: number,
  titles: ITitle[],
  breakpoints: IBreakpoint[],
  actions: IAction[],
  filter: string,
) => {
  const [currentPage, setCurrentPage] = useState(1);

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

  const screenTablet = useMediaQuery("(max-width: 1200px)");
  const numberActions = actions ? actions.length : 1;

  return {
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
  };
};

export { useTable };
