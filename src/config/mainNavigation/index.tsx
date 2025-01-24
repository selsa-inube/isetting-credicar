import { MdCreditCard, MdOutlinePayments } from "react-icons/md";
import { INav } from "@ptypes/home/INav";

const mainNavigation: INav = {
    items: {
      title: "MENU",
      sections: {
        administrate: {
          name: "",
          links: {
            startProcess: {
              id: "creditLines",
              label: "Líneas de crédito",
              icon: <MdOutlinePayments />,
              path: "/credit-lines",
            },
            confirmInitiated: {
              id: "moneyDestination",
              label: "Destinos de dinero",
              icon: <MdCreditCard />,
              path: "/money-destination",
            },
          },
        },
      },
    },
    breakpoint: "848px",
  };

export { mainNavigation };