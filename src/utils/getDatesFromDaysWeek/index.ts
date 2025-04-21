import { generateDatesOfMonth } from "../generateDatesOfMonth";

const getDatesFromDaysWeek = (
  daysWeekSelected: string[],
  month: number,
): number[] => {
  return daysWeekSelected.flatMap((day) => generateDatesOfMonth(month, day));
};

export { getDatesFromDaysWeek };
