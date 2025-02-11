const requestPendingModal = (requestNumber: string) => ({
  title: "Estado de la solicitud",
  description: `Hemos recibido la solicitud, el tramite se procesara con el número de solicitud ${requestNumber}. Verifique su solicitud en la pestaña solicitudes en tramite`,
  actionText: "Entendido",
});

export { requestPendingModal };
