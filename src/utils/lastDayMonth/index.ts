const lastDayMonth = (month: number) => {
  const currentYear = new Date().getFullYear();
  const lastDay = new Date(currentYear, month + 1, 0);
  return lastDay.getDate();
};

export { lastDayMonth };
