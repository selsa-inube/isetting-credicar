import { string } from "yup";

import { validationMessages } from "./validationMessages";

const validationRules = {
  string: string().max(1000, validationMessages.maxCharacters(120)),
};

export { validationRules };
