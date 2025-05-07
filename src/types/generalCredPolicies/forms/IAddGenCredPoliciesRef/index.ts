import { FormikProps } from "formik";

import { IDecisionsGeneralEntry } from "../IDecisionsGeneralEntry";

interface IAddGenCredPoliciesRef {
  decisionsGeneral: React.RefObject<FormikProps<IDecisionsGeneralEntry>>;
}

export type { IAddGenCredPoliciesRef };
