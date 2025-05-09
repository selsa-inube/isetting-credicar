import { Th } from "@inubekit/inubekit";
import { IShowActionTitle } from "@ptypes/design/IShowActionTitle";

const ShowActionTitle = (props: IShowActionTitle) => {
  const { numberActions, mediaQuery, actionTitle, title } = props;
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
