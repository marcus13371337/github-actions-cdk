export const createVariableGetter = (prefix: string) => (name: string) => {
  return `\${{ ${prefix}.${name} }}`;
};
