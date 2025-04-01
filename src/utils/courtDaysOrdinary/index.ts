import { biweeklyPayDayOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/biweeklyPayDay";
import { everyTenPayDayOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/everyTenPayDay";
import { bimonthlyCourtDaysOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/bimonthlyCourtDays";
import { monthlyCourtDaysOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/monthlyCourtDays";
import { weeklyCourtDaysOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/weeklyCourtDays";

const courtDaysOrdinaryOptions = (periodicity: string) => {
  switch (periodicity) {
    case "weekly":
      return weeklyCourtDaysOptions;
    case "Intervals_10_days":
      return everyTenPayDayOptions;
    case "Biweekly":
      return biweeklyPayDayOptions;
    case "Monthly":
      return monthlyCourtDaysOptions;
    case "Semimonthly":
      return bimonthlyCourtDaysOptions;
  }
};

export { courtDaysOrdinaryOptions };
