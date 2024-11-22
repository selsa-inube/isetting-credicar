import { useState, useEffect } from "react";

import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";
import { staffPortalByBusinessManager } from "@services/staffPortal/getStaffPortalByBusinessManager";
import { encrypt } from "@utils/encrypt";

const usePortalData = (portalCode: string | null) => {
  const [portalData, setPortalData] = useState<IStaffPortalByBusinessManager>(
    {} as IStaffPortalByBusinessManager,
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPortalData = async () => {
      try {
        if (!portalCode) {
          setHasError(true);
          return;
        }
        const StaffPortalData = await staffPortalByBusinessManager(portalCode);
        if (!StaffPortalData) {
          setHasError(true);
          return;
        }
        const encryptedParamValue = encrypt(portalCode);
        localStorage.setItem("portalCode", encryptedParamValue);
        setPortalData(StaffPortalData[0]);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };

    fetchPortalData();
  }, [portalCode]);

  return { portalData, hasError };
};

export { usePortalData };
