import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { lastDayMonth } from "../lastDayMonth";
import { getUniquePaydays } from "../getUniqueDays";
import { getDatesFromDaysWeek } from "../getDatesFromDaysWeek";
import { getDaysWeekSelected } from "../getDaysWeekSelected";
import { getDaysInNumber } from "../getDaysInNumber";
import { getLastDayOfMonth } from "../getLastDayOfMonth";

const generateExtraOrdPayDays = (
  regularPaymentCycles: IOrdinaryCyclesEntry[],
  month: number,
) => {
  const uniquePaydays = getUniquePaydays(regularPaymentCycles);
  const daysInNumber = getDaysInNumber(uniquePaydays);
  const daysWeekSelected = getDaysWeekSelected(uniquePaydays);
  const datesFromDaysWeek = getDatesFromDaysWeek(daysWeekSelected, month);
  const lastDayOfMonth = getLastDayOfMonth(uniquePaydays, month);
  const daysNotInFebruary = [29, 30];

  let days = [...daysInNumber, ...datesFromDaysWeek, ...lastDayOfMonth];

  if (month === 1) {
    const lastDayOfFebruary = lastDayMonth(month);
    days = days.map((day) =>
      daysNotInFebruary.includes(day) ? lastDayOfFebruary : day,
    );
  }

  const result = Array.from(new Set(days))
    .sort((a, b) => a - b)
    .map((day) => day.toString());

  return result;
};

export { generateExtraOrdPayDays };
