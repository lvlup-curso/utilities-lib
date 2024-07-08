import { isString } from "@src/check";

export const capitalize = (value: string) => {
  if (!isString(value)) return value;
  return value[0].toUpperCase() + value.slice(1).toLowerCase();
};
