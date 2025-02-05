const statusRequest = [
  { status: "Solicitud procesada", appearance: "success" },
  { status: "Solicitud cancelada", appearance: "danger" },
  { status: "Solicitud procesada con error", appearance: "danger" },
  { status: "Pendiente de aprobación", appearance: "warning" },
  { status: "En proceso de validación", appearance: "warning" },
  {
    status: "En proceso de complementación y validación",
    appearance: "warning",
  },
  { status: "Procesando solicitud", appearance: "warning" },
  { status: "Solicitud rechazada", appearance: "danger" },
];

export { statusRequest };
