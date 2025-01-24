import { Meta } from "@storybook/react";
import { Stack } from "@inubekit/stack";
import { businessUnitDataMock } from "@mocks/businessUnits/businessUnits.mock";

import { BusinessUnitChange } from ".";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";

const meta: Meta<typeof BusinessUnitChange> = {
  title: "inputs/BusinessUnitChange",
  component: BusinessUnitChange,
};

const defaultContextValue = {
  appData: {
    businessUnit: {
      publicCode: "defaultCode",
      abbreviatedName: "defaultName",
      languageId: "es",
      urlLogo: "defaultUrlLogo",
    },
    portal: {
      abbreviatedName: "",
      staffPortalCatalogId: "",
      businessManagerId: "",
      publicCode: "",
    },
    businessManager: {
      publicCode: "",
      abbreviatedName: "",
      urlBrand: "",
      urlLogo: "",
    },
    user: {
      userAccount: "Angie Pinilla",
      userName: "Angie Pinilla",
    },
  },
  setBusinessUnitSigla: (value: React.SetStateAction<string>) => {
    console.log(
      `Business unit sigla set to: ${typeof value === "function" ? value("") : value}`,
    );
  },
  businessUnitSigla: "",
  businessUnitsToTheStaff: [],
  setAppData: () => {
    console.log("");
  },
  setBusinessUnitsToTheStaff: () => {
    console.log("");
  },
};

const Default = () => {
  return (
    <AuthAndPortalData.Provider value={defaultContextValue}>
      <Stack width="100px">
        <BusinessUnitChange
          businessUnits={businessUnitDataMock}
          selectedClient={"Cooservunal"}
          onLogoClick={() => console.log("Logo clicked")}
        />
      </Stack>
    </AuthAndPortalData.Provider>
  );
};

export { Default };
export default meta;
