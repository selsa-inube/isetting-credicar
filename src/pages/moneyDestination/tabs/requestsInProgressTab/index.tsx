import { useContext } from "react";
import { useRequestsInProgress } from "@hooks/moneyDestination/useRequestsInProgress";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { IEntry } from "@design/data/table/types";
import { RequestsInProgressTabUI } from "./interface";

function RequestsInProgressTab() {
  const { appData } = useContext(AuthAndPortalData);

  const {
    requestsInProgress,
    searchRequestsInProgress,
    loading,
    handleSearchRequestsInProgress,
    setEntryDeleted,
  } = useRequestsInProgress(appData.businessUnit.publicCode);

  return (
    <RequestsInProgressTabUI
      entries={requestsInProgress as IEntry[]}
      loading={loading}
      searchrequestProgress={searchRequestsInProgress}
      onSearchrequestProgress={handleSearchRequestsInProgress}
      setEntryDeleted={setEntryDeleted}
    />
  );
}

export { RequestsInProgressTab };
