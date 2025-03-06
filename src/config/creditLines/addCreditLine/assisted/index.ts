import { IAssistedStep } from "@inubekit/inubekit";

const addCreditLinesSteps: IAssistedStep[] = [
  {
    id: 1,
    number: 1,
    name: "Datos generales",
    description: "Datos generales de la línea de crédito.",
  },
  {
    id: 2,
    number: 2,
    name: "Opciones para el prospecto de crédito",
    description: "Opciones para la creación del prospecto de crédito.",
  },
  {
    id: 3,
    number: 3,
    name: "Monto máximo",
    description: "Configura las decisiones de monto máximo.",
  },
  {
    id: 4,
    number: 4,
    name: "Verificación",
    description: "Confirma la información diligenciada en pasos anteriores.",
  },
];

export { addCreditLinesSteps };
