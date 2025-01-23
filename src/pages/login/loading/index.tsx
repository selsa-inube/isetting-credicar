
import { useTimeoutNavigation } from "@hooks/authentication/useTimeoutNavigation";
import { LoadingUI } from "./interface";

const Loading = () => {
  useTimeoutNavigation();

  return <LoadingUI />;
};

export { Loading };