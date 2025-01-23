import { useAuth0 } from "@auth0/auth0-react";
import { Home } from "@pages/home";

const Logout = () => {
  const redirect_uri = window.location.origin;
  localStorage.clear();
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: redirect_uri } });
  return <Home />;
};

export { Logout };