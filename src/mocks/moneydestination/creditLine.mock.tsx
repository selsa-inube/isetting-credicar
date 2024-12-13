import {
  IRuleDecision,
  ValueDataType,
  ValueHowToSetUp,
} from "@isettingkit/input";

const decision1: IRuleDecision = {
  id: "Decisión 1",
  name: "LíneaDeCrédito",
  dataType: ValueDataType.ALPHABETICAL,
  value: "Crédito vacacional",
  valueUse: ValueHowToSetUp.EQUAL,
  startDate: "2024-12-31",
  endDate: "2024-12-31",
  conditions: [
    {
      name: "CategoriaCliente",
      dataType: ValueDataType.ALPHABETICAL,
      value: ["Leales", "Platinum"],
      valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
  ],
};

const decision2: IRuleDecision = {
  id: "Decisión 2",
  name: "LíneaDeCrédito",
  dataType: ValueDataType.ALPHABETICAL,
  value: "Libre inversión",
  valueUse: ValueHowToSetUp.EQUAL,
  startDate: "2024-12-31",
  endDate: "2024-12-31",
  conditions: [
    {
      name: "CategoriaCliente",
      dataType: ValueDataType.ALPHABETICAL,
      value: ["Ocasionales", "Plata"],
      valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
  ],
};

const decision3: IRuleDecision = {
  id: "Decisión 3",
  name: "LíneaDeCrédito",
  dataType: ValueDataType.ALPHABETICAL,
  value: "Libre inversión",
  valueUse: ValueHowToSetUp.EQUAL,
  startDate: "2024-12-31",
  endDate: "2024-12-31",
  conditions: [
    {
      name: "CategoriaCliente",
      dataType: ValueDataType.ALPHABETICAL,
      value: ["Ocasionales", "Plata"],
      valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
  ],
};

const decisions = [decision1, decision2, decision3];

export { decisions };
