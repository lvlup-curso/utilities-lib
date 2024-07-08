import { isString, isObject } from "@src/check";

export const hasKey = (key: string, target: object) => {
  if (!isString(key) || !isObject(target)) {
    return false;
  }

  return key in target;
};
