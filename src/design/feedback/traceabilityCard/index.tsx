import { inube, Stack } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { IEntry } from "@design/data/table/types";
import { BoxContainer } from "@design/layout/boxContainer";
import { ILabel } from "@ptypes/ILabel";
import { DetailBox } from "../detailBox";

interface ITraceabilityCard {
  data: IEntry;
  labels: ILabel[];
  isMobile: boolean;
}

const TraceabilityCard = (props: ITraceabilityCard) => {
  const { data, labels, isMobile } = props;

  const partLabels = labels.length;

  const firstDetail = labels.slice(0, 1).filter((field) => data[field.id]);
  const secondDetail = labels.slice(1, 2).filter((field) => data[field.id]);
  const remainingDetails = labels
    .slice(2, partLabels)
    .filter((field) => data[field.id]);

  const renderDetailBox = (field: ILabel, id: number, withTag = false) => (
    <DetailBox
      key={id}
      field={field}
      data={data}
      id={id}
      backgroundColor={inube.palette.neutral.N10}
      borderRadius={tokens.spacing.s100}
      padding={
        isMobile
          ? `${tokens.spacing.s075}`
          : `${tokens.spacing.s075} ${tokens.spacing.s150}`
      }
      width="100%"
      {...(withTag && { withTag })}
    />
  );

  return (
    <BoxContainer
      direction="column"
      backgroundColor={inube.palette.neutral.N0}
      width={isMobile ? "244px" : "400px"}
      height="auto"
      borderRadius={tokens.spacing.s100}
      padding={isMobile ? tokens.spacing.s150 : tokens.spacing.s200}
      gap={isMobile ? tokens.spacing.s050 : tokens.spacing.s150}
      boxSizing="border-box"
      boxShadow="1px 0px 3px 1px rgba(0, 0, 0, 0.15)"
    >
      <Stack
        gap={tokens.spacing.s100}
        justifyContent="center"
        direction={isMobile ? "column" : "row"}
      >
        {firstDetail.map((field, id) => renderDetailBox(field, id))}
        {secondDetail.map((field, id) => renderDetailBox(field, id, true))}
      </Stack>

      <Stack
        gap={tokens.spacing.s200}
        direction="column"
        justifyContent="center"
      >
        {remainingDetails.map((field, id) => renderDetailBox(field, id))}
      </Stack>
    </BoxContainer>
  );
};

export { TraceabilityCard };
export type { ITraceabilityCard };
