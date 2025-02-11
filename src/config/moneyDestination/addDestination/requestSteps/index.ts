import { IRequestSteps } from "@design/feedback/RequestProcess/types";

const requestStepsInitial: IRequestSteps[] = [
  { name: "Solicitud radicada", status: "pending" },
  { name: "Agregando", status: "pending" },
  { name: "Destino agregado", status: "pending" },
];

export { requestStepsInitial };
