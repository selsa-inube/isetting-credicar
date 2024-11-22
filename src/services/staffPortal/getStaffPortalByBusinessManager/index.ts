import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";
import { getStaffPortalByBusinessManager } from "@src/api/isaasQuery";
import { mapStaffPortalByBusinessManagerApiToEntities } from "./mappers";

const staffPortalByBusinessManager = async (
  portalCode: string,
): Promise<IStaffPortalByBusinessManager[]> => {
  try {
    const data: IStaffPortalByBusinessManager[] =
      await getStaffPortalByBusinessManager(portalCode);

    return mapStaffPortalByBusinessManagerApiToEntities(data);
  } catch (error) {
    console.error(
      "Todos los intentos fallaron. No se pudieron obtener los datos del operador:",
      error,
    );
    throw error;
  }
};

export { staffPortalByBusinessManager };
