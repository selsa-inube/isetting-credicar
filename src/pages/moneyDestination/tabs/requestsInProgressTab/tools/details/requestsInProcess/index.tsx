import { Divider, inube, Stack, Text } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";

import { IEntry } from "@design/data/table/types";
import { RequestType } from "@enum/requestType";
import { TraceabilityCard } from "@design/feedback/traceabilityCard";
import { ModalWrapper } from "@design/modals/modalWrapper";
import { BoxContainer } from "@design/layout/boxContainer";
import { ILabel } from "@ptypes/ILabel";

interface IRequestsInProcess {
  data: IEntry;
  labelsOfRequest: ILabel[];
  labelsOfTraceability: ILabel[];
  isMobile: boolean;
  onCloseModal: () => void;
  onClick: () => void;
}

function RequestsInProcess(props: IRequestsInProcess) {
  const {
    data,
    labelsOfRequest,
    labelsOfTraceability,
    isMobile,
    onCloseModal,
    onClick,
  } = props;

  return (
    <ModalWrapper
      portalId="portal"
      width={isMobile ? "335px" : "600px"}
      isMobile={isMobile}
      nameButtonOnClick="Entendido"
      title="Detalles de solicitud"
      withCancelButton={true}
      onCloseModal={onCloseModal}
      onClick={onClick}
    >
      <BoxContainer
        direction="column"
        backgroundColor={inube.palette.neutral.N0}
        borderRadius={tokens.spacing.s100}
        borderColor={inube.palette.neutral.N40}
        boxSizing="border-box"
        width="auto"
        height={isMobile ? "400px" : "430px"}
        gap={tokens.spacing.s200}
        padding={isMobile ? `${tokens.spacing.s150}` : `${tokens.spacing.s200}`}
      >
        <Stack
          gap={tokens.spacing.s200}
          direction="column"
          alignItems="center"
          width="100%"
        >
          <Stack
            direction="column"
            justifyContent="left"
            width="100%"
            gap={tokens.spacing.s100}
          >
            <Text
              type="title"
              size="medium"
              weight="bold"
              appearance={ComponentAppearance.GRAY}
            >
              Solicitud{" "}
              {RequestType[data.request as keyof typeof RequestType] ??
                data.request}
            </Text>
            <Divider dashed />
          </Stack>
        </Stack>
        <BoxContainer
          backgroundColor={inube.palette.neutral.N0}
          overflowY="auto"
          boxSizing="border-box"
          wrap="wrap"
          width="100%"
          gap={isMobile ? `${tokens.spacing.s075}` : `${tokens.spacing.s150}`}
        >
          <Stack
            gap={tokens.spacing.s250}
            direction={isMobile ? "column" : "row"}
          >
            {labelsOfRequest.map(
              (field, id) =>
                data[field.id] && (
                  <BoxContainer
                    key={id}
                    direction="column"
                    width={isMobile ? "253px" : "240px"}
                    height="52px"
                    backgroundColor={inube.palette.neutral.N10}
                    borderRadius={tokens.spacing.s100}
                    borderColor={inube.palette.neutral.N40}
                    boxSizing="border-box"
                    padding={`${tokens.spacing.s075} ${tokens.spacing.s150}`}
                  >
                    <Text size="medium" type="label" weight="bold">
                      {field.titleName}
                    </Text>
                    <Text
                      size="small"
                      appearance={ComponentAppearance.GRAY}
                      ellipsis
                    >
                      {data[field.id]}
                    </Text>
                  </BoxContainer>
                ),
            )}
          </Stack>

          <Stack
            margin={`${tokens.spacing.s075} ${tokens.spacing.s0}`}
            direction="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            gap={tokens.spacing.s150}
          >
            <Text type="label" size="large" weight="bold">
              Trazabilidad
            </Text>

            <Stack
              direction="column"
              gap={tokens.spacing.s150}
              alignItems="center"
            >
              {data.traceability.map((entry: IEntry, index: number) => (
                <Stack key={index}>
                  <TraceabilityCard
                    data={entry}
                    isMobile={isMobile}
                    labels={labelsOfTraceability}
                  />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </BoxContainer>
      </BoxContainer>
    </ModalWrapper>
  );
}

export { RequestsInProcess };
export type { IRequestsInProcess };
