import { MdOutlineArrowBack } from "react-icons/md";
import { Button, Stack, useMediaQuery } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { Accordion } from "@design/data/accordions";
import { tokens } from "@design/tokens";
import { DecisionModal } from "@design/modals/decisionModal";
import { addPayrollAgreementSteps } from "@config/payrollAgreement/payrollAgreementTab/assisted/steps";
import { RequestProcess } from "@design/feedback/RequestProcess";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { requestProcessMessage } from "@config/payrollAgreement/payrollAgreementTab/generic/requestProcessMessage";
import { finishModal } from "@config/payrollAgreement/payrollAgreementTab/generic/finishModal";
import { requestStatusMessage } from "@config/payrollAgreement/payrollAgreementTab/generic/requestStatusMessage";
import { IVerificationForm } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IVerificationForm";
import { verificationFormLabels } from "@config/payrollAgreement/payrollAgreementTab/assisted/verificationFormLabels";
import { VerificationBoxes } from "./verificationBoxes";

const VerificationForm = (props: IVerificationForm) => {
  const {
    requestSteps,
    showModal,
    showRequestProcessModal,
    updatedData,
    savePayrollAgreement,
    loading,
    typeRegularPayroll,
    showPendingReqModal,
    handleStepChange,
    onFinishForm,
    onPreviousStep,
    onToggleModal,
    onCloseRequestStatus,
    onClosePendingReqModal,
  } = props;

  const isTablet = useMediaQuery("(max-width: 1224px)");

  const isMobile = useMediaQuery("(max-width: 990px)");

  const canShowRequestProcess = showRequestProcessModal && savePayrollAgreement;

  const canShowPendingRequest =
    showPendingReqModal &&
    savePayrollAgreement &&
    savePayrollAgreement.requestNumber.length > 0;

  const steps = addPayrollAgreementSteps.filter((step) => {
    if (step.name.toLowerCase() === "verificación") return false;
    if (
      Number(step.id) === 4 &&
      (!updatedData.extraordinaryCycles.values ||
        updatedData.extraordinaryCycles.values.length === 0)
    ) {
      return false;
    }
    if (typeRegularPayroll) return true;
    return Number(step.id) !== 3;
  });

  return (
    <Stack direction="column" gap={tokens.spacing.s300}>
      {steps.map((step) => (
        <Accordion title={step.name} key={`${step.id}-box`}>
          <Stack
            direction="column"
            width="100%"
            alignItems="flex-end"
            gap={isTablet ? tokens.spacing.s150 : tokens.spacing.s200}
          >
            <VerificationBoxes
              typeRegularPayroll={typeRegularPayroll}
              updatedData={updatedData}
              stepKey={Number(step.id)}
              isMobile={isMobile}
            />

            <Button
              iconBefore={<MdOutlineArrowBack />}
              onClick={() => handleStepChange(step.number)}
              appearance={ComponentAppearance.DARK}
              variant="none"
            >
              {verificationFormLabels.returnStep}
            </Button>
          </Stack>
        </Accordion>
      ))}
      <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={onPreviousStep}
          appearance={ComponentAppearance.GRAY}
        >
          {verificationFormLabels.previous}
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onToggleModal}
          appearance={ComponentAppearance.PRIMARY}
        >
          {verificationFormLabels.finally}
        </Button>
      </Stack>

      {showModal && (
        <DecisionModal
          portalId="portal"
          title={finishModal.title}
          description={finishModal.description}
          actionText={finishModal.actionText}
          onCloseModal={onToggleModal}
          onClick={onFinishForm}
          loading={loading}
        />
      )}
      {canShowRequestProcess && (
        <RequestProcess
          portalId="portal"
          saveData={savePayrollAgreement}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={onCloseRequestStatus}
        />
      )}
      {canShowPendingRequest && (
        <RequestStatusModal
          portalId="portal"
          title={requestStatusMessage(savePayrollAgreement.staffName).title}
          description={
            requestStatusMessage(savePayrollAgreement.staffName).description
          }
          requestNumber={savePayrollAgreement.requestNumber}
          onClick={onClosePendingReqModal}
          onCloseModal={onClosePendingReqModal}
          loading={false}
          actionText={
            requestStatusMessage(savePayrollAgreement.staffName).actionText
          }
          appearance={ComponentAppearance.PRIMARY}
        />
      )}
    </Stack>
  );
};

export { VerificationForm };
