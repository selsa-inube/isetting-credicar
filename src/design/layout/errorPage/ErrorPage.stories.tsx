import { Meta } from "@storybook/react";
import { errorCodes } from "@config/errorCodes";
import { ErrorPage, IErrorPage } from "./index";

const meta: Meta<typeof ErrorPage> = {
  title: "layout/Error",
  component: ErrorPage,
};

export const Default = (args: IErrorPage) => <ErrorPage {...args} />;

Default.args = {
  errorCode: 400,
  DetailsErrors: errorCodes[400],
  heading: "¡Ups! Algo salió mal...",
  description:
    "El servicio no se encuentra disponible en el momento. Por favor intenta de nuevo más tarde.",
};

export default meta;
