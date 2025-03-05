import { IAssistedStep } from "@inubekit/inubekit";

const addDestinationStepsConfig = (nameDescription: string) => {
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
      description: `Agregar decisión para ${nameDescription}.`,
    },
    {
      id: 3,
      number: 3,
      name: "Verificación",
      description: "Confirma la información diligenciada en pasos anteriores.",
    },
  ];
  return addDestinationSteps;
};

export { addDestinationStepsConfig };
