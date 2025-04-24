import { useContext } from "react";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { IEntry } from "@design/data/table/types";
import { useRequestsInProgress } from "@hooks/payrollAgreement/useRequestsInProgress";
import { RequestsInProgressTabUI } from "./interface";

const RequestsInProgressTab = () => {
  const { appData } = useContext(AuthAndPortalData);

  const {
    requestsInProgress,
    searchRequestsInProgress,
    loading,
    widthFirstColumn,
    smallScreen,
    handleSearchRequestsInProgress,
    setEntryCanceled,
  } = useRequestsInProgress(appData.businessUnit.publicCode);

  return (
    <RequestsInProgressTabUI
      entries={requestsInProgress as IEntry[]}
      loading={loading}
      searchrequestProgress={searchRequestsInProgress}
      onSearchrequestProgress={handleSearchRequestsInProgress}
      setEntryCanceled={setEntryCanceled}
      widthFirstColumn={widthFirstColumn}
      smallScreen={smallScreen}
    />
  );
};

export { RequestsInProgressTab };
