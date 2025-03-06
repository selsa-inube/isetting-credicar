import { SkeletonLine, Td, Tr } from "@inubekit/inubekit";

import { ITitle } from "@design/data/table/types";
import { ActionsLoading } from "../actionsLoading";

const DataLoading = (titleColumns: ITitle[], numberActions: number) => {
  const rowsLoading = [];
  for (let rows = 0; rows < 4; rows++) {
    rowsLoading.push(
      <Tr key={rows}>
        {titleColumns.map((title) => (
          <Td key={`e-${title.id}`}>
            <SkeletonLine animated />
          </Td>
        ))}
        {ActionsLoading(numberActions)}
      </Tr>,
    );
  }
  return rowsLoading;
};

export { DataLoading };
