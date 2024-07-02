export const capitalize = (value: unknown | string) => {
  if (typeof value !== "string") return value;
  return value[0].toUpperCase() + value.slice(1).toLowerCase();
};
