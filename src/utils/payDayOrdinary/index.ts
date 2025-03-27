import { biweeklyPayDayOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/biweeklyPayDay";
import { everyTenPayDayOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/everyTenPayDay";
import { monthPayDayOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/monthlyPayDay";
import { weeklyPayDayOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/weeklyPayDay";

const payDayOrdinaryOptions = (periodicity: string) => {
  switch (periodicity) {
    case "Semanal":
      return weeklyPayDayOptions;
    case "Cada 10 días":
      return everyTenPayDayOptions;
    case "Quincenal":
      return biweeklyPayDayOptions;
    case "Mensual":
      return monthPayDayOptions;
    case "Bimensual":
      return weeklyPayDayOptions;
  }
};

export { payDayOrdinaryOptions };
