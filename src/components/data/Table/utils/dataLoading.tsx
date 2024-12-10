import { SkeletonLine } from "@inubekit/skeleton";
import { Td, Tr } from "@inubekit/table";
import { ITitle } from "../types";

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

export { dataLoading };
