import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";

const areObjectsEqual = (
  obj1: IOrdinaryCyclesEntry,
  obj2: IOrdinaryCyclesEntry,
) => {
  return obj1.cycleId === obj2.cycleId && obj1.payday === obj2.payday;
};

export { areObjectsEqual };
