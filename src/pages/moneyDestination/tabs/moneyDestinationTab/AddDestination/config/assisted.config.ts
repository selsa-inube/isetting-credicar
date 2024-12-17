import { IAssistedStep } from "@inubekit/assisted";

const addDestinationSteps: IAssistedStep[] = [
  {
    id: 1,
    number: 1,
    name: "Datos generales",
    description: "Selecciona o agrega un nuevo destino.",
  },
  {
    id: 2,
    number: 2,
    name: "Línea de crédito",
    description: "",
  },
  {
    id: 3,
    number: 3,
    name: "Verificación",
    description: "Confirma la información diligenciada en pasos anteriores.",
  },
];

export { addDestinationSteps };
