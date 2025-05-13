import { Assisted, Breadcrumbs, Stack } from "@inubekit/inubekit";
import { Title } from "@design/data/title";
import { tokens } from "@design/tokens";
import { IAddGenCreditPoliciesUI } from "@ptypes/generalCredPolicies/IAddGenCreditPoliciesUI";
import { addLabels } from "@config/generalCreditPolicies/assisted/addLabels";
import { crumbsAddGenCredPolicies } from "@config/generalCreditPolicies/assisted/navigation";
import { controlsAssisted } from "@config/generalCreditPolicies/assisted/controlsAssisted";
import { DecisionsForm } from "@design/forms/decisions";
import { deleteModal } from "@config/decisions/messages";
import { decisionContributionsPortfConfig } from "@config/decisions/decisionTempContributionsPortfolio";
import { revertModalDisplayData } from "@utils/revertModalDisplayData";
import { decisionIncomePortfolioConfig } from "@config/decisions/decisionTempIncomePortfolio";
import { textValuesBusinessRules } from "@config/generalCreditPolicies/assisted/businessRules";
import { contributionsPortfLabels } from "@config/generalCreditPolicies/assisted/contributionsPortfLabels";
import { incomePortfLabels } from "@config/generalCreditPolicies/assisted/incomePortfLabels";
import { nameRules } from "@config/generalCreditPolicies/assisted/nameRules";
import { DecisionsGeneralForm } from "../forms/decisionsGeneral";

const AddGenCreditPoliciesUI = (props: IAddGenCreditPoliciesUI) => {
  const {
    currentStep,
    formReferences,
    formValid,
    initialValues,
    smallScreen,
    steps,
    contributionsPortfolio,
    incomePortfolio,
    setIncomePortfolio,
    setContributionsPortfolio,
    handleFormValidChange,
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
            showCurrentStepNumber={false}
            size={smallScreen ? "small" : "large"}
          />
          <Stack direction="column">
            {currentStep === 1 && (
              <DecisionsGeneralForm
                ref={formReferences.decisionsGeneral}
                initialValues={initialValues.decisionsGeneral.values}
                handleNextStep={onNextStep}
                handleFormValidChange={handleFormValidChange}
              />
            )}
            {currentStep === 2 && (
              <DecisionsForm
                deleteModal={deleteModal}
                textValuesBusinessRules={textValuesBusinessRules}
                decisionTemplateConfig={decisionContributionsPortfConfig}
                onButtonClick={onNextStep}
                onPreviousStep={onPreviousStep}
                initialValues={contributionsPortfolio}
                setDecisions={setContributionsPortfolio}
                revertModalDisplayData={revertModalDisplayData}
                labelBusinessRules={nameRules.contributionsPortfolio}
                nameRule=""
                titleContentAddCard={
                  contributionsPortfLabels.titleContentAddCard
                }
                messageEmptyDecisions={
                  contributionsPortfLabels.messageEmptyDecisions
                }
                disabledButton={contributionsPortfolio.length === 0}
              />
            )}
            {currentStep === 3 && (
              <DecisionsForm
                deleteModal={deleteModal}
                textValuesBusinessRules={textValuesBusinessRules}
                decisionTemplateConfig={decisionIncomePortfolioConfig}
                onButtonClick={onNextStep}
                onPreviousStep={onPreviousStep}
                initialValues={incomePortfolio}
                setDecisions={setIncomePortfolio}
                revertModalDisplayData={revertModalDisplayData}
                labelBusinessRules={nameRules.incomePortfolio}
                nameRule=""
                titleContentAddCard={incomePortfLabels.titleContentAddCard}
                messageEmptyDecisions={incomePortfLabels.messageEmptyDecisions}
                disabledButton={incomePortfolio.length === 0}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AddGenCreditPoliciesUI };
