const statusRequest = [
  { status: "Processed", name: "Procesada", appearance: "success" },
  { status: "Cancelled", name: "Cancelada", appearance: "danger" },
  { status: "Rejected", name: "Rechazada", appearance: "danger" },
  { status: "WithErrors", name: "Con errores", appearance: "danger" },
  { status: "Pending", name: "Pendiente", appearance: "warning" },
  { status: "Undefined", name: "No Definido", appearance: "gray" },
];

const normalizeStatusByName = (status: string) =>
  statusRequest.find((element) => element.name === status);

export { statusRequest, normalizeStatusByName };
