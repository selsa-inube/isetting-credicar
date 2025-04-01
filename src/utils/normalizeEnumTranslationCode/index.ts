import { enumsTranslation } from "@config/payrollAgreement/payrollAgreementTab/assisted/enumsTranslation";

const normalizeEnumTranslationCode = (name: string) =>
  enumsTranslation.find((element) => element.name === name);

export { normalizeEnumTranslationCode };
