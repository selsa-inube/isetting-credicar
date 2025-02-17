const formatDateDecision = (value: string) => {
  const [year, month, day] = value.split("-");

  return `${year}-${month}-${day}T00:00:00Z`;
};
export { formatDateDecision };
