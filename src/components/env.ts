import { IsSameType } from '../utils/types/isSameType.js';
import { BaseComponent, createBaseComponent } from './baseComponent.js';

export type BaseEnv = {
  [key: string]: string | number | boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Env<T> = BaseComponent<'env'>;

export type EnvGetter<EnvVariables extends BaseEnv> = IsSameType<
  EnvVariables,
  BaseEnv
> extends true
  ? never
  : <T extends keyof EnvVariables>(name: T) => string;

export const env = <T>(variables: T): Env<T> => {
  return createBaseComponent('env', () => variables);
};
