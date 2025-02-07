const requestStatusMessage = (requestNumber: string, responsible: string) => ({
  title: "Estado de la solicitud",
  description: `Hemos recibido tu solicitud, el tramite se procesar, con el número de solicitud ${requestNumber}.
  
  Ten encuenta que este proceso va hacer gestionado por ${responsible}, puede tardar un tiempo mientras se gestiona la aprobación.`,
  actionText: "Enterado",
});

export { requestStatusMessage };
