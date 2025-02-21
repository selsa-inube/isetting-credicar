import { Stack, Text, Divider } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { IEntry } from "@design/data/table/types";
import { ComponentAppearance } from "@enum/appearances";
import {
  StyledContainerDataName,
  StyledContainerDescription,
  StyledContainerName,
} from "./styles";

interface IGeneralDataTab {
  data: IEntry;
}

const GeneralDataTab = (props: IGeneralDataTab) => {
  const { data } = props;

  return (
    <Stack
      direction="column"
      gap={tokens.spacing.s300}
      justifyContent="space-between"
      height="85%"
    >
      {data.abbreviatedName && (
        <StyledContainerName>
          <Text
            type="label"
            size="medium"
            appearance={ComponentAppearance.DARK}
            weight="bold"
          >
            Nombre
          </Text>
          <StyledContainerDataName>
            {data.abbreviatedName}
          </StyledContainerDataName>
        </StyledContainerName>
      )}

      {data.descriptionUse !== undefined && (
        <StyledContainerDescription>
          <Text
            type="label"
            size="medium"
            appearance={ComponentAppearance.DARK}
            weight="bold"
          >
            Descripción
          </Text>
          <Text type="body" size="medium" appearance={ComponentAppearance.GRAY}>
            {data.descriptionUse}
          </Text>
        </StyledContainerDescription>
      )}

      <Divider />
    </Stack>
  );
};

export { GeneralDataTab };
