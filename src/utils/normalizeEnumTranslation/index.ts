import { enumsTranslation } from "@config/payrollAgreement/payrollAgreementTab/assisted/enumsTranslation";

const normalizeEnumTranslation = (code: string) =>
  enumsTranslation.find((element) => element.code === code);

export { normalizeEnumTranslation };
