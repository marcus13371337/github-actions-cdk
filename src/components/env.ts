import { IsSameType } from '../utils/isSameType.js';

export type BaseEnv = {
  [key: string]: string;
};

export type Env<T> = {
  type: 'env';
  variables: T;
};

export type EnvGetter<EnvVariables extends BaseEnv> = IsSameType<
  EnvVariables,
  BaseEnv
> extends true
  ? never
  : <T extends keyof EnvVariables>(name: T) => string;

export const env = <T>(variables: T): Env<T> => {
  return {
    type: 'env',
    variables,
  };
};
