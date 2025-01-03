import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { useBusinessUnits } from "@hooks/selectBusinessUnits/useBusinessUnits";
import { BusinessUnitsUI } from "./interface";

interface IBusinessUnits {
  businessUnits: IBusinessUnitsPortalStaff[];
}

function BusinessUnits(props: IBusinessUnits) {
  const { businessUnits } = props;

  const {
    search,
    businessUnitLocal,
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
    />
  );
}

export { BusinessUnits };
