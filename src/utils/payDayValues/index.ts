const payDayValues = (periodicity: string, payDay: string) => {
  const everyTen = Number(payDay) + 10;

  switch (periodicity) {
    case "Semanal":
      return payDay;
    case "Cada 10 días":
      return `${payDay}, ${everyTen}, ${Number(everyTen) + 10}`;
    case "Quincenal":
      return `${payDay}, ${Number(payDay) + 15}`;
    case "Mensual":
      return payDay;
    case "Bimensual":
      return payDay;
    default:
      return payDay;
  }
};

export { payDayValues };
