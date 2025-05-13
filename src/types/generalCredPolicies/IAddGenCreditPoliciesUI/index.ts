import { IAssistedStep } from "@inubekit/inubekit";
import { IAddGenCredPoliciesRef } from "../forms/IAddGenCredPoliciesRef";
import { IAddGenCredPoliciesForms } from "../forms/IAddGenCredPoliciesForms";
import { IRuleDecision } from "@isettingkit/input";

interface IAddGenCreditPoliciesUI {
  currentStep: number;
  formReferences: IAddGenCredPoliciesRef;
  formValid: boolean;
  initialValues: IAddGenCredPoliciesForms;
  smallScreen: boolean;
  steps: IAssistedStep[];
  contributionsPortfolio: IRuleDecision[];
  incomePortfolio: IRuleDecision[];
  setIncomePortfolio: React.Dispatch<React.SetStateAction<IRuleDecision[]>>;
  setContributionsPortfolio: React.Dispatch<
    React.SetStateAction<IRuleDecision[]>
  >;
  onToggleModal: () => void;
  onNextStep: () => void;
  onPreviousStep: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handleFormValidChange: (isValid: boolean) => void;
}

export type { IAddGenCreditPoliciesUI };
