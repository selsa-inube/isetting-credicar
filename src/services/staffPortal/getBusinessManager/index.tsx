import { IBusinessManagers } from "@ptypes/staffPortal.types";
import { getBusinessManagers } from "@api/isaasQuery";
import { mapBusinessManagerApiToEntity } from "./mappers";

const businessManagers = async (
  businessManagerId: string,
): Promise<IBusinessManagers> => {
  const data: IBusinessManagers = await getBusinessManagers(businessManagerId);
  return mapBusinessManagerApiToEntity(data);
};

export { businessManagers };
