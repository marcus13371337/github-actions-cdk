import { BaseEnv, Env, EnvGetter } from './components/env.js';
import { Job } from './components/job.js';
import { Permissions } from './components/permissions.js';
import { Trigger } from './components/trigger.js';

export type Workflow<WorkflowEnv extends BaseEnv> = {
  name: string;
  runName?: string;
  on: Trigger | Trigger[];
  permissions?: Permissions;
  env: Env<WorkflowEnv>;
  jobs: (params: {
    variables: {
      env: EnvGetter<WorkflowEnv>;
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  }) => Job<unknown, WorkflowEnv>[];
};

export const createWorkflow = <EnvVariables extends BaseEnv>(
  workflow: Workflow<EnvVariables>
) => workflow;
