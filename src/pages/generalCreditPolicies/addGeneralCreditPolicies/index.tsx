import { useAddGenCredPolicies } from "@hooks/GeneralCreditPolicies/useAddGenCredPolicies";
import { addGenCredPoliciesSteps } from "@config/generalCreditPolicies/assisted/steps";
import { AddGenCreditPoliciesUI } from "./interface";

const AddGenCreditPolicies = () => {
  const {
    currentStep,
    formValues,
    formReferences,
    isCurrentFormValid,
    smallScreen,
    contributionsPortfolio,
    incomePortfolio,
    setIncomePortfolio,
    setContributionsPortfolio,
    handleFormValidChange,
    handleNextStep,
    handlePreviousStep,
    handleToggleModal,
    setIsCurrentFormValid,
  } = useAddGenCredPolicies();

  return (
    <AddGenCreditPoliciesUI
      currentStep={currentStep}
      formReferences={formReferences}
      initialValues={formValues}
      formValid={isCurrentFormValid}
      steps={addGenCredPoliciesSteps}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      smallScreen={smallScreen}
      onToggleModal={handleToggleModal}
      handleFormValidChange={handleFormValidChange}
      contributionsPortfolio={contributionsPortfolio}
      setContributionsPortfolio={setContributionsPortfolio}
      incomePortfolio={incomePortfolio}
      setIncomePortfolio={setIncomePortfolio}
    />
  );
};

export { AddGenCreditPolicies };
