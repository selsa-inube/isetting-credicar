import { useAddGenCredPolicies } from "@hooks/GeneralCreditPolicies/useAddGenCredPolicies";
import { addGenCredPoliciesSteps } from "@config/generalCreditPolicies/assisted/steps";
import { AddGenCreditPoliciesUI } from "./interface";

const AddGenCreditPolicies = () => {
  const {
    currentStep,
    formValues,
    formReferences,
    smallScreen,
    contributionsPortfolio,
    incomePortfolio,
    formValid,
    showGoBackModal,
    handleCloseGoBackModal,
    handleGoBack,
    handleOpenModal,
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
      formValid={formValid}
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
      showGoBackModal={showGoBackModal}
      onCloseGoBackModal={handleCloseGoBackModal}
      onGoBack={handleGoBack}
      onOpenModal={handleOpenModal}
    />
  );
};

export { AddGenCreditPolicies };
