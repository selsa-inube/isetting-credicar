import { MdOutlineAdd } from "react-icons/md";
import { Button, Stack } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { Table } from "@design/data/table";
import { ComponentAppearance } from "@enum/appearances";
import {
  breakPoints,
  titles,
  actionsConfig,
} from "@config/payrollAgreement/payrollAgreementTab/assisted/extraordinaryCyclesTable";
import { AddCycleModal } from "@design/modals/addCycleModal";
import { cyclespaymentLabels } from "@config/payrollAgreement/payrollAgreementTab/forms/cyclespaymentLabels";
import { IExtraordinaryPaymentCyclesFormUI } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryPaymentCyclesFormUI";
import {
  StyledContainer,
  StyledContainerFields,
  StyledFormContent,
} from "./styles";

const ExtraordinaryPaymentCyclesFormUI = (
  props: IExtraordinaryPaymentCyclesFormUI,
) => {
  const {
    formik,
    loading,
    editDataOption,
    entries,
    showModal,
    valuesEqual,
    isDisabledButton,
    isMobile,
    typePaymentOptions,
    monthOptions,
    dayOptions,
    numberDaysUntilCutOptions,
    onChange,
    onAddCycle,
    onButtonClick,
    onToggleModal,
    onPreviousStep,
    setEntryDeleted,
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
                columnWidths={[50, 12, 10, 14]}
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
          disabled={isDisabledButton}
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          {editDataOption
            ? cyclespaymentLabels.sendButton
            : cyclespaymentLabels.nextButton}
        </Button>
      </Stack>
      {showModal && (
        <AddCycleModal
          actionText={cyclespaymentLabels.actionText}
          comparisonData={valuesEqual}
          formik={formik}
          isLoading={loading}
          portalId="portal"
          title={cyclespaymentLabels.addPaymentCycle}
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
