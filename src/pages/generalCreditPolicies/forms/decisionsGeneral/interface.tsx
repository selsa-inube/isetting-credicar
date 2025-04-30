import { MdInfoOutline } from "react-icons/md";
import {
  Button,
  Checkbox,
  Icon,
  inube,
  Select,
  Stack,
  Text,
} from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { DecisionModal } from "@design/modals/decisionModal";
import { BoxContainer } from "@design/layout/boxContainer";
import { tokens } from "@design/tokens";
import { decisionsGenLabels } from "@config/generalCreditPolicies/assisted/decisionsGenLabels";
import { IDecisionsGeneralFormUI } from "@ptypes/generalCredPolicies/forms/IDecisionsGeneralFormUI";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { methodsOfCalculation } from "@config/generalCreditPolicies/assisted/methodsOfCalculation";
import { infoModal } from "@config/generalCreditPolicies/generic/infoModal";
import { ToggleGeneralDecision } from "./toggleGeneralDecision";
import { StyledFormContent } from "./styles";

const DecisionsGeneralFormUI = (props: IDecisionsGeneralFormUI) => {
  const {
    formik,
    loading,
    editDataOption,
    isDisabledButton,
    showModal,
    isMobile,
    onToggle,
    onReferenceChange,
    onButtonClick,
    onResetEdit,
    onInfoModal,
    onChangeMethods,
  } = props;

  return (
    <BoxContainer
      direction="column"
      gap={tokens.spacing.s250}
      minHeight="55vh"
      backgroundColor={inube.palette.neutral.N0}
      boxSizing="initial"
    >
      <StyledFormContent>
        <form>
          <Stack direction="column">
            <BoxContainer
              direction="column"
              borderColor={inube.palette.neutral.N40}
              borderRadius={tokens.spacing.s100}
              width="auto"
              gap={tokens.spacing.s300}
              backgroundColor={inube.palette.neutral.N0}
              boxSizing="border-box"
              padding={
                isMobile ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`
              }
            >
              <Stack direction="column" gap={tokens.spacing.s200}>
                <Stack alignItems="center" gap={tokens.spacing.s050}>
                  <Text size="medium">{decisionsGenLabels.first}</Text>
                  <Icon
                    icon={<MdInfoOutline />}
                    appearance={ComponentAppearance.PRIMARY}
                    onClick={onInfoModal}
                    size="12px"
                    cursorHover
                  />
                </Stack>
                <Select
                  fullwidth
                  disabled={false}
                  id="reference"
                  name="reference"
                  label=""
                  placeholder="Seleccione de la lista"
                  onChange={onReferenceChange}
                  options={getDomainById("referenceDecision")}
                  size="compact"
                  value={formik.values.reference ?? ""}
                  required
                  message={formik.errors.reference}
                  invalid={formik.errors.reference ? true : false}
                />
              </Stack>

              <Stack direction="column" gap={tokens.spacing.s200}>
                <Stack alignItems="center" gap={tokens.spacing.s050}>
                  <Text size="medium">{decisionsGenLabels.second}</Text>
                  <Icon
                    icon={<MdInfoOutline />}
                    appearance={ComponentAppearance.PRIMARY}
                    onClick={onInfoModal}
                    size="12px"
                    cursorHover
                  />
                </Stack>
                <Stack
                  direction="column"
                  gap={tokens.spacing.s100}
                  margin={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s200}`}
                >
                  {methodsOfCalculation.map((method) => (
                    <Checkbox
                      key={method.id}
                      id={method.id}
                      name={method.id}
                      label={method.label}
                      checked={Boolean(
                        formik.values[method.id as keyof typeof formik.values],
                      )}
                      onChange={onChangeMethods}
                      value={method.value}
                    />
                  ))}
                </Stack>
              </Stack>
              <ToggleGeneralDecision
                name="additionalDebtors"
                label={decisionsGenLabels.third}
                isChecked={formik.values.additionalDebtors}
                onToggle={onToggle}
              />
              <ToggleGeneralDecision
                name="sourcesIncome"
                label={decisionsGenLabels.fourth}
                isChecked={formik.values.sourcesIncome}
                onToggle={onToggle}
              />
              <ToggleGeneralDecision
                name="financialObligations"
                label={decisionsGenLabels.fifth}
                isChecked={formik.values.financialObligations}
                onToggle={onToggle}
              />
              <ToggleGeneralDecision
                name="realGuarantees"
                label={decisionsGenLabels.sixth}
                isChecked={formik.values.realGuarantees}
                onToggle={onToggle}
              />
            </BoxContainer>
          </Stack>
        </form>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
        {editDataOption && (
          <Button
            onClick={onResetEdit}
            variant="outlined"
            appearance={ComponentAppearance.GRAY}
          >
            {decisionsGenLabels.buttonCancelLabel}
          </Button>
        )}

        <Button
          onClick={onButtonClick}
          disabled={isDisabledButton}
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          {editDataOption
            ? decisionsGenLabels.buttonSaveLabel
            : decisionsGenLabels.buttonNextLabel}
        </Button>
      </Stack>
      {showModal && (
        <DecisionModal
          portalId="portal"
          title={infoModal.title}
          description={infoModal.description}
          actionText={infoModal.actionText}
          withIcon
          withCancelButton={false}
          icon={<MdInfoOutline />}
          appearance={ComponentAppearance.PRIMARY}
          onCloseModal={onInfoModal}
          onClick={onInfoModal}
        />
      )}
    </BoxContainer>
  );
};

export { DecisionsGeneralFormUI };
