const requestStatusMessage = (responsible: string) => ({
  title: "Solicitud",
  description: `Este proceso será gestionado por ${responsible}, puede tardar algún tiempo mientras se gestiona la aprobación.`,
  actionText: "Enterado",
});

export { requestStatusMessage };
