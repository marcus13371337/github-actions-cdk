import { IsSameType } from '../utils/isSameType.js';
import { BaseEnv, Env, EnvGetter } from './env.js';
import { Permissions } from './permissions.js';
import { Step } from './step.js';

export type JobParams<JobEnv extends BaseEnv, ParentEnv extends BaseEnv> = {
  name?: string;
  permissions?: Permissions;
  needs?: string | string[];
  if?: string;
  env?: Env<JobEnv>;
  steps: (params: {
    variables: {
      env: IsSameType<JobEnv, BaseEnv> extends true
        ? EnvGetter<ParentEnv>
        : EnvGetter<JobEnv & ParentEnv>;
    };
  }) => Step[];
};

export const job = <Env extends BaseEnv, ParentEnv extends BaseEnv>(
  id: string,
  params: JobParams<Env, ParentEnv>
): Job<Env, ParentEnv> => ({
  type: 'job',
  params,
  id,
});

export type Job<JobEnv extends BaseEnv, ParentEnv extends BaseEnv> = {
  type: 'job';
  params: JobParams<JobEnv, ParentEnv>;
  id: string;
};
