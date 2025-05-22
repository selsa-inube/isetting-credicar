import { IEntry } from "@ptypes/design/table/IEntry";
import { dataTranslations } from "../dataTranslations";

const getDayPayment = (item: IEntry) => {
  if (item.payday) return item.payday;
  if (item.paymentDay) {
    return dataTranslations[item.paymentDay] ?? item.paymentDay;
  }
  return item.paymentDay;
};

export { getDayPayment };
