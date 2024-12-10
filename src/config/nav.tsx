import { MdCreditCard, MdLogout, MdOutlinePayments } from "react-icons/md";

import { INav } from "@pages/home/types";
import { enviroment } from "./environment";

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

const actionsConfig = (logout: () => void) => {
  const actions = [
    {
      id: "logout",
      label: "Cerrar sesión",
      icon: <MdLogout />,
      action: () => {
        logout();
        window.location.href = enviroment.REDIRECT_URI;
      },
    },
  ];

  return actions;
};

export { nav, userMenu, actionsConfig };
