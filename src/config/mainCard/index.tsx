import { ICardData } from "@ptypes/home/ICardData";
import { MdCreditCard, MdOutlinePayments } from "react-icons/md";


const mainCards: ICardData[] = [
  {
    id: "creditLines",
    label: "Líneas de crédito",
    description: "Líneas de crédito.",
    icon: <MdOutlinePayments />,
    url: "/credit-lines",
  },
  {
    id: "moneyDestination",
    label: "Destinos de dinero",
    description: "Destinos de dinero.",
    icon: <MdCreditCard />,
    url: "/money-destination",
  },
];

export { mainCards };
