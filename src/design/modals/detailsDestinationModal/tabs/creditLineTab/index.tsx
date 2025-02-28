import { IRuleDecision } from "@isettingkit/input";
import { BusinessRules } from "@isettingkit/business-rules";
import { Stack, Tabs } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { IRulesFormTextValues } from "@ptypes/decisions/IRulesFormTextValues";
import { StyledContainer } from "./styles";
import { CreditLinesIncluded } from "./tabs/creditLinesIncluded";
import { CreditLinesRemoved } from "./tabs/creditLinesRemoved";
import { IMoreDetailsTabsConfig } from "../../types";

interface ICreditLineTab {
  data: IRuleDecision[];
  textValues: IRulesFormTextValues;
  decisionTemplate: IRuleDecision;
  smallScreenTab: boolean;
  isMoreDetails: boolean;
  moreDetailsTabsConfig?: IMoreDetailsTabsConfig;
  filteredTabsMoreDetConfig?: IMoreDetailsTabsConfig;
  isSelectedMoreDetails?: string;
  onTabChangeMoreDetails?: (id: string) => void;
}

const CreditLineTab = (props: ICreditLineTab) => {
  const {
    data,
    textValues,
    decisionTemplate,
    filteredTabsMoreDetConfig,
    isSelectedMoreDetails,
    moreDetailsTabsConfig,
    isMoreDetails,
    smallScreenTab,
    onTabChangeMoreDetails,
  } = props;

  const decicionDeleted = data.filter(
    (decision) => decision.transactionOperation === "Delete",
  );
  const decicionInserted = data.filter(
    (decision) => decision.transactionOperation === "Insert",
  );

  return (
    <Stack direction="column" justifyContent="space-between" height="85%">
      <StyledContainer $isMoreDetails={isMoreDetails}>
        {isMoreDetails ? (
          <Stack gap={tokens.spacing.s150} direction="column" height="100%">
            <Tabs
              tabs={
                filteredTabsMoreDetConfig
                  ? Object.values(filteredTabsMoreDetConfig)
                  : []
              }
              selectedTab={isSelectedMoreDetails ?? ""}
              onChange={onTabChangeMoreDetails ?? (() => console.log())}
              scroll={smallScreenTab ? true : false}
            />
            {isSelectedMoreDetails ===
              moreDetailsTabsConfig?.creditLineIncluded.id && (
              <CreditLinesIncluded
                data={decicionInserted}
                textValues={textValues}
                decisionTemplate={decisionTemplate}
              />
            )}
            {isSelectedMoreDetails ===
              moreDetailsTabsConfig?.creditLineRemoved.id &&
              data.length > 0 && (
                <CreditLinesRemoved
                  data={decicionDeleted}
                  textValues={textValues}
                  decisionTemplate={decisionTemplate}
                />
              )}
          </Stack>
        ) : (
          <>
            <BusinessRules
              controls={false}
              decisions={data}
              textValues={textValues}
              decisionTemplate={decisionTemplate}
              isModalOpen={false}
              selectedDecision={null}
              loading={false}
              handleOpenModal={() => console.log("")}
              handleCloseModal={() => console.log("")}
              handleSubmitForm={() => console.log("")}
              handleDelete={() => console.log("")}
              customMessageEmptyDecisions="Aún NO tienes definidas líneas de crédito, ve a editar"
            />
          </>
        )}
      </StyledContainer>
    </Stack>
  );
};

export { CreditLineTab };
