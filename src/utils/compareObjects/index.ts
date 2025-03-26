/* eslint-disable @typescript-eslint/no-explicit-any */
const compareObjects = (object1: any, object2: any): boolean => {
  if (object1 === object2) return true;

  if (
    typeof object1 !== "object" ||
    object1 === null ||
    typeof object2 !== "object" ||
    object2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!compareObjects(object1[key], object2[key])) return false;
  }

  return true;
};

export { compareObjects };
