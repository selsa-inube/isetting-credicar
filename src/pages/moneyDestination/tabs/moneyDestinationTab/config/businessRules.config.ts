import {
  IRuleDecision,
  ValueDataType,
  ValueHowToSetUp,
} from "@isettingkit/input";

const textValuesBusinessRules = {
  selectOptions: "Seleccione las opciones",
  selectOption: "Seleccione una opción",
  rangeMin: (label: string) => `${label} Minima`,
  rangeMax: (label: string) => `${label} Maxima`,
  reasonForChange: "",
  change: "",
  changePlaceholder: "",
  termStart: "",
  termEnd: "",
  cancel: "",
  confirm: "",
  none: "Ninguno",
  factsThatConditionIt: "Condiciones que lo determinan",
  criteria: "Criterios",
  terms: "Vigencia",
};

const decisionTemplate: IRuleDecision = {
  name: "TasaEfectivaAnual",
  dataType: ValueDataType.PERCENTAGE,
  value: { from: -1, to: -1 },
  valueUse: ValueHowToSetUp.RANGE,
  startDate: "",
  endDate: "",
  conditions: [
    {
      name: "AntigüedadDelCliente(Días)",
      dataType: ValueDataType.ALPHABETICAL,
      value: "",
      valueUse: ValueHowToSetUp.EQUAL,
    },
  ],
};

export { textValuesBusinessRules, decisionTemplate };
