import { useState } from "react";
import { RequestsInProgressTabUI } from "./interface";

function RequestsInProgressTab() {
  const [searchrequestProgress, setSearchrequestProgress] =
    useState<string>("");

  const handleSearchrequestProgress = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchrequestProgress(e.target.value);
  };

  return (
    <RequestsInProgressTabUI
      loading={false}
      searchrequestProgress={searchrequestProgress}
      onSearchrequestProgress={handleSearchrequestProgress}
    />
  );
}

export { RequestsInProgressTab };
