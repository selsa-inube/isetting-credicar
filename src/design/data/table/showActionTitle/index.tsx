import { Th } from "@inubekit/inubekit";
import { IAction } from "../types";

const ShowActionTitle = (
  numberActions: number,
  mediaQuery: boolean,
  actionTitle: IAction[],
  title?: boolean,
) => {
  return title ? (
    actionTitle.map((action) => (
      <Th key={`action-${action.id}`} action={true}>
        {action.actionName}
      </Th>
    ))
  ) : (
    <Th colSpan={mediaQuery ? 1 : numberActions} action={true}>
      Acciones
    </Th>
  );
};

export { ShowActionTitle };
