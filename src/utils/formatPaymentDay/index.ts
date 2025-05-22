import { monthNames } from "@config/monthNames";
import { addLeadingZero } from "../addLeadingZero";

const formatPaymentDay = (payday: string) => {
  const [month, day] = payday.split("-");

  const monthIndex = monthNames.indexOf(month);
  const formatMonth = addLeadingZero(monthIndex + 1);
  const formatDay = addLeadingZero(Number(day));

  return `${formatMonth}${formatDay}`;
};

export { formatPaymentDay };
