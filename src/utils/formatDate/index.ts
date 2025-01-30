const formatDate = (date: Date) => {
  const dateString = date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const [day, month, year] = dateString.split("/");

  return `${year}-${month}-${day}`;
};

export { formatDate };
