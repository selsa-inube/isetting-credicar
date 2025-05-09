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
  {
    id: 3,
    number: 3,
    name: "Ciclos de pago ordinario",
    description: "Registra los ciclos de pago ordinarios.",
  },
  {
    id: 4,
    number: 4,
    name: "Ciclos de pago extraordinario",
    description: "Registra los ciclos de pago extraordinarios.",
  },
  {
    id: 5,
    number: 5,
    name: "Verificación",
    description: "Confirma la información diligenciada en pasos anteriores.",
  },
];

export { addPayrollAgreementSteps };
