import { MdOutlineAdd } from "react-icons/md";
import { FormikProps } from "formik";
import { Button, Stack } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { Table } from "@design/data/table";
import { ComponentAppearance } from "@enum/appearances";
import { IEntry } from "@design/data/table/types";
import {
  breakPoints,
  titles,
  actionsConfig,
} from "@config/payrollAgreement/payrollAgreementTab/assisted/extraordinaryCyclesTable";
import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
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
  onAddCycle: () => void;
  onToggleModal: () => void;
  onButtonClick: () => void;
  onReset: () => void;
  onChange: (name: string, value: string) => void;
  onPreviousStep: () => void;
  setEntryDeleted: (value: string | number) => void;
  isDisabledButton?: boolean;
}

const ExtraordinaryPaymentCyclesFormUI = (
  props: IExtraordinaryPaymentCyclesFormUI,
) => {
  const {
    //formik,
    loading,
    editDataOption,
    entries,
    showModal,
    // onChange,
    // onAddCycle,
    valuesEqual,
    isDisabledButton,
    isMobile,
    setEntryDeleted,
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
                actions={actionsConfig(setEntryDeleted)}
                breakpoints={breakPoints}
                isLoading={loading}
                columnWidths={[38, 20, 18, 15]}
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
          disabled={editDataOption ? isDisabledButton && !loading : true}
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          {editDataOption ? "Guardar" : "Siguiente"}
        </Button>
      </Stack>
      {showModal && <></>}
    </StyledContainer>
  );
};

export { ExtraordinaryPaymentCyclesFormUI };
