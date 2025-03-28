import { MdClear, MdInfoOutline } from "react-icons/md";
import { createPortal } from "react-dom";
import { FormikValues } from "formik";
import {
  Stack,
  Text,
  Icon,
  Divider,
  useMediaQuery,
  Blanket,
  Button,
  Input,
  Select,
  Label,
  Grid,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { ComponentAppearance } from "@enum/appearances";
import { IServerDomain } from "@ptypes/IServerDomain";
import { StyledModal, StyledSelectConatiner } from "./styles";
import { getFieldState } from "@utils/forms/getFieldState";

interface IAddCycleModal {
  actionText: string;
  comparisonData: boolean;
  formik: FormikValues;
  isLoading: boolean;
  portalId: string;
  title: string;
  numberDaysUntilCutOptions: IServerDomain[];
  onClick: () => void;
  onCloseModal: () => void;
  onChange: (name: string, value: string) => void;
  onToggleInfoModal?: () => void;
  periodicityOptions?: IServerDomain[];
  paydayOptions?: IServerDomain[];
  typePaymentOptions?: IServerDomain[];
  monthOptions?: IServerDomain[];
  dayOptions?: IServerDomain[];
  isOrdinary?: boolean;
  isExtraordinary?: boolean;
}

const AddCycleModal = (props: IAddCycleModal) => {
  const {
    actionText,
    comparisonData,
    formik,
    isLoading,
    portalId,
    title,
    isOrdinary,
    isExtraordinary,
    periodicityOptions,
    paydayOptions,
    typePaymentOptions,
    monthOptions,
    dayOptions,
    numberDaysUntilCutOptions,
    onCloseModal,
    onClick,
    onChange,
    onToggleInfoModal,
  } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={tokens.spacing.s200}>
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
              {title}
            </Text>
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
          </Stack>
          <Divider />
        </Stack>

        <Stack gap={tokens.spacing.s200} direction="column" width="100%">
          <Input
            name="nameCycle"
            id="nameCycle"
            label="Nombre"
            placeholder="Nombre"
            type="text"
            size="compact"
            value={formik.values.nameCycle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            status={getFieldState(formik, "nameCycle")}
            message={formik.errors.nameCycle}
            fullwidth
          />
          {isOrdinary && (
            <>
              <Select
                id="periodicity"
                name="periodicity"
                label="Periodicidad"
                placeholder="Selecciónalo de la lista"
                onChange={onChange}
                options={periodicityOptions ?? []}
                size="compact"
                value={formik.values.periodicity ?? ""}
                fullwidth
                message={formik.errors.periodicity}
                invalid={formik.errors.periodicity ? true : false}
              />
              <Stack direction="column">
                <Stack
                  alignItems="center"
                  gap={tokens.spacing.s050}
                  margin={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s075} ${tokens.spacing.s200}`}
                >
                  <Label htmlFor="payday" size="small">
                    Día de pago
                  </Label>
                  <Icon
                    icon={<MdInfoOutline />}
                    appearance={ComponentAppearance.PRIMARY}
                    onClick={onToggleInfoModal}
                    size="12px"
                    cursorHover
                  />
                </Stack>
                <Select
                  id="payday"
                  name="payday"
                  placeholder="Selecciónalo de la lista"
                  onChange={onChange}
                  options={paydayOptions ?? []}
                  disabled={!formik.values.periodicity}
                  size="compact"
                  value={formik.values.payday ?? ""}
                  fullwidth
                  message={formik.errors.payday}
                  invalid={formik.errors.payday ? true : false}
                />
              </Stack>
            </>
          )}

          {isExtraordinary && (
            <>
              <Select
                id="typePayment"
                name="typePayment"
                label="Tipo de pago"
                placeholder="Selecciónalo de la lista"
                onChange={onChange}
                options={typePaymentOptions ?? []}
                size="compact"
                value={formik.values.typePayment ?? ""}
                fullwidth
                message={formik.errors.typePayment}
                invalid={formik.errors.typePayment ? true : false}
              />
              <Stack direction="column" width="100%">
                <Stack
                  margin={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s075} ${tokens.spacing.s200}`}
                >
                  <Label htmlFor="month" size="small">
                    Día de pago
                  </Label>
                </Stack>
                <Grid
                  gap={tokens.spacing.s075}
                  templateColumns={`repeat(${isMobile ? 1 : 2}, 1fr)`}
                  autoRows="auto"
                  width="100%"
                >
                  <StyledSelectConatiner>
                    <Select
                      id="month"
                      name="month"
                      placeholder="Mes"
                      onChange={onChange}
                      options={monthOptions ?? []}
                      size="compact"
                      fullwidth
                      value={formik.values.month ?? ""}
                      message={formik.errors.month}
                      invalid={formik.errors.month ? true : false}
                    />
                  </StyledSelectConatiner>
                  <StyledSelectConatiner>
                    <Select
                      id="day"
                      name="day"
                      placeholder="Día"
                      onChange={onChange}
                      options={dayOptions ?? []}
                      size="compact"
                      fullwidth
                      disabled={!formik.values.month}
                      value={formik.values.day ?? ""}
                      message={formik.errors.day}
                      invalid={formik.errors.day ? true : false}
                    />
                  </StyledSelectConatiner>
                </Grid>
              </Stack>
            </>
          )}

          <Select
            id="numberDaysUntilCut"
            name="numberDaysUntilCut"
            label="# de días para el corte"
            placeholder="Selecciónalo de la lista"
            onChange={onChange}
            options={numberDaysUntilCutOptions}
            size="compact"
            value={formik.values.numberDaysUntilCut ?? ""}
            fullwidth
            message={formik.errors.numberDaysUntilCut}
            disabled={formik.values.periodicity && !formik.values.periodicity}
            invalid={formik.errors.numberDaysUntilCut ? true : false}
          />
        </Stack>

        <Stack gap={tokens.spacing.s250} justifyContent="flex-end">
          <Button
            spacing="wide"
            appearance={ComponentAppearance.GRAY}
            variant="filled"
            onClick={onCloseModal}
          >
            Cancelar
          </Button>

          <Button
            spacing="wide"
            appearance={ComponentAppearance.PRIMARY}
            variant="filled"
            loading={isLoading}
            onClick={onClick}
            disabled={comparisonData || !formik.isValid}
          >
            {actionText}
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node,
  );
};

export { AddCycleModal };
export type { IAddCycleModal };
