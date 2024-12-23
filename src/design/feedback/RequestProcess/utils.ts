import { IRequestSteps } from "./types";

const countVerifiedRequests = (requests: IRequestSteps[]) => {
  const countVerified = requests.filter(
    (request) => request.status === "completed" || request.status === "error",
  ).length;
  return (countVerified * 100) / requests.length;
};

const verifiedErrorRequest = (requests: IRequestSteps[]): boolean => {
  return requests.find((request) => request.status === "error") ? true : false;
};

export { countVerifiedRequests, verifiedErrorRequest };
