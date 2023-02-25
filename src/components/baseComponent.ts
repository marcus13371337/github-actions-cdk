export const createBaseComponent = <T extends string>(
  type: T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toConfig: any
): BaseComponent<T> => ({
  type,
  toConfig,
});

export type BaseComponent<T extends string> = {
  type: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toConfig: () => any;
};
