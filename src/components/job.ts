import { createVariableGetter } from '../utils/createVariable.js';
import { IsAny } from '../utils/types/isAny.js';
import { IsSameType } from '../utils/types/isSameType.js';
import { BaseComponent, createBaseComponent } from './baseComponent.js';
import { BaseEnv, Env, EnvGetter } from './env.js';
import { Permissions } from './permissions.js';
import { Step } from './step.js';

export type JobParams<JobEnv extends BaseEnv, ParentEnv extends BaseEnv> = {
  name?: string;
  permissions?: Permissions;
  needs?: string | string[];
  if?: string;
  env?: Env<JobEnv>;
  runsOn?: string | string[];
  steps: (params: {
    variables: {
      env: IsAny<JobEnv> extends true
        ? EnvGetter<ParentEnv>
        : IsSameType<JobEnv, BaseEnv> extends true
        ? EnvGetter<ParentEnv>
        : EnvGetter<JobEnv & ParentEnv>;
    };
  }) => Step[];
};

export const job = <Env extends BaseEnv, ParentEnv extends BaseEnv>(
  params: JobParams<Env, ParentEnv>
): Job<Env, ParentEnv> =>
  createBaseComponent('job', () => ({
    name: params.name,
    needs: params.needs,
    if: params.if,
    env: params.env?.toConfig(),
    permissions: params.permissions?.toConfig(),
    'runs-on': params.runsOn,
    steps: params
      .steps({
        variables: {
          env: (params.env
            ? createVariableGetter('env')
            : null) as IsAny<Env> extends true
            ? EnvGetter<ParentEnv>
            : IsSameType<Env, BaseEnv> extends true
            ? EnvGetter<ParentEnv>
            : EnvGetter<Env & ParentEnv>,
        },
      })
      .map((step) => step.toConfig()),
  }));

export type Job<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  JobEnv extends BaseEnv,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ParentEnv extends BaseEnv
> = BaseComponent<'job'>;
