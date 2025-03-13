import { IAssistedStep } from "@inubekit/inubekit";

const addPayrollAgreementSteps: IAssistedStep[] = [
  {
    id: 1,
    number: 1,
    name: "Seleccionar empresa con convenio",
    description: "Selecciona o agrega la empresa con convenio.",
  },
  {
    id: 2,
    number: 2,
    name: "Informacion general",
    description: "Registra los datos de nóminas de convenio de descuento.",
  },
];

export { addPayrollAgreementSteps };
