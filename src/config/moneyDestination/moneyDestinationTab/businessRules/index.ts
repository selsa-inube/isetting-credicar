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
  reasonForChange: "Motivo del cambio",
  change: "Cambio",
  changePlaceholder: "Describa brevemente el motivo del cambio",
  termStart: "Fecha de inicio",
  termEnd: "Fecha de fin",
  cancel: "Cancelar",
  confirm: "Confirmar",
  none: "Ninguno",
  factsThatConditionIt: "Condiciones que lo determinan",
  criteria: "Criterios",
  terms: "Vigencia",
};

const decisionTemplate: IRuleDecision = {
  name: "LineaDeCrédito",
  dataType: ValueDataType.ALPHABETICAL,
  valueUse: ValueHowToSetUp.EQUAL,
  value: "",
  startDate: "",
  endDate: "",
  conditions: [
    {
      name: "AntigüedadDelCliente(Días)",
      dataType: ValueDataType.ALPHABETICAL,
      value: "",
      valueUse: ValueHowToSetUp.EQUAL,
    },
    {
      name: "CategoríaDelCliente ",
      dataType: ValueDataType.ALPHABETICAL,
      possibleValue: {
        list: ["Leales", "Ocasionales", "Plata", "Platinum"],
      },
      value: [],
      valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    {
      name: "NivelDeMembresía",
      dataType: ValueDataType.ALPHABETICAL,
      possibleValue: {
        list: ["Muy alto", "Alto", "Medio", "Bajo", "Muy bajo"],
      },
      value: "",
      valueUse: ValueHowToSetUp.EQUAL,
    },
    {
      name: "ReciprocidadDeAhorro",
      dataType: ValueDataType.PERCENTAGE,
      value: 0,
      valueUse: ValueHowToSetUp.EQUAL,
    },
  ],
};

export { textValuesBusinessRules, decisionTemplate };
