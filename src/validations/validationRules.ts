import { string } from "yup";

import { validationMessages } from "./validationMessages";

const validationRules = {
  name: string().max(120, validationMessages.maxCharacters(120)),
  string: string().max(1000, validationMessages.maxCharacters(1000)),
};

export { validationRules };
