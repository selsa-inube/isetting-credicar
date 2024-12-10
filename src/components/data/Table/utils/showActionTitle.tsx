import { Th } from "@inubekit/table";

function showActionTitle(numberActions: number, mediaQuery: boolean) {
  return (
    <Th colSpan={mediaQuery ? 1 : numberActions} action={true}>
      Acciones
    </Th>
  );
}

export { showActionTitle };
