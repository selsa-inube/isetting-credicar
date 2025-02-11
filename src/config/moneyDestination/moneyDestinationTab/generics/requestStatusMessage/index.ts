const requestStatusMessage = (requestNumber: string, responsible: string) => ({
  title: "Estado de la solicitud",
  description: `Hemos recibido tu solicitud, el tramite se procesara con el número de solicitud ${requestNumber}.
  
  Ten encuenta que este proceso sera gestionado por ${responsible}, puede tardar un tiempo mientras se gestiona la aprobación.`,
  actionText: "Enterado",
});

export { requestStatusMessage };
