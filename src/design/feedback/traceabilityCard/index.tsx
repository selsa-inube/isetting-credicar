import { inube, Stack, Tag, Text } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { IEntry } from "@design/data/table/types";
import { BoxContainer } from "@design/layout/boxContainer";
import { ILabel } from "@ptypes/ILabel";

interface ITraceabilityCard {
  data: IEntry;
  labels: ILabel[];
  isMobile: boolean;
}

const TraceabilityCard = (props: ITraceabilityCard) => {
  const { data, labels, isMobile } = props;

  const partLabels = labels.length;

  return (
    <BoxContainer
      direction="column"
      backgroundColor={inube.palette.neutral.N0}
      width={isMobile ? "244px" : "400px"}
      height="auto"
      borderRadius={tokens.spacing.s100}
      padding={isMobile ? `${tokens.spacing.s150}` : `${tokens.spacing.s200}`}
      gap={isMobile ? `${tokens.spacing.s050}` : `${tokens.spacing.s150}`}
      boxSizing="border-box"
      boxShadow="1px 0px 3px 1px rgba(0, 0, 0, 0.15)"
    >
      <Stack
        gap={tokens.spacing.s100}
        justifyContent="center"
        direction={isMobile ? "column" : "row"}
      >
        {labels.slice(0, 1).map(
          (field, id) =>
            data[field.id] && (
              <BoxContainer
                key={id}
                direction="column"
                width="100%"
                min-height="52px"
                borderRadius={tokens.spacing.s100}
                padding={
                  isMobile
                    ? `${tokens.spacing.s075}`
                    : `${tokens.spacing.s075} ${tokens.spacing.s150}`
                }
                box-sizing="border-box"
                backgroundColor={inube.palette.neutral.N10}
                boxSizing="border-box"
              >
                <Text size="medium" type="label" weight="bold">
                  {field.titleName}
                </Text>
                <Text
                  size="small"
                  type="body"
                  appearance={ComponentAppearance.GRAY}
                >
                  {data[field.id]}
                </Text>
              </BoxContainer>
            ),
        )}
        {labels.slice(1, 2).map(
          (field, id) =>
            data[field.id] && (
              <BoxContainer
                key={id}
                direction="column"
                width="100%"
                min-height="52px"
                borderRadius={tokens.spacing.s100}
                padding={
                  isMobile
                    ? `${tokens.spacing.s075}`
                    : `${tokens.spacing.s075} ${tokens.spacing.s150}`
                }
                box-sizing="border-box"
                backgroundColor={inube.palette.neutral.N10}
                boxSizing="border-box"
              >
                <Text size="medium" type="label" weight="bold">
                  {field.titleName}
                </Text>
                <Stack width="auto">
                  <Tag
                    appearance={ComponentAppearance.GRAY}
                    label={data[field.id]}
                    weight="strong"
                  />
                </Stack>
              </BoxContainer>
            ),
        )}
      </Stack>

      <Stack
        gap={tokens.spacing.s200}
        direction="column"
        justifyContent="center"
      >
        {labels.slice(2, partLabels).map(
          (field, id) =>
            data[field.id] && (
              <BoxContainer
                key={id}
                direction="column"
                width="100%"
                min-height="52px"
                borderRadius={tokens.spacing.s100}
                padding={
                  isMobile
                    ? `${tokens.spacing.s075}`
                    : `${tokens.spacing.s075} ${tokens.spacing.s150}`
                }
                box-sizing="border-box"
                backgroundColor={inube.palette.neutral.N10}
                boxSizing="border-box"
              >
                <Text size="medium" type="label" weight="bold">
                  {field.titleName}
                </Text>
                <Text
                  size="small"
                  type="body"
                  appearance={ComponentAppearance.GRAY}
                >
                  {data[field.id]}
                </Text>
              </BoxContainer>
            ),
        )}
      </Stack>
    </BoxContainer>
  );
};

export { TraceabilityCard };
export type { ITraceabilityCard };
