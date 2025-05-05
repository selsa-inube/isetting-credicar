import { FormikProps } from "formik";
import { IEntry } from "@design/data/table/types";
import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import { IServerDomain } from "@ptypes/IServerDomain";
import { IOrdinaryCyclesEntry } from "../IOrdinaryCyclesEntry";

interface IRegularPaymentCyclesFormUI {
  editDataOption: boolean;
  entries: IEntry[];
  formik: FormikProps<IOrdinaryCyclesEntry>;
  infoModal: IMessageModal;
  loading: boolean;
  numberDaysUntilCutOptions: IServerDomain[];
  paydayOptions: IServerDomain[];
  periodicityOptions: IServerDomain[];
  showAddModal: boolean;
  showInfoModal: boolean;
  valuesEqual: boolean;
  isMobile: boolean;
  onToggleInfoModal: () => void;
  onAddCycle: () => void;
  onToggleModal: () => void;
  onButtonClick: () => void;
  onChange: (name: string, value: string) => void;
  onPreviousStep: () => void;
  setEntryDeleted: (value: string | number) => void;
  isDisabledButton?: boolean;
}

export type { IRegularPaymentCyclesFormUI };
