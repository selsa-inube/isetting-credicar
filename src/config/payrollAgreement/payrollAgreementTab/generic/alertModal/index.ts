const alertModal = (companyName: string) => {
  return {
    title: "Alerta",
    description: `Encontramos una empresa con convenio ya registrada con el número de identificación que escribiste, se trata de: ${companyName}.`,
    actionText: "Entendido",
    moreDetails:
      "No es posible registrarla de nuevo, selecciónala en la lista.",
  };
};

export { alertModal };
