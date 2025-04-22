import { MdInfoOutline, MdOutlineAdd } from "react-icons/md";
import { Button, Stack } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { Table } from "@design/data/table";
import { ComponentAppearance } from "@enum/appearances";
import {
  breakPoints,
  titles,
  actionsConfig,
} from "@config/payrollAgreement/payrollAgreementTab/assisted/ordinaryCyclesTable";
import { AddCycleModal } from "@design/modals/addCycleModal";
import { DecisionModal } from "@design/modals/decisionModal";
import { IRegularPaymentCyclesFormUI } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IRegularPaymentCyclesFormUI";
import { cyclespaymentLabels } from "@config/payrollAgreement/payrollAgreementTab/forms/cyclespaymentLabels";
import {
  StyledContainer,
  StyledContainerFields,
  StyledFormContent,
} from "./styles";

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
                {cyclespaymentLabels.titlePaymentCycle}
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
                emptyDataMessage={cyclespaymentLabels.emptyDataMessage}
              />
            </Stack>
          </StyledContainerFields>
        </Stack>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={onPreviousStep}
          appearance={ComponentAppearance.GRAY}
          variant="outlined"
        >
          {editDataOption
            ? cyclespaymentLabels.cancelButton
            : cyclespaymentLabels.previousButton}
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
          {editDataOption
            ? cyclespaymentLabels.sendButton
            : cyclespaymentLabels.nextButton}
        </Button>
      </Stack>
      {showAddModal && (
        <AddCycleModal
          actionText={cyclespaymentLabels.actionText}
          comparisonData={valuesEqual}
          formik={formik}
          isLoading={loading}
          portalId="portal"
          title={cyclespaymentLabels.addPaymentCycle}
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
