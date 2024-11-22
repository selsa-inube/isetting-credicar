import { IBusinessManagers } from "@ptypes/staffPortal.types";
import { getBusinessManagers } from "@src/api/isaasQuery";
import { mapBusinessManagerApiToEntity } from "./mappers";

const businessManagers = async (
  businessManagerId: string,
): Promise<IBusinessManagers> => {
  try {
    const data: IBusinessManagers =
      await getBusinessManagers(businessManagerId);
    return mapBusinessManagerApiToEntity(data);
  } catch (error) {
    console.error(
      "Todos los intentos fallaron. No se pudieron obtener los datos del operador:",
      error,
    );
    throw error;
  }
};

export { businessManagers };
