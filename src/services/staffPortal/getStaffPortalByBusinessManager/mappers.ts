import { IOptionsByStaffPortalBusinessManager } from "@ptypes/staffPortal/IOptionsByStaffPortalBusinessManager";
import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal/IStaffPortalByBusinessManager";

const mapStaffPortalByBusinessManagerApiToEntity = (
  resend: Record<
    string,
    string | IOptionsByStaffPortalBusinessManager[] | undefined
  >,
): IStaffPortalByBusinessManager => {
  const buildResend: IStaffPortalByBusinessManager = {
    abbreviatedName: String(resend.abbreviatedName),
    businessManagerId: String(resend.businessManagerId),
    descriptionUse: String(resend.descriptionUse),
    publicCode: String(resend.publicCode),
    staffPortalCatalogId: String(resend.staffPortalCatalogId),
    staffPortalId: String(resend.staffPortalId),
    url: String(resend.url),
  };
  return buildResend;
};

const mapStaffPortalByBusinessManagerApiToEntities = (
  resend: Record<
    string,
    string | IOptionsByStaffPortalBusinessManager[] | undefined
  >[],
): IStaffPortalByBusinessManager[] => {
  return resend.map(mapStaffPortalByBusinessManagerApiToEntity);
};
export {
  mapStaffPortalByBusinessManagerApiToEntities,
  mapStaffPortalByBusinessManagerApiToEntity,
};
