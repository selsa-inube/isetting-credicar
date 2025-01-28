import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { getBusinessUnitsPortalStaff } from "@api/iPortalStaffQuery";
import { mapBusinessUnitsPortalStaffToEntities } from "./mappers";

const businessUnitsPortalStaff = async (
  portalPublicCode: string,
  userAccount: string,
): Promise<IBusinessUnitsPortalStaff[]> => {
  const data: IBusinessUnitsPortalStaff[] = await getBusinessUnitsPortalStaff(
    portalPublicCode,
    userAccount,
  );
  return Array.isArray(data) ? mapBusinessUnitsPortalStaffToEntities(data) : [];
};

export { businessUnitsPortalStaff };
