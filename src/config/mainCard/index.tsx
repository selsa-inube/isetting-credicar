import {
  MdCreditCard,
  MdOutlineHandshake,
  MdOutlinePayments,
} from "react-icons/md";
import { ICardData } from "@ptypes/home/ICardData";

const mainCards: ICardData[] = [
  {
    publicCode: "Lineas de Credito",
    icon: <MdOutlinePayments />,
    url: "/credit-lines",
  },
  {
    publicCode: "Destinos de dinero",
    icon: <MdCreditCard />,
    url: "/money-destination",
  },
  {
    publicCode: "Nóminas de convenio",
    icon: <MdOutlineHandshake />,
    url: "/payroll-agreement",
  },
];

export { mainCards };
