import { IDecisionsGeneralEntry } from "../IDecisionsGeneralEntry";

interface IDecisionsGeneralForm {
  initialValues: IDecisionsGeneralEntry;
  handleNextStep: () => void;
  editDataOption?: boolean;
  loading?: boolean;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IDecisionsGeneralEntry) => void;
}

export type { IDecisionsGeneralForm };
