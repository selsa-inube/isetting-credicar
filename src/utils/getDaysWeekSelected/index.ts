import { daysWeek } from "@config/payrollAgreement/payrollAgreementTab/generic/daysWeek";

const getDaysWeekSelected = (paydays: string[]): string[] => {
  return paydays.filter((payday) => daysWeek.includes(payday));
};

export { getDaysWeekSelected };
