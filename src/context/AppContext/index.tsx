import { createContext, useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useBusinessManagers } from "@hooks/useBusinessManagers";
import { usePortalData } from "@hooks/usePortalData";
import { decrypt } from "@utils/encrypt";
import { IAppContext, IAppData } from "./types";

const AppContext = createContext<IAppContext>({} as IAppContext);

interface AppProviderProps {
  children: React.ReactNode;
}

function AppContextProvider(props: AppProviderProps) {
  const { children } = props;
  const { user } = useAuth0();

  const portalCode = decrypt(localStorage.getItem("portalCode") ?? "");
  const { portalData } = usePortalData(portalCode);
  const { businessManagersData } = useBusinessManagers(portalData);

  const [appData, setAppData] = useState<IAppData>({
    portal: {
      abbreviatedName: "",
      staffPortalCatalogId: "",
      businessManagerId: "",
      publicCode: "",
    },
    businessManager: {
      publicCode: "",
      abbreviatedName: "",
      urlBrand: "",
      urlLogo: "",
    },
    businessUnit: {
      publicCode: "",
      abbreviatedName: "",
      languageId: "",
      urlLogo: "",
    },
    user: {
      userAccount: user?.email ?? "",
      userName: user?.name ?? "",
    },
  });

  useEffect(() => {
    if (!businessManagersData) return;

    setAppData((prev) => ({
      ...prev,
      portal: {
        ...prev.portal,
        abbreviatedName: portalData?.abbreviatedName || "",
        staffPortalCatalogId: portalData?.staffPortalId || "",
        businessManagerId: portalData?.businessManagerId || "",
        publicCode: portalData?.publicCode || "",
      },
      businessManager: {
        ...prev.businessManager,
        publicCode: businessManagersData.publicCode || "",
        abbreviatedName: businessManagersData.abbreviatedName || "",
        urlBrand: businessManagersData.urlBrand || "",
        urlLogo: businessManagersData.urlLogo || "",
      },
    }));
  }, [businessManagersData, portalData, portalCode]);

  const appContext = useMemo(
    () => ({
      appData,
      setAppData,
    }),
    [appData],
  );

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
export type { AppProviderProps };
