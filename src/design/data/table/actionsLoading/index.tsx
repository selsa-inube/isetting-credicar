import { SkeletonLine, Td } from "@inubekit/inubekit";

const ActionsLoading = (numberActions: number) => {
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

export { ActionsLoading };
