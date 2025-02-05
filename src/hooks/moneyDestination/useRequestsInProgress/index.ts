import { useState, useEffect } from "react";

import { IRequestsInProgress } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/requestsInProgress/IRequestsInProgress";
import { getRequestsInProgress } from "@services/moneyDestination/getRequestsInProgress";

const useRequestsInProgress = (bussinesUnits: string) => {
  const [requestsInProgress, setRequestsInProgress] = useState<
    IRequestsInProgress[]
  >([]);
  const [hasError, setHasError] = useState(false);
  const [searchRequestsInProgress, setSearchRequestsInProgress] =
    useState<string>("");
  const [loading, setLoading] = useState(true);
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");

  useEffect(() => {
    const fetchRequestsInProgressData = async () => {
      setLoading(true);
      try {
        const data = await getRequestsInProgress(bussinesUnits);
        setRequestsInProgress(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRequestsInProgressData();
  }, []);

  useEffect(() => {
    if (entryDeleted) {
      setRequestsInProgress((prev) =>
        prev.filter((entry) => entry.id !== entryDeleted),
      );
    }
  }, [entryDeleted]);

  const handleSearchRequestsInProgress = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchRequestsInProgress(e.target.value);
  };

  return {
    requestsInProgress,
    hasError,
    searchRequestsInProgress,
    loading,
    handleSearchRequestsInProgress,
    setEntryDeleted,
  };
};

export { useRequestsInProgress };
