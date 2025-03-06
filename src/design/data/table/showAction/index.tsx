import { Td } from "@inubekit/inubekit";
import { IAction, IEntry } from "@design/data/table/types";
import { ActionMobile } from "@design/data/table/actionMobile";

const ShowAction = (
  actionContent: IAction[],
  entry: IEntry,
  mediaQuery: boolean,
) => {
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
};

export { ShowAction };
