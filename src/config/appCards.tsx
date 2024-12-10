import { MdCreditCard, MdOutlinePayments } from "react-icons/md";
import { ICardData } from "@pages/home/types";

const appCards: ICardData[] = [
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

export { appCards };
