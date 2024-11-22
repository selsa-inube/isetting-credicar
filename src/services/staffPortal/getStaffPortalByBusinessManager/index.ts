import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";
import { getStaffPortalByBusinessManager } from "@src/api/isaasQuery";
import { mapStaffPortalByBusinessManagerApiToEntities } from "./mappers";

const staffPortalByBusinessManager = async (
  portalCode: string,
): Promise<IStaffPortalByBusinessManager[]> => {
  const data: IStaffPortalByBusinessManager[] =
    await getStaffPortalByBusinessManager(portalCode);
  return mapStaffPortalByBusinessManagerApiToEntities(data);
};

export { staffPortalByBusinessManager };
