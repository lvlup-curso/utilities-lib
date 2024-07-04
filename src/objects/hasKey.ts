import { isString } from "@src/strings";
import { isObject } from "./isObject";

export const hasKey = (key: string, target: object) => {
  if (!isString(key) || !isObject(target)) {
    return false;
  }

  return key in target;
};
