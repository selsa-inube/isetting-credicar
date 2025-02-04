import { AxiosRequestConfig } from "axios";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/iPortalStaff";
import { mapBusinessUnitsPortalStaffToEntities } from "./mappers";

const getBusinessUnitsPortalStaff = async (
  portalPublicCode: string,
  userAccount: string,
): Promise<IBusinessUnitsPortalStaff[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchBusinessUnitsForAnOfficer",
    },
  };
  const data: IBusinessUnitsPortalStaff[] = await getWithRetries<
    IBusinessUnitsPortalStaff[]
  >(
    axiosInstance,
    `/business-units-portal-staff/${userAccount}/${portalPublicCode}`,
    config,
  );
  return Array.isArray(data) ? mapBusinessUnitsPortalStaffToEntities(data) : [];
};

export { getBusinessUnitsPortalStaff };
