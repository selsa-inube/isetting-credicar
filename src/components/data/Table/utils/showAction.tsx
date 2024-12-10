import { Td } from "@inubekit/table";
import { IAction, IEntry } from "../types";
import { ActionMobile } from "../ActionMobile";

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

export { showAction };
