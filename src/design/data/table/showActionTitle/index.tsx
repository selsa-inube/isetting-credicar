import { Th } from "@inubekit/inubekit";

const ShowActionTitle = (numberActions: number, mediaQuery: boolean) => {
  return (
    <Th colSpan={mediaQuery ? 1 : numberActions} action={true}>
      Acciones
    </Th>
  );
};

export { ShowActionTitle };
