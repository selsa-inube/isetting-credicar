import { MdOutlineAdd } from "react-icons/md";
import { FormikProps } from "formik";
import { Button, Stack } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { Table } from "@design/data/table";
import { ComponentAppearance } from "@enum/appearances";
import { IEntry } from "@design/data/table/types";
import {
  actions,
  breakPoints,
  titles,
} from "@config/payrollAgreement/payrollAgreementTab/assisted/extraordinaryCyclesTable";
import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { IServerDomain } from "@ptypes/IServerDomain";
import { AddCycleModal } from "@design/modals/addCycleModal";
import {
  StyledContainer,
  StyledContainerFields,
  StyledFormContent,
} from "./styles";

interface IExtraordinaryPaymentCyclesFormUI {
  formik: FormikProps<IExtraordinaryCyclesEntry>;
  entries: IEntry[];
  editDataOption: boolean;
  valuesEqual: boolean;
  loading: boolean;
  showModal: boolean;
  isMobile: boolean;
  typePaymentOptions: IServerDomain[];
  numberDaysUntilCutOptions: IServerDomain[];
  monthOptions: IServerDomain[];
  dayOptions: IServerDomain[];
  onAddCycle: () => void;
  onToggleModal: () => void;
  onButtonClick: () => void;
  onReset: () => void;
  onChange: (name: string, value: string) => void;
  onPreviousStep: () => void;
  isDisabledButton?: boolean;
}

const ExtraordinaryPaymentCyclesFormUI = (
  props: IExtraordinaryPaymentCyclesFormUI,
) => {
  const {
    formik,
    loading,
    editDataOption,
    entries,
    showModal,
    onChange,
    onAddCycle,
    valuesEqual,
    isDisabledButton,
    isMobile,
    typePaymentOptions,
    monthOptions,
    dayOptions,
    numberDaysUntilCutOptions,
    onButtonClick,
    onReset,
    onToggleModal,
    onPreviousStep,
  } = props;

  return (
    <StyledContainer>
      <StyledFormContent>
        <Stack direction="column" gap={tokens.spacing.s300}>
          <StyledContainerFields $isMobile={isMobile}>
            <Stack
              direction="column"
              width="100%"
              gap={tokens.spacing.s250}
              alignItems="end"
            >
              <Button
                fullwidth={isMobile}
                iconBefore={<MdOutlineAdd />}
                onClick={onToggleModal}
                appearance={ComponentAppearance.PRIMARY}
              >
                Agregar ciclo de pago
              </Button>

              <Table
                id="portal"
                titles={titles}
                entries={entries}
                actions={actions}
                breakpoints={breakPoints}
                isLoading={loading}
                columnWidths={[50, 12, 10, 14]}
                withActionsTitles
                emptyDataMessage="Aún no hay ningún ciclo de pago registrado, presiona “+ Agregar ciclo de pago” para empezar."
              />
            </Stack>
          </StyledContainerFields>
        </Stack>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={editDataOption ? onReset : onPreviousStep}
          appearance={ComponentAppearance.GRAY}
          disabled={editDataOption ? valuesEqual : false}
          variant="outlined"
        >
          {editDataOption ? "Cancelar" : "Anterior"}
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onButtonClick}
          disabled={isDisabledButton}
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          {editDataOption ? "Guardar" : "Siguiente"}
        </Button>
      </Stack>
      {showModal && (
        <AddCycleModal
          actionText="Agregar"
          comparisonData={valuesEqual}
          formik={formik}
          isLoading={loading}
          portalId="portal"
          title="Agregar ciclo de pago"
          isExtraordinary
          typePaymentOptions={typePaymentOptions}
          monthOptions={monthOptions}
          dayOptions={dayOptions}
          numberDaysUntilCutOptions={numberDaysUntilCutOptions}
          onCloseModal={onToggleModal}
          onClick={onAddCycle}
          onChange={onChange}
        />
      )}
    </StyledContainer>
  );
};

export { ExtraordinaryPaymentCyclesFormUI };
