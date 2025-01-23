import { createContext, useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useBusinessManagers } from "@hooks/useBusinessManagers";
import { usePortalData } from "@hooks/usePortalData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { decrypt } from "@utils/encrypt";
import { IAuthAndPortalData, IAppData } from "./types";

const AuthAndPortalData = createContext<IAuthAndPortalData>({} as IAuthAndPortalData);

interface IAuthAndPortalDataProvider {
  children: React.ReactNode;
}

function AuthAndPortalDataProvider(props: IAuthAndPortalDataProvider) {
  const { children } = props;
  const { user } = useAuth0();

  const portalCode = decrypt(localStorage.getItem("portalCode") ?? "");
  const { portalData } = usePortalData(portalCode);
  const { businessManagersData } = useBusinessManagers(portalData);
  const [businessUnitSigla, setBusinessUnitSigla] = useState(
    localStorage.getItem("businessUnitSigla") ?? "",
  );
  const [businessUnitsToTheStaff, setBusinessUnitsToTheStaff] = useState<
    IBusinessUnitsPortalStaff[]
  >(() => {
    const savedBusinessUnits = localStorage.getItem("businessUnitsToTheStaff");
    return savedBusinessUnits ? JSON.parse(savedBusinessUnits) : [];
  });

  let businessUnitData: IBusinessUnitsPortalStaff =
    {} as IBusinessUnitsPortalStaff;
  try {
    businessUnitData = JSON.parse(
      businessUnitSigla || "{}",
    ) as IBusinessUnitsPortalStaff;
  } catch (error) {
    console.error("Error parsing businessUnitSigla:", error);
  }
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
      publicCode: businessUnitData?.publicCode || "",
      abbreviatedName: businessUnitData?.abbreviatedName || "",
      languageId: businessUnitData?.languageId || "",
      urlLogo: businessUnitData?.urlLogo || "",
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

  useEffect(() => {
    localStorage.setItem("businessUnitSigla", businessUnitSigla);

    if (businessUnitsToTheStaff && businessUnitSigla) {
      const businessUnit = JSON.parse(businessUnitSigla);

      setAppData((prev) => ({
        ...prev,
        businessUnit: {
          ...prev.businessUnit,
          abbreviatedName: businessUnit?.abbreviatedName,
          publicCode: businessUnit?.publicCode,
          languageId: businessUnit?.languageId,
          urlLogo: businessUnit?.urlLogo,
        },
      }));
    }
  }, [businessUnitSigla, businessUnitsToTheStaff]);

  useEffect(() => {
    localStorage.setItem(
      "businessUnitsToTheStaff",
      JSON.stringify(businessUnitsToTheStaff),
    );
  }, [businessUnitsToTheStaff]);

  const authAndPortalDataContainer = useMemo(
    () => ({
      appData,
      businessUnitSigla,
      businessUnitsToTheStaff,
      setAppData,
      setBusinessUnitSigla,
      setBusinessUnitsToTheStaff,
    }),
    [appData, businessUnitSigla, businessUnitsToTheStaff],
  );

  return (
    <AuthAndPortalData.Provider value={authAndPortalDataContainer}>{children}</AuthAndPortalData.Provider>
  );
}

export { AuthAndPortalData, AuthAndPortalDataProvider };
export type { IAuthAndPortalDataProvider };
