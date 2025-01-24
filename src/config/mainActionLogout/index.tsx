import { MdLogout } from "react-icons/md";
import { enviroment } from "../environment";

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

export { actionsConfig };