import { useState, useEffect } from "react";
import { businessManagers } from "@services/staffPortal/getBusinessManager";
import {
  IBusinessManagers,
  IStaffPortalByBusinessManager,
} from "@ptypes/staffPortal.types";

export const useBusinessManagers = (
  portalPublicCode: IStaffPortalByBusinessManager,
) => {
  const [businessManagersData, setBusinessManagersData] =
    useState<IBusinessManagers>({} as IBusinessManagers);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchBusinessManagers = async () => {
      if (!portalPublicCode) {
        setHasError(true);
        return;
      }
      try {
        const newData = await businessManagers(
          portalPublicCode.businessManagerId,
        );
        setBusinessManagersData(newData);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };

    fetchBusinessManagers();
  }, [portalPublicCode]);

  return { businessManagersData, hasError };
};
