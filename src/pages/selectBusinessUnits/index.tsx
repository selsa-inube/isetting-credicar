import { useSelectBusinessUnits } from "@hooks/selectBusinessUnits/useSelectBusinessUnits";
import { SelectBusinessUnitsUI } from "./interface";

function SelectBusinessUnits() {
  useSelectBusinessUnits();
  return <SelectBusinessUnitsUI />;
}

export { SelectBusinessUnits };
