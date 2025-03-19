import { useAuth0 } from "@auth0/auth0-react";
import { ErrorPage } from "@design/layout/errorPage";
import { enviroment } from "@config/environment";
import { useClearLocalStorage } from "@hooks/authentication/useClearLocalStorage";

function NotBusinessUnit() {
  const { logout } = useAuth0();

  useClearLocalStorage();

  const handlelogout = () => {
    logout({ logoutParams: { returnTo: enviroment.REDIRECT_URI } });
  };

  return (
    <ErrorPage
      errorCode={1004}
      heading="No hay resultados..."
      onClick={handlelogout}
    />
  );
}

export { NotBusinessUnit };
