import { getStaffPortalByBusinessManager } from "@api/isaasQuery";
import { mapStaffPortalByBusinessManagerApiToEntities } from "./mappers";
import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal/IStaffPortalByBusinessManager";

const staffPortalByBusinessManager = async (
  portalCode: string,
): Promise<IStaffPortalByBusinessManager[]> => {
  const data: IStaffPortalByBusinessManager[] =
    await getStaffPortalByBusinessManager(portalCode);

  return mapStaffPortalByBusinessManagerApiToEntities(data);
};

export { staffPortalByBusinessManager };
