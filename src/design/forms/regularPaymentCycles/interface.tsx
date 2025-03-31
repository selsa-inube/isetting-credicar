import { MdInfoOutline, MdOutlineAdd } from "react-icons/md";
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
} from "@config/payrollAgreement/payrollAgreementTab/assisted/ordinaryCyclesTable";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { AddCycleModal } from "@design/modals/addCycleModal";
import { IServerDomain } from "@ptypes/IServerDomain";
import { DecisionModal } from "@design/modals/decisionModal";
import { IMessageModal } from "@ptypes/decisions/IMessageModal";
import {
  StyledContainer,
  StyledContainerFields,
  StyledFormContent,
} from "./styles";

interface IRegularPaymentCyclesFormUI {
  editDataOption: boolean;
  entries: IEntry[];
  formik: FormikProps<IOrdinaryCyclesEntry>;
  infoModal: IMessageModal;
  loading: boolean;
  numberDaysUntilCutOptions: IServerDomain[];
  paydayOptions: IServerDomain[];
  periodicityOptions: IServerDomain[];
  showAddModal: boolean;
  showInfoModal: boolean;
  valuesEqual: boolean;
  isMobile: boolean;
  onToggleInfoModal: () => void;
  onAddCycle: () => void;
  onToggleModal: () => void;
  onButtonClick: () => void;
  onReset: () => void;
  onChange: (name: string, value: string) => void;
  onPreviousStep: () => void;
  setEntryDeleted: (value: string | number) => void;
  isDisabledButton?: boolean;
}

const RegularPaymentCyclesFormUI = (props: IRegularPaymentCyclesFormUI) => {
  const {
    editDataOption,
    entries,
    formik,
    infoModal,
    isDisabledButton,
    loading,
    numberDaysUntilCutOptions,
    paydayOptions,
    periodicityOptions,
    showAddModal,
    showInfoModal,
    valuesEqual,
    isMobile,
    setEntryDeleted,
    onChange,
    onAddCycle,
    onToggleInfoModal,
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
                columnWidths={[8, 30, 20, 18, 15]}
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
          disabled={
            editDataOption ? isDisabledButton && !loading : entries.length === 0
          }
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          {editDataOption ? "Guardar" : "Siguiente"}
        </Button>
      </Stack>
      {showAddModal && (
        <AddCycleModal
          actionText="Agregar"
          comparisonData={valuesEqual}
          formik={formik}
          isLoading={loading}
          portalId="portal"
          title="Agregar ciclo de pago"
          isOrdinary={true}
          periodicityOptions={periodicityOptions}
          paydayOptions={paydayOptions}
          numberDaysUntilCutOptions={numberDaysUntilCutOptions}
          onCloseModal={onToggleModal}
          onClick={onAddCycle}
          onChange={onChange}
          onToggleInfoModal={onToggleInfoModal}
        />
      )}

      {showInfoModal && (
        <DecisionModal
          portalId="portal"
          title={infoModal.title}
          description={infoModal.description}
          actionText={infoModal.actionText}
          withIcon
          withCancelButton={false}
          icon={<MdInfoOutline />}
          appearance={ComponentAppearance.PRIMARY}
          onCloseModal={onToggleInfoModal}
          onClick={onToggleInfoModal}
          moreDetails={infoModal.moreDetails}
        />
      )}
    </StyledContainer>
  );
};

export { RegularPaymentCyclesFormUI };
