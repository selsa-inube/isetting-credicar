import { daysWeek } from "@config/payrollAgreement/payrollAgreementTab/generic/daysWeek";

const generateDatesOfMonth = (month: number, day: string) => {
  const currentYear = new Date().getFullYear();
  const dates = [];

  const dateInitial = new Date(currentYear, month, 1);

  while (dateInitial.getMonth() === month) {
    if (dateInitial.getDay() === daysWeek.indexOf(day)) {
      dates.push(dateInitial.getDate());
    }
    dateInitial.setDate(dateInitial.getDate() + 1);
  }
  return dates;
};

export { generateDatesOfMonth };
