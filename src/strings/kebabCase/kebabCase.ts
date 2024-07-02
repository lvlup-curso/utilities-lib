export const kebabCase = (text: string): string => {
  if (typeof text !== "string") return text;
  return text.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_.]/g, "-");
};
