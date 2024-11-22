import { useState, useEffect } from "react";

import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";
import { staffPortalByBusinessManager } from "@services/staffPortal/getStaffPortalByBusinessManager";

export const usePortalData = (portalCode: string) => {
  const [portalData, setPortalData] = useState<IStaffPortalByBusinessManager>(
    {} as IStaffPortalByBusinessManager,
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPortalData = async () => {
      try {
        const StaffPortalData = await staffPortalByBusinessManager(portalCode);
        if (!StaffPortalData || StaffPortalData.length === 0) {
          setHasError(true);
          return;
        }
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
