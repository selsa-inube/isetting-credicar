import { IEnumeratorsMoneyDestination } from "@pages/moneyDestination/tabs/moneyDestinationTab/types";
import {
  MdOutline1xMobiledata,
  MdOutlineAddHomeWork,
  MdOutlineAssuredWorkload,
  MdOutlineBeachAccess,
  MdOutlineBuild,
  MdOutlineCreditCard,
  MdOutlineDirectionsCar,
  MdOutlineDiversity1,
  MdOutlineFavoriteBorder,
  MdOutlineHandshake,
  MdOutlineLightbulb,
  MdOutlinePayments,
  MdOutlinePersonalInjury,
  MdOutlineRealEstateAgent,
  MdOutlineSchool,
  MdOutlineTravelExplore,
  MdOutlineVolunteerActivism,
} from "react-icons/md";

const nameDestination = [
  {
    code: "New_homes",
    name: "Nueva vivienda",
  },
  {
    code: "Housing_repair",
    name: "Reparacion de vivienda",
  },
  {
    code: "Education",
    name: "Educación",
  },
  {
    code: "Entrepreneurship",
    name: "Emprendimiento",
  },
  {
    code: "Vehicle",
    name: "Vehículo",
  },
  {
    code: "Insurance_services",
    name: "Seguros Servicios",
  },
  {
    code: "Holidays",
    name: "Vacaciones",
  },
  {
    code: "Purchase_portfolio_outside_entities",
    name: "Compra de cartera entidades externas",
  },
  {
    code: "Calamity_domestic",
    name: "Calamidad domestica",
  },
  {
    code: "Personal_family",
    name: "Personal familia",
  },
  {
    code: "Contingency_a_quota",
    name: "Imprevistos una cuota",
  },
  {
    code: "Assets_services",
    name: "Bienes servicios",
  },
  {
    code: "Second_home",
    name: "Segunda vivienda",
  },
  {
    code: "Excursions",
    name: "Excursiones",
  },
  {
    code: "Internal_card",
    name: "Tarjeta interna",
  },
  {
    code: "Free_investment",
    name: "Libre inversion",
  },
  {
    code: "Sale_loan_flows",
    name: "Venta flujos prestamo",
  },
];

const iconDestination = [
  {
    value: "MdOutlineRealEstateAgent",
    icon: <MdOutlineRealEstateAgent size={24} />,
  },
  {
    value: "MdOutlineBuild",
    icon: <MdOutlineBuild size={24} />,
  },
  {
    value: "MdOutlineSchool",
    icon: <MdOutlineSchool size={24} />,
  },
  {
    value: "MdOutlineLightbulb",
    icon: <MdOutlineLightbulb size={24} />,
  },
  {
    value: "MdOutlineDirectionsCar",
    icon: <MdOutlineDirectionsCar size={24} />,
  },
  {
    value: "MdOutlineVolunteerActivism",
    icon: <MdOutlineVolunteerActivism size={24} />,
  },
  {
    value: "MdOutlineBeachAccess",
    icon: <MdOutlineBeachAccess size={24} />,
  },
  {
    value: "MdOutlineAssuredWorkload",
    icon: <MdOutlineAssuredWorkload size={24} />,
  },
  {
    value: "MdOutlinePersonalInjury",
    icon: <MdOutlinePersonalInjury size={24} />,
  },
  {
    value: "MdOutlineDiversity1",
    icon: <MdOutlineDiversity1 size={24} />,
  },
  {
    value: "MdOutline1xMobiledata",
    icon: <MdOutline1xMobiledata size={24} />,
  },
  {
    value: "MdOutlineFavoriteBorder",
    icon: <MdOutlineFavoriteBorder size={24} />,
  },
  {
    value: "MdOutlineAddHomeWork",
    icon: <MdOutlineAddHomeWork size={24} />,
  },
  {
    value: "MdOutlineTravelExplore",
    icon: <MdOutlineTravelExplore size={24} />,
  },
  {
    value: "MdOutlineCreditCard",
    icon: <MdOutlineCreditCard size={24} />,
  },
  {
    value: "MdOutlinePayments",
    icon: <MdOutlinePayments size={24} />,
  },
  {
    value: "MdOutlineHandshak",
    icon: <MdOutlineHandshake size={24} />,
  },
];

const normalizeNameDestination = (code: string) =>
  nameDestination.find((element) => element.code === code);

const normalizeCodeDestination = (name: string) =>
  nameDestination.find((element) => element.name === name);

const normalizeDestination = (
  enumData: IEnumeratorsMoneyDestination[],
  code: string,
) => enumData.find((element) => element.code === code);

const normalizeIconDestination = (value: string) =>
  iconDestination.find((element) => element.value === value);

export {
  normalizeNameDestination,
  normalizeCodeDestination,
  normalizeDestination,
  normalizeIconDestination,
};
