import { number, string } from "yup";
import { validationMessages } from "@validations/validationMessages";

const validationRules = {
  name: string().max(120, validationMessages.maxCharacters(120)),
  number: number().positive(validationMessages.numbers),
  string: string().max(1000, validationMessages.maxCharacters(1000)),
};

export { validationRules };
