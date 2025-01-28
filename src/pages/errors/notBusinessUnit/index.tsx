import { useAuth0 } from "@auth0/auth0-react";
import { ErrorPage } from "@components/layout/ErrorPage";
import clientNotFound from "@assets/images/Expired.png";
import { enviroment } from "@config/environment";
import { useClearLocalStorage } from "@hooks/useClearLocalStorage";

function NotBusinessUnit() {
  const { logout } = useAuth0();

  useClearLocalStorage();

  const handlelogout = () => {
    logout({ logoutParams: { returnTo: enviroment.REDIRECT_URI } });
  };

  return (
    <ErrorPage
      image={clientNotFound}
      imageAlt="Unidad de negocio no encontrada"
      heading="No hay resultados..."
      description="Su usuario no tiene unidades de negocio relacionados, consulte con su administrador."
      onClick={handlelogout}
    />
  );
}

export { NotBusinessUnit };
