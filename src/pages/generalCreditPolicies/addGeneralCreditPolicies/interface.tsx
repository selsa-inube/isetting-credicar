import { Assisted, Breadcrumbs, Stack } from "@inubekit/inubekit";
import { Title } from "@design/data/title";
import { tokens } from "@design/tokens";
import { IAddGenCreditPoliciesUI } from "@ptypes/generalCredPolicies/IAddGenCreditPoliciesUI";
import { addLabels } from "@config/generalCreditPolicies/assisted/addLabels";
import { crumbsAddGenCredPolicies } from "@config/generalCreditPolicies/assisted/navigation";
import { controlsAssisted } from "@config/generalCreditPolicies/assisted/controlsAssisted";
import { DecisionsGeneralForm } from "../forms/decisionsGeneral";

const AddGenCreditPoliciesUI = (props: IAddGenCreditPoliciesUI) => {
  const {
    currentStep,
    formReferences,
    formValid,
    initialValues,
    smallScreen,
    steps,
    onNextStep,
    onPreviousStep,
    onToggleModal,
  } = props;

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${tokens.spacing.s100}`
          : `${tokens.spacing.s300} ${tokens.spacing.s800}`
      }
    >
      <Stack gap={tokens.spacing.s300} direction="column">
        <Stack gap={tokens.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsAddGenCredPolicies} />
          <Title
            title={addLabels.title}
            description={addLabels.description}
            sizeTitle="large"
            navigatePage="/"
          />
        </Stack>
        <Stack gap={tokens.spacing.s300} direction="column">
          <Assisted
            step={steps[currentStep - 1]}
            totalSteps={steps.length}
            onBackClick={onPreviousStep}
            onNextClick={onNextStep}
            onSubmitClick={onToggleModal}
            disableNext={formValid}
            controls={controlsAssisted}
            size={smallScreen ? "small" : "large"}
          />
          <Stack direction="column">
            {currentStep === 1 && (
              <DecisionsGeneralForm
                ref={formReferences.decisionsGeneral}
                initialValues={initialValues.decisionsGeneral.values}
                handleNextStep={onNextStep}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AddGenCreditPoliciesUI };
