import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

import { BusinessUnitsUI } from "./interface";
import { useBusinessUnits } from "@src/hooks/selectBusinessUnits/useBusinessUnits";

interface IBusinessUnits {
  businessUnits: IBusinessUnitsPortalStaff[];
}

function BusinessUnits(props: IBusinessUnits) {
  const { businessUnits } = props;

  const {
    search,
    businessUnitLocal,
    screenMobile,
    screenTablet,
    handleSearchChange,
    handleChange,
    handleSubmit,
    filterBusinessUnits,
  } = useBusinessUnits(businessUnits);

  return (
    <BusinessUnitsUI
      businessUnits={businessUnits}
      search={search}
      businessUnit={businessUnitLocal}
      handleSearchChange={handleSearchChange}
      handleBussinessUnitChange={handleChange}
      filterBusinessUnits={filterBusinessUnits}
      handleSubmit={handleSubmit}
      screenMobile={screenMobile}
      screenTablet={screenTablet}
    />
  );
}

export { BusinessUnits };
