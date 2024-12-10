import { SkeletonLine } from "@inubekit/skeleton";
import { Col, Td, Th, Tr } from "@inubekit/table";
import { IAction, IEntry, ITitle } from "./types";
import { ActionMobile } from "./ActionMobile";

const actionsLoading = (numberActions: number) => {
  const cellsOfActionsLoading = [];
  for (let cellAction = 0; cellAction < numberActions; cellAction++) {
    cellsOfActionsLoading.push(
      <Td key={cellAction}>
        <SkeletonLine animated />
      </Td>,
    );
  }
  return cellsOfActionsLoading;
};

const dataLoading = (titleColumns: ITitle[], numberActions: number) => {
  const rowsLoading = [];
  for (let rows = 0; rows < 4; rows++) {
    rowsLoading.push(
      <Tr key={rows}>
        {titleColumns.map((title) => (
          <Td key={`e-${title.id}`}>
            <SkeletonLine animated />
          </Td>
        ))}
        {actionsLoading(numberActions)}
      </Tr>,
    );
  }
  return rowsLoading;
};

function showActionTitle(numberActions: number, mediaQuery: boolean) {
  return (
    <Th colSpan={mediaQuery ? 1 : numberActions} action={true}>
      Acciones
    </Th>
  );
}

function showAction(
  actionContent: IAction[],
  entry: IEntry,
  mediaQuery: boolean,
) {
  return mediaQuery ? (
    <>
      <Td type="custom" align="center">
        <ActionMobile actions={actionContent} entry={entry} />
      </Td>
    </>
  ) : (
    <>
      {actionContent.map((action) => (
        <Td type="custom" align="center" key={`${entry.id}-${action.id}`}>
          {action.content(entry)}
        </Td>
      ))}
    </>
  );
}

const widthColmnsData = (
  titleColumns: ITitle[],
  widthPercentageTotalColumns?: number,
  widthFirstColumn?: number,
  widthPercentageOtherColumns?: number,
) => {
  const calculateSize = (totalWidth: number, length: number) =>
    totalWidth / length;

  const sizeWithFirstColumn = calculateSize(
    widthPercentageTotalColumns ?? 80,
    titleColumns.length,
  );
  const sizeWithoutFirstColumn = calculateSize(
    widthPercentageTotalColumns ?? widthPercentageOtherColumns ?? 80,
    titleColumns.length - 1,
  );

  const copyTitleColumns = [...titleColumns];
  copyTitleColumns.shift();

  return widthFirstColumn ? (
    <>
      <Col width={`${widthFirstColumn}%`} />
      {copyTitleColumns.map((title) => (
        <Col key={title.id} width={`${sizeWithoutFirstColumn}%`} />
      ))}
    </>
  ) : (
    <>
      {titleColumns.map((title) => (
        <Col key={title.id} width={`${sizeWithFirstColumn}%`} />
      ))}
    </>
  );
};

export { dataLoading, showActionTitle, widthColmnsData, showAction };
