const stateRequest = [
  { state: "Processed", name: "Procesada", appearance: "success" },
  { state: "Cancelled", name: "Cancelada", appearance: "danger" },
  { state: "Rejected", name: "Rechazada", appearance: "danger" },
  { state: "WithErrors", name: "Con errores", appearance: "danger" },
  { state: "Pending", name: "Pendiente", appearance: "warning" },
  { state: "Undefined", name: "No Definido", appearance: "gray" },
];

const normalizeStateByName = (requirement: string) =>
  stateRequest.find((element) => element.name === requirement);

export { stateRequest, normalizeStateByName };
