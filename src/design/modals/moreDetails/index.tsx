import {
  Stack,
  Text,
  Divider,
  useMediaQuery,
  Tabs,
  Grid,
  inube,
} from "@inubekit/inubekit";

import { moreDetailsRequestModal } from "@config/payrollAgreement/requestsInProgressTab/details/moreDetailsRequestModal";
import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { ComponentAppearance } from "@enum/appearances";
import { IEntry } from "@design/data/table/types";
import { BoxContainer } from "@design/layout/boxContainer";
import { ModalWrapper } from "@design/modals/modalWrapper";
import { IMoreDetails } from "@ptypes/payrollAgreement/requestInProgTab/IMoreDetails";
import { OrdinaryPaymentCycles } from "./tabs/ordinaryPaymentCycles";
import { ExtraordinaryPaymentCycles } from "./tabs/extraordinaryPaymentCycles";

const MoreDetails = (props: IMoreDetails) => {
  const {
    isSelected,
    abbreviatedName,
    defaultSelectedTab,
    filteredTabsConfig,
    detailsTabsConfig,
    data,
    portalId,
    smallScreenTab,
    labelsDetails,
    labelsPaymentCard,
    ordinaryPaymentData,
    extraordinaryPaymentData,
    ordinaryIncludedData,
    ordinaryEliminatedData,
    extraordinaryIncludedData,
    extraordinaryEliminatedData,
    onCloseModal,
    onTabChange,
  } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);

  const scroll =
    smallScreenTab || Object.entries(filteredTabsConfig).length > 2
      ? true
      : false;

  const hasData = (data?: IEntry[]) => data && data.length > 0;

  const hasAnyPaymentData = [
    ordinaryPaymentData,
    extraordinaryPaymentData,
    ordinaryIncludedData,
    ordinaryEliminatedData,
    extraordinaryIncludedData,
    extraordinaryEliminatedData,
  ].some(hasData);

  const showOrdinaryPayCycles =
    ordinaryPaymentData && isSelected === detailsTabsConfig.ordinaryPayment?.id;

  const showExtraordinaryPayCycles =
    extraordinaryPaymentData &&
    extraordinaryPaymentData.length > 0 &&
    isSelected === detailsTabsConfig.extraordinaryPayment?.id;

  const showOrdinaryIncluded =
    ordinaryIncludedData &&
    ordinaryIncludedData.length > 0 &&
    isSelected === detailsTabsConfig.ordinaryPaymentIncluded?.id;

  const showOrdinaryEliminated =
    ordinaryEliminatedData &&
    ordinaryEliminatedData.length > 0 &&
    isSelected === detailsTabsConfig.ordinaryPaymentRemoved?.id;

  const showExtraordinaryIncluded =
    extraordinaryIncludedData &&
    extraordinaryIncludedData.length > 0 &&
    isSelected === detailsTabsConfig.extraordinaryPaymentIncluded?.id;

  const showExtraordinaryEliminated =
    extraordinaryEliminatedData &&
    extraordinaryEliminatedData.length > 0 &&
    isSelected === detailsTabsConfig.extraordinaryPaymentRemoved?.id;

  return (
    <ModalWrapper
      width={isMobile ? "300px" : "700px"}
      minHeight={isMobile ? "auto" : "350px"}
      maxHeight={isMobile ? "600px" : "750px"}
      isMobile={isMobile}
      labelActionButton={moreDetailsRequestModal.labelActionButton}
      labelCloseButton={moreDetailsRequestModal.labelCloseButton}
      labelCloseModal={moreDetailsRequestModal.labelCloseModal}
      portalId={portalId}
      title={moreDetailsRequestModal.title}
      onClick={onCloseModal}
      onCloseModal={onCloseModal}
    >
      <BoxContainer
        gap={tokens.spacing.s100}
        direction="column"
        borderColor={inube.palette.neutral.N40}
        borderRadius={tokens.spacing.s100}
        width="100%"
        maxHeight={isMobile ? "410px" : "auto"}
        padding={isMobile ? `${tokens.spacing.s150}` : `${tokens.spacing.s200}`}
        backgroundColor={inube.palette.neutral.N0}
        boxSizing="border-box"
        overflowY="auto"
        overflowX="hidden"
      >
        <Stack gap={tokens.spacing.s100} direction="column">
          <Text
            type="title"
            size="medium"
            appearance={ComponentAppearance.GRAY}
            weight="bold"
          >
            {`${moreDetailsRequestModal.subtitle} ${abbreviatedName}`}
          </Text>
          <Divider dashed />
        </Stack>
        <Grid
          templateColumns={isMobile ? "auto" : "repeat(2,auto)"}
          templateRows={isMobile ? "repeat(4,auto)" : "repeat(2,auto)"}
          gap={tokens.spacing.s150}
          padding={
            isMobile
              ? `${tokens.spacing.s0}`
              : `${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s075}`
          }
        >
          {labelsDetails.map(
            (field, id) =>
              data[field.id] && (
                <BoxContainer
                  key={id}
                  direction="column"
                  width={isMobile ? "100%" : "304px"}
                  minHeight="52px"
                  borderRadius={tokens.spacing.s100}
                  padding={`${tokens.spacing.s075} ${tokens.spacing.s200}`}
                  boxSizing="border-box"
                  backgroundColor={inube.palette.neutral.N10}
                >
                  <Text size="medium" type="label" weight="bold">
                    {field.titleName}
                  </Text>
                  <Text
                    size="medium"
                    appearance={ComponentAppearance.GRAY}
                    ellipsis
                  >
                    {data[field.id]}
                  </Text>
                </BoxContainer>
              ),
          )}
        </Grid>
        <Stack
          direction="column"
          gap={tokens.spacing.s150}
          padding={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s150}`}
        >
          {hasAnyPaymentData && (
            <>
              <Tabs
                tabs={Object.values(filteredTabsConfig)}
                selectedTab={isSelected ?? defaultSelectedTab}
                onChange={onTabChange}
                scroll={scroll}
              />
              {showOrdinaryPayCycles && (
                <OrdinaryPaymentCycles
                  data={ordinaryPaymentData}
                  labelsPaymentCard={labelsPaymentCard}
                />
              )}
              {showExtraordinaryPayCycles && (
                <ExtraordinaryPaymentCycles
                  data={extraordinaryPaymentData}
                  labelsPaymentCard={labelsPaymentCard}
                />
              )}

              {showOrdinaryIncluded && (
                <OrdinaryPaymentCycles
                  data={ordinaryIncludedData}
                  labelsPaymentCard={labelsPaymentCard}
                />
              )}
              {showOrdinaryEliminated && (
                <OrdinaryPaymentCycles
                  data={ordinaryEliminatedData}
                  labelsPaymentCard={labelsPaymentCard}
                />
              )}
              {showExtraordinaryIncluded && (
                <ExtraordinaryPaymentCycles
                  data={extraordinaryIncludedData}
                  labelsPaymentCard={labelsPaymentCard}
                />
              )}
              {showExtraordinaryEliminated && (
                <ExtraordinaryPaymentCycles
                  data={extraordinaryEliminatedData}
                  labelsPaymentCard={labelsPaymentCard}
                />
              )}
            </>
          )}
        </Stack>
      </BoxContainer>
    </ModalWrapper>
  );
};

export { MoreDetails };
export type { IMoreDetails };
