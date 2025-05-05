import { IRequestSteps } from "@design/modals/requestProcessModal/types";

const verifiedErrorRequest = (requests: IRequestSteps[]): boolean => {
  return requests.find((request) => request.status === "error") ? true : false;
};

export { verifiedErrorRequest };
