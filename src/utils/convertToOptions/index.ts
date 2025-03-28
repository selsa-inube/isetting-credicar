import { IServerDomain } from "@ptypes/IServerDomain";

const convertToOptions = (array: string[] | number[]): IServerDomain[] => {
  return array.map((item) => {
    return {
      id: String(item),
      label: String(item),
      value: String(item),
    };
  });
};

export { convertToOptions };
