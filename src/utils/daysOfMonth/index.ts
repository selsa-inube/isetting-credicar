const daysOfMonth = (month: number) => {
  const currentYear = new Date().getFullYear();
  const days = [];

  const dateInitial = new Date(currentYear, month, 1);

  while (dateInitial.getMonth() === month) {
    days.push(dateInitial.getDate());

    dateInitial.setDate(dateInitial.getDate() + 1);
  }
  return days;
};

export { daysOfMonth };
