import { lastDayMonth } from "../lastDayMonth";

const getLastDayOfMonth = (paydays: string[], month: number): number[] => {
  return paydays
    .filter((payday) => payday === "Ultimo día del mes")
    .map(() => lastDayMonth(month));
};

export { getLastDayOfMonth };
