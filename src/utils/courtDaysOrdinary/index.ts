import { biweeklyPayDayOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/biweeklyPayDay";
import { everyTenPayDayOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/everyTenPayDay";
import { bimonthlyCourtDaysOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/bimonthlyCourtDays";
import { monthlyCourtDaysOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/monthlyCourtDays";
import { weeklyCourtDaysOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/weeklyCourtDays";

const courtDaysOrdinaryOptions = (periodicity: string) => {
  switch (periodicity) {
    case "Semanal":
      return weeklyCourtDaysOptions;
    case "Cada 10 días":
      return everyTenPayDayOptions;
    case "Quincenal":
      return biweeklyPayDayOptions;
    case "Mensual":
      return monthlyCourtDaysOptions;
    case "Bimensual":
      return bimonthlyCourtDaysOptions;
  }
};

export { courtDaysOrdinaryOptions };
