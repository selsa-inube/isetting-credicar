import { FormikProps } from "formik";
import { ITab } from "@inubekit/inubekit";
import { IRuleDecision } from "@isettingkit/input";
import { IRequestSteps } from "@design/modals/requestProcessModal/types";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IDateVerification } from "../forms/IDateVerification";
import { IDecisionsGeneralEntry } from "../forms/IDecisionsGeneralEntry";

interface IEditGeneralPoliciesUI {
  filteredTabsConfig: ITab[];
  contributionsPortfolio: IRuleDecision[];
  isSelected: string;
  requestSteps: IRequestSteps[];
  loading: boolean;
  showPendingReqModal: boolean;
  showRequestProcessModal: boolean;
  saveGeneralPolicies: ISaveDataResponse;
  smallScreen: boolean;
  tabletScreen: boolean;
  formValues: IDecisionsGeneralEntry;
  initialDecisionsData: IDecisionsGeneralEntry;
  decisionsGeneralReference: React.RefObject<
    FormikProps<IDecisionsGeneralEntry>
  >;
  incomePortfolio: IRuleDecision[];
  scoreModels: IRuleDecision[];
  showDecisionsGeneral: boolean;
  showIncomePort: boolean;
  showContributions: boolean;
  showScoreModels: boolean;
  showGoBackModal: boolean;
  showDateModal: boolean;
  date: IDateVerification;
  isRequestStatusModal: boolean;
  setDateDecisions: React.Dispatch<
    React.SetStateAction<IDateVerification | undefined>
  >;
  onFinishForm: () => void;
  onToggleDateModal: () => void;
  onGoBack: () => void;
  onCloseGoBackModal: () => void;
  setIncomePortfolio: (decisions: IRuleDecision[]) => void;
  setScoreModels: (decisions: IRuleDecision[]) => void;
  onTabChange: (id: string) => void;
  onReset: () => void;
  setContributionsPortfolio: (decisions: IRuleDecision[]) => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  normalizeEvaluateRuleData?: IRuleDecision[];
  normalizedContributions?: IRuleDecision[];
  normalizedIncome?: IRuleDecision[];
  normalizedScoreModels?: IRuleDecision[];
}

export type { IEditGeneralPoliciesUI };
