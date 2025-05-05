import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { getBusinessUnitsPortalStaff } from "@services/staffPortal/getBusinessUnits";
import { validateAndTrimString } from "@utils/validateAndTrimString";

const validateBusinessUnities = async (
  publicCode: string,
  userAccount: string,
): Promise<IBusinessUnitsPortalStaff[]> => {
  const user = validateAndTrimString(userAccount);
  const newData = await getBusinessUnitsPortalStaff(publicCode, user);

  return newData;
};

export { validateBusinessUnities };
