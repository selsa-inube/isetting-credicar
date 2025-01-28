import { statusRequest } from "@config/status/statusRequest";

const normalizeStatusByName = (status: string) =>
  statusRequest.find((element) => element.name === status);

export { normalizeStatusByName };
