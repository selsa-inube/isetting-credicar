import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { daysWeek } from "@config/payrollAgreement/payrollAgreementTab/generic/daysWeek";
import { generateDatesOfMonth } from "../generateDatesOfMonth";

const generateExtraOrdPayDays = (
  regularPaymentCycles: IOrdinaryCyclesEntry[],
  month: number,
) => {
  const getUniquePaydays = (): string[] => {
    return Array.from(
      new Set(
        regularPaymentCycles.flatMap((cycle) =>
          cycle.payday.split(",").map((payday) => payday.trim()),
        ),
      ),
    );
  };

  const getDaysInNumber = (paydays: string[]): number[] => {
    return paydays
      .filter((payday) => !daysWeek.includes(payday))
      .map((day) => Number(day));
  };

  const getDaysWeekSelected = (paydays: string[]): string[] => {
    return paydays.filter((payday) => daysWeek.includes(payday));
  };

  const getDatesFromDaysWeek = (daysWeekSelected: string[]): number[] => {
    return daysWeekSelected.flatMap((day) => generateDatesOfMonth(month, day));
  };

  const uniquePaydays = getUniquePaydays();
  const daysInNumber = getDaysInNumber(uniquePaydays);
  const daysWeekSelected = getDaysWeekSelected(uniquePaydays);
  const datesFromDaysWeek = getDatesFromDaysWeek(daysWeekSelected);

  const result = Array.from(new Set([...daysInNumber, ...datesFromDaysWeek]))
    .sort((a, b) => a - b)
    .map((day) => day.toString());

  return result;
};

export { generateExtraOrdPayDays };
