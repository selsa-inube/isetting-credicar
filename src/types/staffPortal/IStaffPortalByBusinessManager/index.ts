import { IOptionsByStaffPortalBusinessManager } from "@ptypes/staffPortal/IOptionsByStaffPortalBusinessManager";

interface IStaffPortalByBusinessManager {
  abbreviatedName: string;
  businessManagerId: string;
  descriptionUse: string;
  publicCode: string;
  staffPortalCatalogId: string;
  staffPortalId: string;
  url: string;
  optionsByStaffPortalBusinessManager?: IOptionsByStaffPortalBusinessManager[];
  [key: string]: string | IOptionsByStaffPortalBusinessManager[] | undefined;
}

export type { IStaffPortalByBusinessManager };