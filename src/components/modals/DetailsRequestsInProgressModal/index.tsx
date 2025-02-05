import { MdClear, MdOutlineRemoveRedEye } from "react-icons/md";
import { createPortal } from "react-dom";
import {
  Blanket,
  Button,
  Divider,
  Icon,
  ITagAppearance,
  Select,
  Stack,
  Tag,
  Text,
  useMediaQuery,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { ComponentAppearance } from "@enum/appearances";
import { normalizeStatusByName } from "@utils/status/normalizeStatusByName";
import { IEntry } from "@components/data/Table/types";
import { ILabel } from "@components/modals/DetailsRequestsInProgressModal/types";
import { IServerDomain } from "@ptypes/IServerDomain";
import {
  StyledContainerButton,
  StyledContainerFields,
  StyledModal,
} from "./styles";

interface IDetailsRequestsInProgressModal {
  data: IEntry;
  labelsOfRequest: ILabel[];
  labelsOfTraceability: ILabel[];
  portalId: string;
  dateSelected: string;
  dateOptions: IServerDomain[];
  onCloseModal: () => void;
  onChange: (name: string, value: string) => void;
  onMoreDetails: () => void;
}

function DetailsRequestsInProgressModal(
  props: IDetailsRequestsInProgressModal,
) {
  const {
    data,
    portalId,
    labelsOfRequest,
    labelsOfTraceability,
    dateSelected,
    dateOptions,
    onChange,
    onCloseModal,
    onMoreDetails,
  } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);

  const node = document.getElementById(portalId);

  const partLabelsOfRequest = labelsOfRequest.length - 1;

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={tokens.spacing.s300}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
              Detalles
            </Text>
            <StyledContainerButton>
              <Button
                spacing="compact"
                appearance={ComponentAppearance.DARK}
                variant="none"
                onClick={onCloseModal}
                iconAfter={
                  <Icon
                    appearance={ComponentAppearance.DARK}
                    icon={<MdClear />}
                  />
                }
              >
                Cerrar
              </Button>
            </StyledContainerButton>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          gap={tokens.spacing.s100}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text type="label" size="large" weight="bold">
            Solicitud {data.request}
          </Text>

          {labelsOfRequest.slice(0, partLabelsOfRequest).map(
            (field, id) =>
              data[field.id] && (
                <StyledContainerFields key={id}>
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
                </StyledContainerFields>
              ),
          )}

          {labelsOfRequest.slice(partLabelsOfRequest).map(
            (field, id) =>
              data[field.id] && (
                <StyledContainerFields key={id}>
                  <Text size="medium" type="label" weight="bold">
                    {field.titleName}
                  </Text>
                  <Stack>
                    <Tag
                      appearance={
                        (normalizeStatusByName(data[field.id])
                          ?.appearance as ITagAppearance) || "light"
                      }
                      label={
                        normalizeStatusByName(data[field.id])?.status || ""
                      }
                    />
                  </Stack>
                </StyledContainerFields>
              ),
          )}
        </Stack>

        <Divider dashed />

        <Stack
          gap={tokens.spacing.s250}
          direction="column"
          justifyContent="center"
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={tokens.spacing.s100}
          >
            <Text type="label" size="large" weight="bold">
              Trazabilidad
            </Text>

            <Select
              disabled={false}
              fullwidth={true}
              id="dateTraceability"
              name="dateTraceability"
              label="Fecha"
              onChange={onChange}
              options={dateOptions}
              required={false}
              size="compact"
              value={dateSelected}
            />

            {labelsOfTraceability.map(
              (field, id) =>
                data[field.id] && (
                  <StyledContainerFields key={id}>
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
                  </StyledContainerFields>
                ),
            )}
          </Stack>
        </Stack>
        <Divider />

        <Stack gap={tokens.spacing.s250} justifyContent="flex-end">
          <Button
            spacing="wide"
            appearance={ComponentAppearance.LIGHT}
            variant="filled"
            onClick={onCloseModal}
          >
            Cerrar
          </Button>
          <Button
            spacing="wide"
            appearance={ComponentAppearance.PRIMARY}
            variant="filled"
            onClick={onMoreDetails}
            iconBefore={<MdOutlineRemoveRedEye />}
          >
            Más detalles
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node,
  );
}

export { DetailsRequestsInProgressModal };
export type { IDetailsRequestsInProgressModal };
