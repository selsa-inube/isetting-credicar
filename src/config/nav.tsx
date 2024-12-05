import { MdCreditCard, MdLogout, MdOutlinePayments } from "react-icons/md";

import { INav } from "@pages/home/types";

const nav: INav = {
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

const userMenu = [
  {
    id: "section",
    title: "",
    links: [
      {
        id: "logout",
        title: "Cerrar sesión",
        path: "/logout",
        iconBefore: <MdLogout />,
      },
    ],
    divider: true,
  },
];

export { nav, userMenu };
