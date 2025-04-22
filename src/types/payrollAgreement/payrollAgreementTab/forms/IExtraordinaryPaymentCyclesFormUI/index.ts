import { FormikProps } from "formik";
import { IEntry } from "@design/data/table/types";
import { IServerDomain } from "@ptypes/IServerDomain";
import { IExtraordinaryCyclesEntry } from "../IExtraordinaryCyclesEntry";

interface IExtraordinaryPaymentCyclesFormUI {
  formik: FormikProps<IExtraordinaryCyclesEntry>;
  entries: IEntry[];
  editDataOption: boolean;
  valuesEqual: boolean;
  loading: boolean;
  showModal: boolean;
  isMobile: boolean;
  typePaymentOptions: IServerDomain[];
  numberDaysUntilCutOptions: IServerDomain[];
  monthOptions: IServerDomain[];
  dayOptions: IServerDomain[];
  onAddCycle: () => void;
  onToggleModal: () => void;
  onButtonClick: () => void;
  onChange: (name: string, value: string) => void;
  onPreviousStep: () => void;
  setEntryDeleted: (value: string | number) => void;
  isDisabledButton?: boolean;
}

export type { IExtraordinaryPaymentCyclesFormUI };
