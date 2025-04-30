import { IAssistedStep } from "@inubekit/inubekit";
import { IAddGenCredPoliciesRef } from "../forms/IAddGenCredPoliciesRef";
import { IAddGenCredPoliciesForms } from "../forms/IAddGenCredPoliciesForms";

interface IAddGenCreditPoliciesUI {
  currentStep: number;
  formReferences: IAddGenCredPoliciesRef;
  formValid: boolean;
  initialValues: IAddGenCredPoliciesForms;
  smallScreen: boolean;
  steps: IAssistedStep[];
  onToggleModal: () => void;
  onNextStep: () => void;
  onPreviousStep: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { IAddGenCreditPoliciesUI };
