import { notPoliciesModal } from "@config/generalCreditPolicies/assisted/goBackModal";
import { DecisionModal } from "@design/modals/decisionModal";
import { AddGenCreditPolicies } from "./addGeneralCreditPolicies";
import { useGeneralCreditPolicies } from "@hooks/GeneralCreditPolicies/useGeneralCreditPolicies";

const GeneralCreditPolicies = () => {
  const { showModal, handleCloseModal, handlePolicies } =
    useGeneralCreditPolicies();
  return (
    <>
      {showModal && (
        <>
          <AddGenCreditPolicies />
          <DecisionModal
            portalId="portal"
            title={notPoliciesModal.title}
            description={notPoliciesModal.description}
            actionText={notPoliciesModal.actionText}
            onCloseModal={handleCloseModal}
            onClick={handlePolicies}
          />
        </>
      )}
    </>
  );
};

export { GeneralCreditPolicies };
