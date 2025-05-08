import { MdCreditCard, MdOutlineFeed, MdOutlinePayments } from "react-icons/md";
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
    publicCode: "Politicas generales de credito",
    icon: <MdOutlineFeed />,
    url: "/general-credit-policies",
  },
];

export { mainCards };
