const validateAndTrimString = (description: string): string => {
  return description.length > 20 ? description.slice(0, 20) : description;
};

export { validateAndTrimString };
