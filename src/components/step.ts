export type StepParams = {
  name?: string;
  uses?: string;
  run?: string;
};

export const step = (id: string, params?: StepParams) => {
  return {
    type: 'step',
    id,
    params,
  };
};

export type Step = ReturnType<typeof step>;
